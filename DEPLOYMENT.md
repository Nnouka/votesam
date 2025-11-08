# AWS Deployment Guide for votesam.yinyangr.com

## Prerequisites
- AWS Account
- AWS CLI installed and configured
- Domain registered (yinyangr.com)
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Build the Application
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 2. Create S3 Bucket

```bash
# Create bucket
aws s3 mb s3://votesam.yinyangr.com --region us-east-1

# Enable static website hosting
aws s3 website s3://votesam.yinyangr.com \
  --index-document index.html \
  --error-document index.html
```

### 3. Configure Bucket for Public Access

Disable "Block all public access" in S3 bucket settings, then apply this bucket policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::votesam.yinyangr.com/*"
    }
  ]
}
```

Save as `bucket-policy.json` and apply:
```bash
aws s3api put-bucket-policy \
  --bucket votesam.yinyangr.com \
  --policy file://bucket-policy.json
```

### 4. Upload Files to S3

```bash
# Upload all files
aws s3 sync dist/ s3://votesam.yinyangr.com --delete

# Set cache control for static assets (1 year)
aws s3 cp s3://votesam.yinyangr.com/assets \
  s3://votesam.yinyangr.com/assets \
  --recursive \
  --metadata-directive REPLACE \
  --cache-control "public, max-age=31536000, immutable"

# Set no-cache for HTML (for updates)
aws s3 cp s3://votesam.yinyangr.com/index.html \
  s3://votesam.yinyangr.com/index.html \
  --metadata-directive REPLACE \
  --cache-control "no-cache, no-store, must-revalidate" \
  --content-type "text/html"
```

### 5. Request SSL Certificate (AWS Certificate Manager)

```bash
# Request certificate (must be in us-east-1 for CloudFront)
aws acm request-certificate \
  --domain-name votesam.yinyangr.com \
  --validation-method DNS \
  --region us-east-1
```

1. Go to AWS Certificate Manager console
2. Note the CNAME record details for validation
3. Add the CNAME record to Route 53 (see step 7)

### 6. Create CloudFront Distribution

Using AWS Console (recommended):

1. Go to CloudFront → Create Distribution
2. **Origin Settings**:
   - Origin Domain: `votesam.yinyangr.com.s3-website-us-east-1.amazonaws.com`
   - Protocol: HTTP only (S3 website endpoint)
   - Name: Auto-generated
3. **Default Cache Behavior**:
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Allowed HTTP Methods: GET, HEAD, OPTIONS
   - Cache Policy: CachingOptimized
4. **Settings**:
   - Alternate Domain Names (CNAMEs): `votesam.yinyangr.com`
   - SSL Certificate: Custom SSL Certificate (select your ACM cert)
   - Default Root Object: `index.html`
5. Create Distribution

**Note the Distribution Domain Name** (e.g., d1234567890.cloudfront.net) and **Distribution ID** for later use.

### 7. Configure Route 53

#### Add Certificate Validation Record (if not done):
1. Go to Route 53 → Hosted Zones → yinyangr.com
2. Create Record:
   - Type: CNAME
   - Name: (from ACM validation)
   - Value: (from ACM validation)

#### Add Site Record:
1. Create Record:
   - Record name: `votesam`
   - Record type: A - Alias
   - Route traffic to: Alias to CloudFront distribution
   - Choose your distribution from the list
   - Routing policy: Simple routing
2. Create Record

### 8. Configure CloudFront Error Pages (Optional but Recommended)

For Single Page Application routing:

1. Go to CloudFront → Your Distribution → Error Pages
2. Create Custom Error Response:
   - HTTP Error Code: 403
   - Customize Error Response: Yes
   - Response Page Path: /index.html
   - HTTP Response Code: 200
3. Create another for 404 errors

### 9. Test Deployment

```bash
# Test S3 endpoint
curl -I http://votesam.yinyangr.com.s3-website-us-east-1.amazonaws.com

# Test CloudFront (after DNS propagation)
curl -I https://votesam.yinyangr.com
```

Visit: https://votesam.yinyangr.com

### 10. Future Updates

Use the deploy script:
```bash
./deploy.sh
```

Or manually:
```bash
npm run build
aws s3 sync dist/ s3://votesam.yinyangr.com --delete
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

## Cost Estimate

- **S3 Storage**: ~$0.023 per GB/month (~$0.01 for a small site)
- **S3 Requests**: ~$0.0004 per 1,000 requests
- **CloudFront**: First 1TB free for 12 months, then ~$0.085 per GB
- **Route 53**: $0.50 per hosted zone per month
- **ACM SSL Certificate**: FREE

**Estimated Total**: ~$1-2 per month for low to medium traffic

## Troubleshooting

### Site not loading
- Check S3 bucket policy is public
- Verify CloudFront distribution status is "Deployed"
- Check Route 53 record points to correct CloudFront distribution
- Wait for DNS propagation (up to 48 hours, usually much faster)

### SSL Certificate issues
- Ensure certificate is in us-east-1 region
- Verify DNS validation record is correct in Route 53
- Wait for certificate status to be "Issued"

### Updates not showing
- Clear CloudFront cache with invalidation
- Check browser cache (hard refresh: Ctrl+Shift+R)
- Verify S3 files are updated

### CORS errors
- Add CORS policy to S3 bucket if loading assets from other domains

## Security Best Practices

1. **Enable CloudFront logging** for analytics
2. **Enable AWS WAF** if expecting high traffic or attacks
3. **Use S3 versioning** for backup/rollback capability
4. **Set up CloudWatch alarms** for monitoring
5. **Restrict S3 bucket to CloudFront only** (use Origin Access Identity)

## Monitoring

Set up CloudWatch dashboards to monitor:
- CloudFront requests and data transfer
- S3 bucket access
- Certificate expiration
- Error rates

---

For questions: contact AWS support or refer to AWS documentation.
