# Earth Store [Project 1 (FSWD Advanced)]

A modern, responsive landing page for Earth Store. This project showcases a clean, professional design with multiple sections including hero banners, product showcases, customer testimonials, and contact forms. Built with Next.js, React, and TypeScript.

## 🚀 Features

### Home Page

- **Hero Section**: Full-screen banner with call-to-action button
- **Product Showcase**: Display of featured products with images and pricing
- **Customer Testimonials**: Social proof with customer reviews and avatars
- **Call to Action**: Promotional section for gift postcards
- **Features Section**: Highlights secure payment, fast delivery, and excellent service

### Products Page

- **Postcards Section**: Browse and shop various postcard designs
- **Posters Section**: Explore poster collections with detailed product cards
- **Product Cards**: Interactive product displays with images and information
- **Shopping Experience**: Organized product categories with easy navigation

### About Page

- **Hero Banner**: Full-width banner introducing the company
- **Our Mission**: Company mission statement with imagery
- **Call to Action**: Promotional section for gift postcards

### Contact Page

- **Hero Banner**: Full-width banner for contact section
- **Contact Form**: User-friendly form for inquiries
- **Contact Information**: Address, email, and phone details

### Global Features

- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Modern UI**: Built with Tailwind CSS for consistent styling
- **Type Safety**: Full TypeScript implementation for better code quality
- **Custom Color Scheme**: Earth-themed color palette (earth-dark, earth-light)
- **Navigation**: Clean header navigation across all pages
- **Footer**: Consistent footer with links and information
- **Performance**: React Compiler optimization for enhanced performance

## 📸 Preview

### Home Page

![Home Page Preview](/public/preview/home.jpeg)

### Products Page

![Products Page Preview](/public/preview/products.jpeg)

### About Page

![About Page Preview](/public/preview/about.jpeg)

### Contact Page

![Contact Page Preview](/public/preview/contact.jpeg)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React 0.562.0
- **Image Optimization**: Sharp 0.34.5
- **Package Manager**: Bun (lockfile present)
- **Development Tools**: ESLint, Prettier, TypeScript strict mode

## 📁 Project Structure

```
earth-store-landing/
├── public/
│   ├── about/                   # About page assets
│   │   ├── about-banner.jpg
│   │   └── our-mission.jpg
│   ├── contact/                 # Contact page assets
│   │   └── contact-banner.jpg
│   ├── preview/                 # Preview images
│   │   ├── about.jpeg
│   │   ├── contact.jpeg
│   │   └── home.jpeg
│   ├── avatar-1.jpeg
│   ├── avatar-2.jpeg
│   ├── avatar-3.jpeg
│   ├── call-to-action.jpg
│   ├── home-banner.jpg
│   ├── logo.png
│   ├── poster1.jpg
│   ├── poster2.jpg
│   ├── poster3.jpg
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── about/               # About page
│   │   │   └── page.tsx
│   │   ├── contact/             # Contact page
│   │   │   └── page.tsx
│   │   ├── products/            # Products page
│   │   │   └── page.tsx
│   │   ├── layout.tsx           # Root layout with header and footer
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles and custom colors
│   └── components/
│       ├── AboutComponents/     # About page specific components
│       ├── ContactComponents/   # Contact page specific components
│       ├── HomeComponents/      # Home page specific components
│       ├── ShopComponents/      # Products/Shop page components
│       ├── GiftPostcard.tsx     # Call to action component
│       ├── ProductCard.tsx      # Product card component
│       ├── SiteFooter.tsx       # Footer component
│       └── SiteHeader.tsx       # Navigation header
├── .gitignore
├── .prettierrc
├── LICENSE
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
└── tsconfig.json                # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or Bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/citindia/earth-store-landing.git
cd earth-store-landing
```

2. Install dependencies:

```bash
bun install
# or
npm install
```

3. Run the development server:

```bash
bun dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint

## 🎯 Usage

### Navigation

- Click on the logo to return to the home page
- Use the navigation menu to switch between Home, Products, About, and Contact pages
- All pages feature consistent navigation and footer

### Home Page

- Browse featured products in the Products section
- Read customer testimonials in the Testimonials section
- Click "Shop Now" or "Purchase A Postcard" to explore products

### Products Page

- Browse postcards and posters collections
- View detailed product information with ProductCard components
- Explore organized product categories

### About Page

- Learn about the company's mission and values
- View the mission statement with accompanying imagery

### Contact Page

- Fill out the contact form to send inquiries
- Find contact information including address, email, and phone

## 🔧 Development

### Code Style

- Follows Airbnb Style Guide
- TypeScript strict mode enabled
- ESLint configuration for code quality
- Prettier for consistent formatting

### Component Architecture

- Organized component structure with page-specific folders
- Reusable components (GiftPostcard, ProductCard, SiteHeader, SiteFooter)
- Modular design with separation of concerns
- TypeScript interfaces for type safety

### Performance Features

- React Compiler enabled for automatic optimization
- Typed routes for enhanced type safety
- Next.js Image optimization for better performance
- Sharp for efficient image processing

### UI Framework

- Tailwind CSS for styling
- Custom color scheme with CSS variables
- Responsive design patterns
- Lucide React icons for visual elements
- Next.js Image component for optimization

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Saikat Sardar**

- GitHub: [@citindia](https://github.com/citindia)
- Project Homepage: [https://github.com/citindia/earth-store-landing](https://github.com/citindia/earth-store-landing)
