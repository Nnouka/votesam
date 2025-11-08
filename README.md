# Vote Sam - Guild President Campaign 2025

A modern, responsive landing page for Sam's campaign for Student Guild President at CMU Africa.

## 🎯 Features

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Manifesto**: Comprehensive campaign platform with 6 key pillars
- **Why Vote Sam**: Highlights qualifications and leadership experience
- **Live Countdown**: Real-time countdown to voting day (November 14th, 2025)
- **Responsive Design**: Fully mobile-responsive with TailwindCSS
- **Modern UI**: Built with Ant Design components

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and optimized builds
- **TailwindCSS** for utility-first styling
- **Ant Design** for professional UI components
- **SCSS** for custom styles
- **Day.js** for date handling

## 📚 Quick Links

- **[Quick Start Guide](./QUICKSTART.md)** - Get up and running in minutes
- **[Deployment Guide](./DEPLOYMENT.md)** - Complete AWS deployment instructions
- **[Content Customization](./CONTENT-GUIDE.md)** - Personalize campaign content
- **[Pre-Launch Checklist](./CHECKLIST.md)** - Ensure everything is ready
- **[Troubleshooting](./TROUBLESHOOTING.md)** - Common issues and solutions
- **[Project Summary](./PROJECT-SUMMARY.md)** - Complete project overview

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: http://localhost:5173

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment to AWS

### Quick Deploy (Windows)
```powershell
.\deploy.ps1 YOUR_CLOUDFRONT_DISTRIBUTION_ID
```

### Quick Deploy (Linux/Mac)
```bash
chmod +x deploy.sh
./deploy.sh YOUR_CLOUDFRONT_DISTRIBUTION_ID
```

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete setup instructions.**

## 📝 Customization

Edit these files to personalize the campaign:

- **Manifesto**: `src/components/Manifesto.tsx`
- **Qualifications**: `src/components/WhyVoteSam.tsx`
- **Voting Date**: `src/components/Countdown.tsx`
- **Social Links**: `src/components/Footer.tsx`
- **Colors**: `tailwind.config.js`

**See [CONTENT-GUIDE.md](./CONTENT-GUIDE.md) for detailed instructions.**

## 📱 Mobile Responsive

Fully responsive design tested on:
- 📱 Mobile (320px+)
- 💻 Tablet (768px+)
- 🖥️ Desktop (1024px+)

## 🎯 Project Structure

```
vote-sam/
├── src/
│   ├── components/       # React components
│   ├── styles/          # Custom SCSS
│   ├── App.tsx          # Main app
│   └── main.tsx         # Entry point
├── public/              # Static assets
├── deploy.ps1           # Windows deployment script
├── deploy.sh            # Linux/Mac deployment script
└── Documentation files  # Guides and checklists
```

## ✨ Key Features

- ✅ Professional, modern design
- ✅ Real-time countdown timer
- ✅ Mobile-first responsive layout
- ✅ SEO optimized
- ✅ Fast load times (Vite optimized)
- ✅ Easy to customize
- ✅ AWS deployment ready

## 📊 Site Performance

- **Total Size (gzipped)**: ~203 KB
- **Load Time**: < 2 seconds
- **Mobile-friendly**: 100% responsive
- **Modern Stack**: Latest React 19

## 🆘 Need Help?

- **Quick Start**: See [QUICKSTART.md](./QUICKSTART.md)
- **Deployment Issues**: See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
- **Content Updates**: See [CONTENT-GUIDE.md](./CONTENT-GUIDE.md)

## 📄 License

Created for Sam's campaign for Student Guild President at CMU Africa.

---

**Vote Sam for Guild President 2025** 🎓✨

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
