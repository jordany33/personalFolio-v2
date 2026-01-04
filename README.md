# Personal Portfolio v2 🚀

A fun, vibrant, interactive, and dynamic personal portfolio website template built with modern web technologies. Perfect for engineers and developers looking to showcase their work with style.

![Tech Stack](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10-0055FF?style=for-the-badge&logo=framer)

## ✨ Features

- 🎨 **Modern & Vibrant Design** - Beautiful UI with gradient accents and glass morphism effects
- ⚡ **Lightning Fast** - Built with Next.js 14 for optimal performance
- 🎭 **Smooth Animations** - Powered by Framer Motion for delightful interactions
- 📱 **Fully Responsive** - Looks great on all devices
- 🎯 **Template Ready** - Easy to customize via configuration file
- 🌙 **Dark Theme** - Eye-friendly dark color scheme
- ♿ **Accessible** - Built with accessibility in mind

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (React)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personalFolio-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Edit `lib/config.ts` to customize all content:

```typescript
export const config = {
  personal: {
    name: 'Your Name',
    title: 'Software Engineer',
    email: 'your.email@example.com',
    // ... update all your social links
  },
  // ... customize hero, about, skills, projects, and contact sections
}
```

### Sections Overview

1. **Hero Section** - Your introduction with CTA buttons
2. **About Section** - Tell your story
3. **Skills Section** - Showcase your technical expertise
4. **Projects Section** - Display your portfolio projects
5. **Contact Section** - Contact form and social links

### Styling

#### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Your primary color palette
  },
  accent: {
    // Your accent color palette
  },
}
```

#### Fonts

The template uses Inter font by default. To change it:

1. Update the font import in `app/layout.tsx`
2. Update the font family in `tailwind.config.ts`

### Adding Images

1. Create a `public/images/` directory
2. Add your images (profile, projects, etc.)
3. Update image paths in `lib/config.ts`

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/Navbar.tsx`

## 📁 Project Structure

```
personalFolio-v2/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── sections/            # Portfolio sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── Navbar.tsx           # Navigation bar
│   └── Footer.tsx           # Footer component
├── lib/
│   └── config.ts            # Configuration file
├── public/                  # Static assets
└── ...config files
```

## 🎨 Customization Examples

### Change Color Scheme

Update the gradient colors in `tailwind.config.ts`:

```typescript
primary: {
  500: '#your-color', // Main primary color
}
accent: {
  500: '#your-color', // Main accent color
}
```

### Modify Animations

Framer Motion animations can be customized in each component. For example, in `components/sections/Hero.tsx`:

```typescript
motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
```

### Add More Projects

Simply add more items to the `projects.items` array in `lib/config.ts`:

```typescript
projects: {
  items: [
    // ... existing projects
    {
      title: 'New Project',
      description: 'Project description',
      // ... other fields
    },
  ],
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Connect your Git repository
- **AWS Amplify**: Follow Next.js deployment guide
- **Self-hosted**: Build with `npm run build` and serve with `npm start`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

## 📧 Support

If you have any questions or need help customizing the template, feel free to open an issue or reach out!

---

**Made with ❤️ by Jordan and Diane**
