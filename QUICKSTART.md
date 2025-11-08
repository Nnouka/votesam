# Quick Start Guide - Vote Sam Campaign Website

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:5173

### 3. Build for Production
```bash
npm run build
```

Output will be in the `dist` folder.

## 📝 Customization Guide

### Update Campaign Content

#### Edit Manifesto Points
File: `src/components/Manifesto.tsx`

```typescript
const manifestoItems: ManifestoItem[] = [
  {
    icon: <TeamOutlined className="text-4xl text-blue-600" />,
    title: "Your Title Here",
    description: "Your description here..."
  },
  // Add more items...
];
```

#### Update "Why Vote Sam" Section
File: `src/components/WhyVoteSam.tsx`

Modify the `qualifications` array with your content.

#### Change Voting Date
File: `src/components/Countdown.tsx`

```typescript
const votingDay = dayjs('2025-11-14T00:00:00');
```

#### Update Social Links
File: `src/components/Footer.tsx`

Replace `#` with actual social media URLs.

### Style Customization

#### Colors
File: `tailwind.config.js`

```javascript
colors: {
  primary: '#1890ff',      // Change primary color
  secondary: '#722ed1',    // Change secondary color
}
```

#### Custom CSS
File: `src/styles/custom.scss`

Add your custom styles here.

## 🌐 Deployment

### Option 1: Using Deploy Script (Recommended)

**Windows (PowerShell):**
```powershell
.\deploy.ps1 YOUR_CLOUDFRONT_DISTRIBUTION_ID
```

**Linux/Mac (Bash):**
```bash
chmod +x deploy.sh
./deploy.sh YOUR_CLOUDFRONT_DISTRIBUTION_ID
```

### Option 2: Manual Deployment

1. Build the app:
```bash
npm run build
```

2. Upload to S3:
```bash
aws s3 sync dist/ s3://votesam.yinyangr.com --delete
```

3. Invalidate CloudFront:
```bash
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## 📚 Project Structure

```
vote-sam/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Hero.tsx
│   │   ├── Manifesto.tsx
│   │   ├── WhyVoteSam.tsx
│   │   ├── Countdown.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   └── custom.scss  # Custom SCSS styles
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Utility-first CSS
- **Ant Design** - UI components
- **SCSS** - CSS preprocessor
- **Day.js** - Date manipulation

## 📱 Mobile Responsive

The site is fully responsive and works on:
- 📱 Mobile (320px+)
- 💻 Tablet (768px+)
- 🖥️ Desktop (1024px+)

## 🐛 Troubleshooting

### Development server won't start
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build errors
```bash
npm run lint
npm run build
```

### Tailwind classes not working
- Check `tailwind.config.js` content paths
- Verify `postcss.config.js` is configured correctly
- Clear cache and rebuild

## 📖 Additional Resources

- [Full Deployment Guide](./DEPLOYMENT.md)
- [React Documentation](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com)
- [Ant Design Components](https://ant.design/components)
- [Vite Guide](https://vitejs.dev)

## 💡 Tips

1. **Test locally** before deploying: `npm run build && npm run preview`
2. **Keep dependencies updated**: `npm update`
3. **Check AWS costs**: Monitor S3 and CloudFront usage
4. **Enable caching**: Properly configured for optimal performance
5. **Mobile-first**: Always test on mobile devices

## 🆘 Need Help?

- Check `DEPLOYMENT.md` for detailed AWS setup
- Review component files for examples
- Consult official documentation for libraries used

---

**Good luck with the campaign! 🎉**
