# Kawaii Mask 3D Interactive Landing Page

A cute, Harajuku-inspired 3D mask builder landing page built with React, TypeScript, and Three.js.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
react-mask-landing/
├── public/               # Static assets
│   └── mask.glb          # 3D mask model
├── src/
│   ├── components/       # React components
│   │   ├── LandingPageComponent.tsx  # Main landing page
│   │   └── MaskViewer.tsx            # 3D model viewer
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔧 Technology Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Three.js** for 3D rendering
- **Tailwind CSS** for styling
- **ESM** module format

## 📝 Development Conventions

- Use ES Modules (ESM) for all files
- Configuration files use `.js` extension with ESM syntax
- React components use TypeScript (`.tsx`) 
- Import React explicitly in all component files

## 🌟 Features

- Interactive 3D mask model that follows mouse movements
- Color customization options
- Responsive Harajuku-inspired design
- Fallback rendering for model loading errors

See the main [README.md](../README.md) for more detailed information about the project.
