# Luxora - Moooi-Inspired Next.js Website

A sophisticated, luxury furniture and design website inspired by [Moooi](https://www.moooi.com/us), built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### Design & User Experience
- **Elegant Typography** - Custom Google Fonts (Inter + Playfair Display)
- **Smooth Animations** - Framer Motion powered interactions
- **Responsive Design** - Mobile-first approach with elegant breakpoints
- **Modern UI/UX** - Clean, sophisticated interface inspired by Moooi's aesthetic
- **Accessibility** - WCAG compliant design patterns

### Website Sections
- **Hero Section** - Immersive full-screen introduction with animated elements
- **Featured Collections** - Interactive grid showcasing product categories
- **Featured Products** - Product gallery with hover effects and detailed information
- **About Section** - Brand story with achievements and testimonials
- **Footer** - Comprehensive site navigation with newsletter signup

### Technical Features
- **Next.js 14** - Latest App Router with server-side rendering
- **TypeScript** - Full type safety and better development experience
- **Tailwind CSS** - Utility-first styling with custom design system
- **Framer Motion** - Advanced animations and micro-interactions
- **Optimized Images** - Next.js Image component with Unsplash integration
- **Modern Icons** - Lucide React icon library
- **Performance** - Optimized for Core Web Vitals

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd moooi-inspired
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles and design system
│   ├── layout.tsx          # Root layout with fonts and metadata
│   └── page.tsx            # Homepage with all sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header with mobile menu
│   │   └── Footer.tsx      # Site footer with links and newsletter
│   └── sections/
│       ├── HeroSection.tsx         # Main hero with call-to-action
│       ├── FeaturedCollections.tsx # Product category showcase
│       ├── FeaturedProducts.tsx    # Individual product gallery
│       └── AboutSection.tsx        # Brand story and achievements
└── ...
```

## 🎨 Design System

### Typography
- **Headings**: Playfair Display (serif) for elegance
- **Body Text**: Inter (sans-serif) for readability
- **Custom Classes**: `.h1`, `.h2`, `.h3`, `.h4`, `.body-large`, `.body`, `.caption`

### Colors
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF) 
- **Grays**: Various shades for text and backgrounds
- **Accent**: Subtle gradients and hover states

### Animations
- **Entrance**: Fade-in-up, slide-in effects
- **Hover**: Scale, lift, and color transitions
- **Loading**: Stagger animations for content reveal
- **Scroll**: Parallax and viewport-triggered animations

## 🛠️ Key Dependencies

```json
{
  "next": "15.1.6",
  "react": "19.0.0",
  "typescript": "^5",
  "tailwindcss": "^3.4.1",
  "framer-motion": "^11.13.5",
  "lucide-react": "^0.468.0"
}
```

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms
The project can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Customization

### Updating Brand Colors
Edit the CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: 0 0% 9%;
  --background: 0 0% 100%;
  /* ... */
}
```

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Follow existing patterns for animations and styling

### Modifying Content
- **Hero Content**: Update `HeroSection.tsx`
- **Products**: Modify arrays in `FeaturedProducts.tsx`
- **Collections**: Update data in `FeaturedCollections.tsx`
- **About**: Edit content in `AboutSection.tsx`

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js Image component with proper sizing
- **Code Splitting**: Automatic with Next.js App Router
- **Font Loading**: Optimized Google Fonts loading
- **Animation Performance**: GPU-accelerated transforms
- **Bundle Size**: Tree shaking and dynamic imports

## 📄 License

This project is for educational/demonstration purposes. 

## 🙏 Acknowledgments

- **Moooi** - Design inspiration from their exceptional website
- **Unsplash** - High-quality product and lifestyle imagery
- **Next.js Team** - Excellent React framework
- **Framer** - Powerful animation library
- **Tailwind Labs** - Utility-first CSS framework

## 📞 Support

For questions or issues, please open an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
