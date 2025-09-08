# Fractal dApp - Modern DeFi Platform

A comprehensive dApp design with modern UI/UX, built with React, TypeScript, and Styled Components. Features a complete design system, responsive layout, and Figma export functionality.

## 🎨 Design System

### Color Palette
- **Background**: `#0b1a2b` - Deep blue background
- **Primary Text**: `#eef5ff` - Light blue text
- **Secondary Text**: `#f5c04a` - Golden accent color
- **Card**: `#1a2a3a` - Card background
- **Border**: `#3a4a5a` - Subtle borders

### Typography
- **Primary Font**: DM Sans - Modern, clean sans-serif
- **Secondary Font**: Noto Sans SC - CJK support

### Components
- Glass morphism effects
- Gradient backgrounds
- Smooth animations with Framer Motion
- Responsive design
- Modern card layouts

## 🚀 Features

### Header
- Logo with Fractal branding
- Wallet address display
- Language selector (EN, ZH, JA)

### Bottom Navigation
- Home tab with dashboard
- Team tab with member profiles
- Assets tab with portfolio management

### Home Page
1. **Main Banner** - Welcome section with key stats
2. **Sub Banner** - Quick start and community cards
3. **Announcement Bar** - Feature alerts and notifications
4. **Shortcuts Menu** - Quick actions (Earnings, Invitation, Swap, Security)
5. **360° AI Fund** - Staking interface with duration, ROI, and minimum stake
6. **Earnings Display** - Passive and active income tracking
7. **FTL Price Chart** - Real-time price trending with Recharts

### Team Page
- Team statistics and member profiles
- Performance metrics
- Community engagement

### Assets Page
- Portfolio overview
- Asset management
- Performance tracking

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Styled Components
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Figma Export

The app includes a built-in Figma export feature:

1. Click the "Export to Figma" button (bottom right)
2. Download the design system JSON file
3. Import into Figma for further design work

### Export includes:
- Complete design tokens (colors, typography, spacing, etc.)
- Component specifications
- Layout guidelines
- Responsive breakpoints

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full experience for desktop (1024px+)
- **Large Desktop**: Enhanced for large screens (1440px+)

## 🎨 Design Principles

1. **Glass Morphism**: Modern glass-like effects with backdrop blur
2. **Consistent Spacing**: 8px grid system for consistent layouts
3. **Smooth Animations**: Micro-interactions for better UX
4. **Accessibility**: Focus states and keyboard navigation
5. **Performance**: Optimized components and lazy loading

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx
│   │   ├── BottomNavigator.tsx
│   │   └── Layout.tsx
│   ├── Home/
│   │   ├── MainBanner.tsx
│   │   ├── SubBanner.tsx
│   │   ├── AnnouncementBar.tsx
│   │   ├── ShortcutsMenu.tsx
│   │   ├── AIFund.tsx
│   │   ├── EarningsDisplay.tsx
│   │   └── PriceChart.tsx
│   └── ExportButton.tsx
├── pages/
│   ├── _app.tsx
│   ├── index.tsx
│   ├── Home.tsx
│   ├── Team.tsx
│   └── Assets.tsx
├── styles/
│   ├── globals.css
│   ├── theme.ts
│   ├── styled.d.ts
│   └── responsive.ts
└── utils/
    └── figmaExport.ts
```

## 🚀 Deployment

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the repository.

---

Built with ❤️ for the DeFi community
