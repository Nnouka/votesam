#!/bin/bash

# Deploy script for Vote Sam campaign website
# Usage: ./deploy.sh [distribution-id]

set -e

echo "🚀 Starting deployment for Vote Sam campaign..."

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    exit 1
fi

# Configuration
BUCKET_NAME="votesam.yinyangr.com"
REGION="us-east-1"
DISTRIBUTION_ID="${1:-YOUR_DISTRIBUTION_ID}"

# Build the application
echo "📦 Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Deployment aborted."
    exit 1
fi

echo "✅ Build completed successfully"

# Sync files to S3
echo "☁️  Uploading files to S3 bucket: $BUCKET_NAME..."
aws s3 sync dist/ s3://$BUCKET_NAME \
    --region $REGION \
    --delete \
    --cache-control "public, max-age=31536000, immutable"

if [ $? -ne 0 ]; then
    echo "❌ S3 upload failed. Deployment aborted."
    exit 1
fi

echo "✅ Files uploaded to S3"

# Set no-cache for HTML files
echo "🔄 Setting cache policies for HTML files..."
aws s3 cp s3://$BUCKET_NAME/index.html \
    s3://$BUCKET_NAME/index.html \
    --metadata-directive REPLACE \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "text/html" \
    --region $REGION

echo "✅ Cache policies updated"

# Invalidate CloudFront cache (if distribution ID provided)
if [ "$DISTRIBUTION_ID" != "YOUR_DISTRIBUTION_ID" ]; then
    echo "🌐 Invalidating CloudFront cache..."
    INVALIDATION_ID=$(aws cloudfront create-invalidation \
        --distribution-id $DISTRIBUTION_ID \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text)
    
    echo "✅ CloudFront invalidation created: $INVALIDATION_ID"
    echo "⏳ Waiting for invalidation to complete (this may take a few minutes)..."
    
    aws cloudfront wait invalidation-completed \
        --distribution-id $DISTRIBUTION_ID \
        --id $INVALIDATION_ID
    
    echo "✅ CloudFront cache invalidated successfully"
else
    echo "⚠️  No CloudFront distribution ID provided. Skipping cache invalidation."
    echo "   To invalidate cache, run:"
    echo "   aws cloudfront create-invalidation --distribution-id YOUR_ID --paths '/*'"
fi

# Display summary
echo ""
echo "✨ Deployment completed successfully! ✨"
echo ""
echo "📊 Deployment Summary:"
echo "   - Bucket: s3://$BUCKET_NAME"
echo "   - Region: $REGION"
echo "   - Site URL: https://$BUCKET_NAME"
echo ""
echo "🎉 Your campaign site is now live!"
