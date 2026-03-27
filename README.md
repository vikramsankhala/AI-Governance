# AI Governance Course - Premium React Web Template

A modern, professional educational platform built with Next.js, TypeScript, and Shadcn/ui for an advanced 30-hour AI Governance course.

## 🎯 Course Overview

This template showcases a premium educational website for:
- **30-Hour Advanced AI Governance Course**
- **10 Modules** covering global perspectives (US, EU, China, India, Global South)
- **Project-based learning** with real-world case studies
- **Expert instructors** including Turing Award winners
- **Interactive curriculum** with detailed module breakdowns

## 🚀 Features

### Modern Design
- **Gradient backgrounds** with glassmorphism effects
- **Dark mode support** with Tailwind CSS
- **Responsive design** optimized for all devices
- **Smooth animations** and hover states
- **Professional typography** and spacing

### Interactive Components
- **Hero section** with compelling CTAs
- **Course overview cards** with key features
- **Expandable curriculum timeline** with detailed modules
- **Instructor profiles** with expertise badges
- **Enrollment pricing** with tier selection
- **Smooth scroll navigation**

### Technical Stack
- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/ui** component library
- **Lucide React** icons
- **Responsive grid layouts**

## 📁 Project Structure

```
ai-governance-course/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main landing page
│   │   ├── layout.tsx           # Root layout
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── ui/                   # Shadcn/ui components
│   │   ├── InstructorCard.tsx    # Instructor profile component
│   │   ├── CurriculumTimeline.tsx # Interactive curriculum
│   │   └── EnrollmentSection.tsx # Pricing & enrollment
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/                       # Static assets
└── README.md
```

## 🛠 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Start building:**
   Edit `src/app/page.tsx` to customize the content

## 🎨 Customization Guide

### Brand Colors
The template uses a blue-to-purple gradient theme. Update colors in:
- `tailwind.config.js` for theme customization
- Component files for specific color schemes

### Content Updates
- **Hero section:** Modify titles, descriptions, and CTAs
- **Modules:** Update curriculum in `CurriculumTimeline.tsx`
- **Instructors:** Edit profiles in `InstructorCard.tsx`
- **Pricing:** Adjust plans in `EnrollmentSection.tsx`

### Adding New Sections
1. Create new components in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Follow existing patterns for consistency

## 📱 Responsive Design

The template is fully responsive with:
- **Mobile-first approach** (320px and up)
- **Tablet optimization** (768px and up)
- **Desktop enhancements** (1024px and up)
- **Large screen support** (1280px and up)

### Breakpoints Used
- `sm:` 640px+
- `md:` 768px+
- `lg:` 1024px+
- `xl:` 1280px+

## 🎯 Key Components

### CurriculumTimeline
Interactive module browser with:
- Expandable module details
- Learning objectives
- Key topics with badges
- Activity lists
- Smooth animations

### InstructorCard
Professional instructor profiles featuring:
- Avatar or initials
- Expertise badges
- Contact options
- Hover effects

### EnrollmentSection
Tier-based pricing with:
- Interactive plan selection
- Feature comparisons
- Highlighted recommendations
- Responsive grid layout

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
```bash
npm run build
npm start
```

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices)
- **Core Web Vitals:** Optimized for fast loading
- **SEO Ready:** Semantic HTML5 structure
- **Bundle Size:** Optimized with Next.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This template is available for educational and commercial use. Attribution appreciated but not required.

## 🆘 Support

For questions or support:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Shadcn/ui docs](https://ui.shadcn.com)
- Open an issue in the repository

---

**Built with ❤️ using Next.js, TypeScript, and Shadcn/ui**
