# PowerShell deployment script for Vote Sam campaign website
# Usage: .\deploy.ps1 [distribution-id]

param(
    [string]$DistributionId = "YOUR_DISTRIBUTION_ID"
)

$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting deployment for Vote Sam campaign..." -ForegroundColor Green

# Configuration
$BucketName = "votesam.yinyangr.com"
$Region = "us-east-1"

# Check if AWS CLI is installed
try {
    aws --version | Out-Null
} catch {
    Write-Host "❌ AWS CLI is not installed. Please install it first." -ForegroundColor Red
    exit 1
}

# Build the application
Write-Host "📦 Building application..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed. Deployment aborted." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully" -ForegroundColor Green

# Sync files to S3
Write-Host "☁️  Uploading files to S3 bucket: $BucketName..." -ForegroundColor Cyan
aws s3 sync dist/ "s3://$BucketName" `
    --region $Region `
    --delete `
    --cache-control "public, max-age=31536000, immutable"

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ S3 upload failed. Deployment aborted." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Files uploaded to S3" -ForegroundColor Green

# Set no-cache for HTML files
Write-Host "🔄 Setting cache policies for HTML files..." -ForegroundColor Cyan
aws s3 cp "s3://$BucketName/index.html" `
    "s3://$BucketName/index.html" `
    --metadata-directive REPLACE `
    --cache-control "no-cache, no-store, must-revalidate" `
    --content-type "text/html" `
    --region $Region

Write-Host "✅ Cache policies updated" -ForegroundColor Green

# Invalidate CloudFront cache (if distribution ID provided)
if ($DistributionId -ne "YOUR_DISTRIBUTION_ID") {
    Write-Host "🌐 Invalidating CloudFront cache..." -ForegroundColor Cyan
    $InvalidationId = aws cloudfront create-invalidation `
        --distribution-id $DistributionId `
        --paths "/*" `
        --query 'Invalidation.Id' `
        --output text
    
    Write-Host "✅ CloudFront invalidation created: $InvalidationId" -ForegroundColor Green
    Write-Host "⏳ Waiting for invalidation to complete (this may take a few minutes)..." -ForegroundColor Yellow
    
    aws cloudfront wait invalidation-completed `
        --distribution-id $DistributionId `
        --id $InvalidationId
    
    Write-Host "✅ CloudFront cache invalidated successfully" -ForegroundColor Green
} else {
    Write-Host "⚠️  No CloudFront distribution ID provided. Skipping cache invalidation." -ForegroundColor Yellow
    Write-Host "   To invalidate cache, run:" -ForegroundColor Yellow
    Write-Host "   aws cloudfront create-invalidation --distribution-id YOUR_ID --paths '/*'" -ForegroundColor Yellow
}

# Display summary
Write-Host ""
Write-Host "✨ Deployment completed successfully! ✨" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Deployment Summary:" -ForegroundColor Cyan
Write-Host "   - Bucket: s3://$BucketName"
Write-Host "   - Region: $Region"
Write-Host "   - Site URL: https://$BucketName"
Write-Host ""
Write-Host "🎉 Your campaign site is now live!" -ForegroundColor Green
