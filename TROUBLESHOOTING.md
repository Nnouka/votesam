# Troubleshooting Guide 🔧

## Common Issues and Solutions

### Development Issues

#### Issue: `npm install` fails
**Symptoms**: Errors during package installation

**Solutions**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and lockfile
rm -rf node_modules package-lock.json  # Linux/Mac
# OR
Remove-Item -Recurse -Force node_modules, package-lock.json  # Windows PowerShell

# Reinstall
npm install
```

#### Issue: Development server won't start
**Symptoms**: `npm run dev` fails or hangs

**Solutions**:
```bash
# Check if port 5173 is already in use
netstat -ano | findstr :5173  # Windows
# OR
lsof -i :5173  # Linux/Mac

# Kill the process or use different port
npm run dev -- --port 3000

# If still failing, rebuild dependencies
rm -rf node_modules .vite
npm install
npm run dev
```

#### Issue: Hot reload not working
**Symptoms**: Changes don't reflect in browser

**Solutions**:
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Check browser console for errors
3. Restart dev server
4. Clear browser cache

#### Issue: Tailwind classes not applying
**Symptoms**: Styling not working, classes ignored

**Solutions**:
```bash
# Check tailwind.config.js content paths
# Verify postcss.config.js is correct
# Restart dev server
npm run dev

# If still not working, rebuild
rm -rf node_modules dist .vite
npm install
npm run build
```

#### Issue: TypeScript errors
**Symptoms**: Red squiggly lines, type errors

**Solutions**:
```bash
# Rebuild TypeScript
npx tsc --noEmit

# Check tsconfig.json
# Ensure all imports are correct
# Install missing type definitions
npm install -D @types/node
```

### Build Issues

#### Issue: Build fails with errors
**Symptoms**: `npm run build` exits with errors

**Solutions**:
```bash
# Check for syntax errors
npm run lint

# Clear build cache
rm -rf dist node_modules/.vite

# Rebuild
npm run build

# Check for import errors
# Ensure all files are saved
```

#### Issue: Build succeeds but site is broken
**Symptoms**: Production build doesn't work like dev

**Solutions**:
```bash
# Test locally first
npm run build
npm run preview

# Check browser console for errors
# Verify all assets load correctly
# Check network tab for 404s
```

#### Issue: Large bundle size warning
**Symptoms**: Warning about chunks > 500KB

**Solution**: This is normal with Ant Design. To optimize:
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'antd-vendor': ['antd', '@ant-design/icons'],
          'utils': ['dayjs']
        }
      }
    }
  }
})
```

### Runtime Issues

#### Issue: Countdown not updating
**Symptoms**: Timer shows but doesn't count down

**Solutions**:
1. Check browser console for errors
2. Verify voting date is in future:
   ```typescript
   const votingDay = dayjs('2025-11-14T00:00:00');
   ```
3. Check dayjs is imported correctly
4. Hard refresh browser

#### Issue: Smooth scroll not working
**Symptoms**: Clicking nav links doesn't scroll smoothly

**Solutions**:
```css
/* Verify in src/App.css */
html {
  scroll-behavior: smooth;
}
```

Check browser support (works in modern browsers only)

#### Issue: Icons not displaying
**Symptoms**: Empty boxes instead of icons

**Solutions**:
```bash
# Reinstall Ant Design icons
npm install @ant-design/icons

# Check imports in components
import { IconName } from '@ant-design/icons';
```

### Deployment Issues

#### Issue: AWS CLI not found
**Symptoms**: `aws: command not found`

**Solutions**:
```bash
# Install AWS CLI
# Windows: Download from AWS website
# Mac: brew install awscli
# Linux: sudo apt install awscli  # or yum

# Verify installation
aws --version

# Configure
aws configure
```

#### Issue: S3 upload fails
**Symptoms**: Permission denied or access errors

**Solutions**:
```bash
# Check AWS credentials
aws sts get-caller-identity

# Verify bucket exists
aws s3 ls s3://votesam.yinyangr.com

# Check IAM permissions
# Ensure user has S3 write access

# Try manual upload
aws s3 sync dist/ s3://votesam.yinyangr.com
```

#### Issue: Site not accessible after deployment
**Symptoms**: 403 Forbidden or 404 errors

**Solutions**:
1. **Check S3 bucket policy**:
   - Go to S3 console
   - Select bucket → Permissions
   - Verify bucket policy is applied
   - Ensure "Block public access" is OFF

2. **Check static website hosting**:
   - S3 bucket → Properties
   - Static website hosting should be ENABLED
   - Index document: `index.html`

3. **Check CloudFront**:
   - Status should be "Deployed"
   - Origin should point to S3 website endpoint
   - Default root object: `index.html`

