# Modern React Portfolio Website

A premium, highly-attractive personal portfolio built with React, featuring glassmorphism design, smooth animations, and responsive navigation.

## 🚀 Features

- **Modern UI/UX**: Glassmorphism cards, gradient backgrounds, and animated elements
- **Fully Responsive**: Mobile-first design that works on all screen sizes
- **Smooth Animations**: Powered by Framer Motion for delightful user experiences
- **Section Navigation**: Scrollspy sidebar with smooth scrolling
- **Project Showcase**: Dedicated detail pages for each project with routing
- **Accessible**: Keyboard navigation, focus states, and proper ARIA labels
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML

## 📦 Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Fonts**: Inter (Google Fonts)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173/`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnimatedBackground.jsx
│   ├── Sidebar.jsx
│   ├── MobileMenu.jsx
│   ├── ProjectCard.jsx
│   ├── ScrollToTop.jsx
│   └── SectionWrapper.jsx
├── sections/           # Main portfolio sections
│   ├── AboutMeSection.jsx
│   ├── EducationSection.jsx
│   ├── SkillsSection.jsx
│   ├── ProjectsSection.jsx
│   └── ResumeContactSection.jsx
├── pages/              # Route pages
│   ├── Home.jsx
│   └── ProjectDetails.jsx
├── data/               # Content data
│   └── projects.js
├── App.jsx            # Main app with routing
├── main.jsx           # Entry point
└── index.css          # Global styles & Tailwind
```

## 🎨 Customization Guide

### 1. Personal Information

Update placeholder content in the following files:

**About Me Section** (`src/sections/AboutMeSection.jsx`)
- Replace "Your Name" with your actual name
- Update the bio paragraphs
- Change location and status

**Education Section** (`src/sections/EducationSection.jsx`)
- Edit the `educationData` array with your educational background

**Skills Section** (`src/sections/SkillsSection.jsx`)
- Modify the `skillsData` object with your skills
- Update the proficiency levels in core competencies

**Contact Section** (`src/sections/ResumeContactSection.jsx`)
- Update email, phone, and location
- Add your social media links (LinkedIn, GitHub, Twitter, LeetCode)
- Update resume download link

### 2. Projects

Edit `src/data/projects.js` to add/modify your projects:

```javascript
{
  id: "unique-id",
  name: "Project Name",
  summary: "Short description",
  tags: ["React", "Node.js"],
  problem: "What problem does this solve?",
  skills: ["Skill 1", "Skill 2"],
  features: ["Feature 1", "Feature 2"],
  outcome: "Results and impact",
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  screenshots: []  // Add screenshot paths here
}
```

### 3. Colors & Branding

Modify `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: { DEFAULT: '#06b6d4', ... },
  secondary: { DEFAULT: '#a855f7', ... },
  accent: { DEFAULT: '#ec4899', ... },
}
```

### 4. Meta Tags & SEO

Update `index.html`:
- Page title
- Meta descriptions
- Open Graph tags
- Author information

## 🎯 Key Interactions

### Navigation
- **Desktop**: Fixed sidebar with active section highlighting
- **Mobile**: Hamburger menu with slide-in drawer
- **Smooth Scroll**: Clicking nav items smoothly scrolls to sections

### Projects
- **Grid View**: Projects displayed in a responsive grid
- **Hover Effects**: Cards lift and glow on hover with 3D tilt
- **Detail Pages**: Click any project to view full details
- **Back Navigation**: Return to main page from project details

### Animations
- **Scroll Triggered**: Sections animate in as you scroll
- **Background**: Subtle moving gradient blobs
- **Hover States**: Interactive elements respond to user input
- **Page Transitions**: Smooth route changes

### Accessibility
- **Keyboard Navigation**: Tab through all interactive elements
- **Focus Visible**: Clear focus indicators
- **ARIA Labels**: Proper labels for screen readers
- **Color Contrast**: WCAG AA compliant

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Troubleshooting

**Dev server won't start**
- Ensure Node.js 16+ is installed
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Animations not working**
- Check browser console for errors
- Ensure Framer Motion is installed: `npm install framer-motion`

**Routing not working**
- Verify React Router is installed: `npm install react-router-dom`

**Styles not applying**
- Make sure Tailwind CSS is properly configured
- Check that `index.css` is imported in `main.jsx`

## 📝 Next Steps

After setting up the portfolio, you'll want to:

1. **Add Your Content**: Replace all placeholder text with your information
2. **Add Projects**: Update `projects.js` with your actual projects
3. **Add Screenshots**: Include project screenshots in the `public` folder
4. **Resume PDF**: Add your resume PDF to the `public` folder
5. **Custom Favicon**: Replace the default Vite favicon
6. **Deploy**: Deploy to Vercel, Netlify, or GitHub Pages

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### GitHub Pages
1. Update `vite.config.js` with your repo base path
2. Run `npm run build`
3. Deploy the `dist` folder

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
