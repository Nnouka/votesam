# Pre-Launch Checklist ✅

## 📋 Content Review

- [ ] **Candidate Name**: Replace "Sam" with full name throughout
- [ ] **Campaign Slogan**: Update in Hero section
- [ ] **Manifesto Points**: Customize all 6 platform items
- [ ] **Qualifications**: Add real achievements and experience
- [ ] **Social Media Links**: Update with actual profile URLs
- [ ] **Email Address**: Set correct campaign email
- [ ] **Personal Quote**: Add authentic campaign message
- [ ] **Voting Date**: Confirm November 14, 2025 is correct

## 🎨 Visual Customization

- [ ] **Campaign Colors**: Set in `tailwind.config.js`
- [ ] **Candidate Photo**: Add to Hero section (optional)
- [ ] **Campaign Logo**: Add if available
- [ ] **Favicon**: Replace default Vite icon in `public/`
- [ ] **Meta Tags**: Update site description in `index.html`

## 🧪 Testing

### Desktop Testing
- [ ] Hero section displays correctly
- [ ] All 6 manifesto cards visible
- [ ] Why Vote Sam section loads
- [ ] Countdown timer works and updates
- [ ] Footer displays properly
- [ ] Smooth scrolling works
- [ ] All links are clickable

### Mobile Testing (320px - 767px)
- [ ] Hero text is readable
- [ ] Cards stack properly (1 column)
- [ ] Countdown shows 2x2 grid
- [ ] Footer is mobile-friendly
- [ ] No horizontal scroll
- [ ] Touch targets are adequate
- [ ] All buttons/links work

### Tablet Testing (768px - 1024px)
- [ ] Layout uses 2-column grid
- [ ] Images/text scale properly
- [ ] Navigation is smooth
- [ ] No layout breaks

### Cross-Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Technical Checks

### Build & Performance
- [ ] `npm run build` succeeds without errors
- [ ] `npm run preview` works
- [ ] No console errors in browser
- [ ] Page loads in < 3 seconds
- [ ] Images optimized and load quickly
- [ ] No broken links

### Code Quality
- [ ] `npm run lint` passes (or acceptable warnings)
- [ ] No TypeScript errors
- [ ] All components render correctly
- [ ] Countdown updates every second
- [ ] All imports work

### Accessibility
- [ ] All images have alt text
- [ ] Links have descriptive text
- [ ] Color contrast is sufficient
- [ ] Keyboard navigation works
- [ ] Screen reader friendly

## 🌐 AWS Deployment Prerequisites

### AWS Account Setup
- [ ] AWS account created
- [ ] Payment method added
- [ ] IAM user created (if needed)
- [ ] AWS CLI installed on local machine
- [ ] AWS CLI configured (`aws configure`)

### Domain Setup
- [ ] yinyangr.com domain registered
- [ ] Route 53 hosted zone exists for yinyangr.com
- [ ] Access to domain DNS settings

### Resources to Create
- [ ] S3 bucket: votesam.yinyangr.com
- [ ] S3 bucket policy applied
- [ ] Static website hosting enabled
- [ ] SSL certificate requested (ACM, us-east-1)
- [ ] SSL certificate validated
- [ ] CloudFront distribution created
- [ ] CloudFront CNAME configured
- [ ] Route 53 A record created
- [ ] DNS propagated (can take 1-48 hours)

## 📦 Pre-Deployment

### Files Ready
- [ ] `dist/` folder built successfully
- [ ] `deploy.ps1` or `deploy.sh` ready
- [ ] `bucket-policy.json` ready
- [ ] CloudFront Distribution ID noted

### Deployment Script
- [ ] Tested locally: `npm run build && npm run preview`
- [ ] AWS credentials configured
- [ ] Deployment script updated with Distribution ID
- [ ] S3 bucket name confirmed

## 🚢 Launch Day

### Initial Deployment
- [ ] Run: `npm run build`
- [ ] Execute: `.\deploy.ps1 YOUR_DISTRIBUTION_ID` (Windows)
- [ ] OR: `./deploy.sh YOUR_DISTRIBUTION_ID` (Linux/Mac)
- [ ] Wait for deployment completion
- [ ] Wait for CloudFront invalidation

### Verification
- [ ] Visit: https://votesam.yinyangr.com
- [ ] Test on mobile device
- [ ] Check all pages load
- [ ] Verify countdown works
- [ ] Test all links
- [ ] Confirm HTTPS works (SSL)
- [ ] Check social media links

### Monitoring
- [ ] Check AWS CloudWatch for errors
- [ ] Monitor S3 access logs
- [ ] Track CloudFront metrics
- [ ] Set up billing alerts

## 📱 Post-Launch

### Marketing
- [ ] Share link on social media
- [ ] Email to student body
- [ ] Post on WhatsApp groups
- [ ] Print QR code posters
- [ ] Add to email signature

### Maintenance
- [ ] Schedule regular content updates
- [ ] Monitor site performance
- [ ] Respond to feedback
- [ ] Track visitor analytics (optional: add Google Analytics)
- [ ] Keep dependencies updated

### Campaign Updates
- [ ] Add news/announcements section (if needed)
- [ ] Post campaign event photos
- [ ] Share endorsements
- [ ] Update achievements

## 💰 Budget Check

- [ ] Understand AWS free tier limits
- [ ] Set up billing alerts
- [ ] Monitor actual vs estimated costs
- [ ] Keep costs under $5/month for basic traffic

## 🆘 Emergency Contacts

**Technical Issues**:
- AWS Support: https://console.aws.amazon.com/support/
- Vite Documentation: https://vitejs.dev
- React Documentation: https://react.dev

**Quick Fixes**:
- Site not loading: Check CloudFront status
- Content not updating: Invalidate CloudFront cache
- Build errors: Check `get_errors` and logs

## ✅ Final Sign-Off

Before going live:

- [ ] Content is accurate and proofread
- [ ] All functionality tested
- [ ] Mobile experience is excellent
- [ ] AWS is configured correctly
- [ ] Deployment script is ready
- [ ] Team is ready to promote

---

## 🎉 Ready to Launch!

Once all items are checked:

1. Run final build: `npm run build`
2. Execute deployment: `.\deploy.ps1 YOUR_DISTRIBUTION_ID`
3. Verify live site: https://votesam.yinyangr.com
4. Announce launch! 🚀

**Good luck with the campaign!** 🎓✨