#### Issue: HTTPS not working / SSL errors
**Symptoms**: Certificate warnings, site not loading on HTTPS

**Solutions**:
1. **Check certificate status**:
   - Go to ACM (us-east-1 region)
   - Status should be "Issued"
   - Verify DNS validation record in Route 53

2. **Wait for validation**: Can take 15-30 minutes

3. **Check CloudFront**:
   - Verify certificate is attached
   - CNAME should include votesam.yinyangr.com
   - Viewer protocol: Redirect HTTP to HTTPS

#### Issue: DNS not resolving
**Symptoms**: `votesam.yinyangr.com` doesn't load

**Solutions**:
1. **Check Route 53**:
   - Record type: A (Alias)
   - Points to correct CloudFront distribution

2. **Test DNS**:
   ```bash
   nslookup votesam.yinyangr.com
   dig votesam.yinyangr.com
   ```

3. **Wait**: DNS propagation takes 1-48 hours

4. **Use CloudFront URL temporarily**:
   - `https://d1234567890.cloudfront.net`

#### Issue: Updates not showing
**Symptoms**: Site shows old content after deployment

**Solutions**:
```bash
# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_ID \
  --paths "/*"

# Wait 3-5 minutes for invalidation

# Hard refresh browser
# Ctrl+Shift+R (Windows/Linux)
# Cmd+Shift+R (Mac)

# Try incognito/private mode
```

### Cost Issues

#### Issue: Unexpected AWS charges
**Symptoms**: Higher than expected bill

**Solutions**:
1. **Check CloudWatch metrics**:
   - S3 requests and storage
   - CloudFront data transfer
   - Route 53 queries

2. **Set up billing alerts**:
   - AWS Console → Billing → Billing Preferences
   - Enable billing alerts
   - Create CloudWatch alarm for charges

3. **Optimize**:
   - Enable CloudFront caching
   - Set proper cache-control headers
   - Compress assets

### Performance Issues

#### Issue: Slow loading site
**Symptoms**: Takes >3 seconds to load

**Solutions**:
1. **Enable CloudFront caching**:
   - Check cache behavior settings
   - Set proper cache-control headers

2. **Optimize images**:
   ```bash
   # Use image optimization tools
   # Compress images before uploading
   ```

3. **Check bundle size**:
   ```bash
   npm run build
   # Review output size
   # Consider code splitting if needed
   ```

4. **Use CDN properly**:
   - Ensure CloudFront is serving content
   - Check cache hit ratio

## Debugging Tips

### Browser Console
Always check browser console (F12) for:
- JavaScript errors
- Network failures (404s, 500s)
- Console warnings
- Failed resource loads

### Check Build Output
```bash
npm run build
# Review the output carefully
# Note any warnings or errors
```

### Test Locally First
```bash
# Always test production build locally
npm run build
npm run preview
# Visit http://localhost:4173
```

### Check File Permissions
Ensure all files are readable:
```bash
# Windows
icacls filename

# Linux/Mac
ls -la filename
```

### Verify Environment
```bash
# Node version
node --version  # Should be 18+

# NPM version
npm --version

# AWS CLI
aws --version
```

## Getting Help

### Documentation
- **Vite**: https://vitejs.dev
- **React**: https://react.dev
- **Ant Design**: https://ant.design
- **TailwindCSS**: https://tailwindcss.com
- **AWS S3**: https://docs.aws.amazon.com/s3/
- **AWS CloudFront**: https://docs.aws.amazon.com/cloudfront/

### Community Support
- Stack Overflow
- GitHub Issues (for specific packages)
- AWS Forums
- Reddit: r/reactjs, r/webdev

### Project Files
- `README.md` - Overview
- `QUICKSTART.md` - Quick start
- `DEPLOYMENT.md` - AWS deployment
- `CHECKLIST.md` - Pre-launch checklist
- `CONTENT-GUIDE.md` - Content customization

## Emergency Rollback

If deployment goes wrong:

```bash
# 1. Stop new deployments

# 2. Restore previous version from S3
aws s3 sync s3://votesam.yinyangr.com-backup/ \
  s3://votesam.yinyangr.com/

# 3. Invalidate CloudFront
aws cloudfront create-invalidation \
  --distribution-id YOUR_ID \
  --paths "/*"
```

**Prevention**: Always backup before deploying:
```bash
aws s3 sync s3://votesam.yinyangr.com/ \
  s3://votesam.yinyangr.com-backup/
```

---

## Still Stuck?

1. Check all error messages carefully
2. Search error messages online
3. Review project documentation files
4. Check AWS service health dashboard
5. Try starting fresh (last resort)

Remember: Most issues have simple solutions - stay calm and debug systematically! 🔍
