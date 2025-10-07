# Priyarth QCS - Pharmaceutical Quality & Compliance Services

A modern, professional website for Priyarth QCS, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first design that works beautifully on all devices
- **SEO Optimized**: Meta tags, Open Graph, and structured data for better search visibility
- **PWA Ready**: Includes manifest for Progressive Web App support
- **Smooth Animations**: Framer Motion for elegant page transitions
- **Clean UI**: Professional pharmaceutical industry design with blue, white, and grey tones

## 📄 Pages

- **Home**: Hero section with company tagline and service highlights
- **About**: Mission statement, expertise overview, regulatory standards, and company values
- **Services**: Comprehensive list of all services with detailed descriptions
- **Contact**: Contact form with business information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Deployment to Vercel

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will auto-detect Next.js and configure the build settings
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 🎨 Customization

### Colors

Primary colors are defined in `tailwind.config.ts`. You can customize the blue color scheme:

```typescript
colors: {
  primary: {
    // Modify these values
  }
}
```

### Content

- Edit page content in `app/*/page.tsx` files
- Update contact information in `components/Footer.tsx` and `app/contact/page.tsx`
- Modify services in `app/services/page.tsx`

### SEO

- Update global metadata in `app/layout.tsx`
- Modify structured data in `components/StructuredData.tsx`
- Update PWA manifest in `public/manifest.json`

## 📧 Contact Information

- Email: info@priyarthqcs.com
- Update business address in `app/contact/page.tsx`

## 🔧 Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons

## 📝 License

Copyright © 2025 Priyarth QCS. All rights reserved.

## 🤝 Support

For support or inquiries, contact info@priyarthqcs.com
