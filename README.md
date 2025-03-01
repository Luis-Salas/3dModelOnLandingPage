# Kawaii Mask 3D Interactive Landing Page

A cute, Harajuku-inspired 3D mask builder landing page where a mask model follows your mouse movements!

## 🚀 Project Overview

- Interactive web application with a 3D mask model
- Built using React, TypeScript, Vite, Three.js, and Tailwind CSS
- Harajuku-inspired design with pastel color palette

## 🔧 Technical Stack

- **Frontend Framework**: React with TypeScript
- **3D Rendering**: Three.js
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Model Serving**: Node.js static server

## 📂 Key Components

1. **MaskViewer.tsx**
   - Handles 3D model loading and rendering
   - Implements mouse-tracking rotation
   - Supports dynamic color changing
   - Includes fallback rendering for model loading/errors

2. **LandingPageComponent.tsx**
   - Main landing page layout
   - Neopets/Harajuku-style design
   - Integrated 3D model preview
   - Responsive navigation and sections

3. **server.js**
   - Node.js server for serving the 3D model file
   - Handles CORS to allow cross-origin requests
   - Serves static files with proper MIME types

## 🌟 Features

- Interactive 3D mask model that follows your mouse cursor
- Color customization options
- Responsive design that works on various screen sizes
- Animated background elements
- Fallback rendering when model fails to load
- Orbit controls for model inspection (enabled by default, can be toggled with double-click)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kawaii-mask-landing.git
   cd kawaii-mask-landing
   ```

2. Install dependencies:
   ```bash
   cd react-mask-landing
   npm install
   ```

### Running the Application

This application requires two servers to run simultaneously:

#### 1. Start the Node.js server for serving the 3D model:

```bash
# From the root directory
node server.js
```

This will start a server on port 3000 that serves the 3D model file with proper CORS headers.

#### 2. Start the React development server:

```bash
# From the react-mask-landing directory
npm run dev
```

This will start the Vite development server on port 5173.

#### 3. Open your browser:

Navigate to `http://localhost:5173/` to view the application.

### Building for Production

```bash
cd react-mask-landing
npm run build
```

The built files will be in the `dist` directory.

## 🔍 Troubleshooting

### Model Not Loading

If the 3D model doesn't load:

1. **Check both servers are running:**
   - Node.js server on port 3000 (`node server.js`)
   - Vite development server on port 5173 (`npm run dev`)

2. **Check browser console for errors:**
   - CORS errors indicate the Node.js server might not be running
   - Path errors might indicate the model file is not found

3. **Try the test model page:**
   - Navigate to `http://localhost:3000/react-mask-landing/public/test-model.html`
   - This standalone page can help isolate model loading issues

4. **Enable orbit controls:**
   - Double-click on the viewer to toggle orbit controls
   - This allows you to rotate, pan, and zoom to check if the model is loaded but not visible

### CORS Issues

If you see CORS errors in the console:

1. Make sure the Node.js server is running
2. Check that the server has the proper CORS headers:
   ```javascript
   res.setHeader('Access-Control-Allow-Origin', '*');
   ```
3. Verify the model URL in `MaskViewer.tsx` points to the Node.js server:
   ```javascript
   const modelPath = 'http://localhost:3000/react-mask-landing/public/mask.glb';
   ```

## 📂 Project Structure

```
/
├── server.js                    # Node.js server for serving the 3D model
├── test-redirect.html           # Redirect page for testing
├── react-mask-landing/          # React application
│   ├── public/
│   │   ├── mask.glb             # 3D model file
│   │   └── test-model.html      # Standalone test page for the 3D model
│   ├── src/
│   │   ├── components/
│   │   │   ├── MaskViewer.tsx   # 3D model viewer component
│   │   │   ├── MaskViewerTest.tsx # Test component for the 3D model viewer
│   │   │   └── LandingPageComponent.tsx # Main landing page component
│   │   ├── App.tsx              # Main application component
│   │   └── main.tsx             # Application entry point
│   └── package.json             # Dependencies and scripts
```

## 📝 Project Conventions

### File Structure

- **ESM Modules**: This project uses ES Modules. All configuration files use `.js` extension with ESM syntax.
- **React Components**: Located in `src/components/` with `.tsx` extension
- **Static Assets**: Located in the `public/` directory
- **Styles**: Tailwind CSS utility classes with some inline styles for special effects

### Coding Conventions

- Use functional components with React Hooks
- Import React explicitly in all component files
- Use TypeScript interfaces for props
- Follow ESLint and Prettier configurations

## 🎨 Customization

### Adding Your Own 3D Model

To use your own 3D model:

1. Export your 3D model in GLTF/GLB format
2. Place it in the `react-mask-landing/public/` directory
3. Update the model path in `MaskViewer.tsx`:
   ```javascript
   const modelPath = 'http://localhost:3000/react-mask-landing/public/your-model.glb';
   ```
4. Adjust the scale and position values as needed for your specific model

### Changing Colors and Styles

- Modify Tailwind configuration in `tailwind.config.js`
- Update inline styles in components for special effects
- Change the color options in `LandingPageComponent.tsx` or `MaskViewerTest.tsx`

## 🌐 Development Environment

- Project Location: `c:\Users\Luis\Desktop\github\CLattice\3dmodelOnALandingPage`
- React App: `c:\Users\Luis\Desktop\github\CLattice\3dmodelOnALandingPage\react-mask-landing`
- Model File: `mask.glb` (in public directory)
- Node.js Server: http://localhost:3000
- React Development Server: http://localhost:5173

## 🚧 Next Steps

1. Implement more color/customization options
2. Add screenshot/download feature
3. Optimize 3D model performance
4. Enhance mobile responsiveness
5. Add more interactive elements
6. Implement a production-ready server setup
7. Add more 3D model options

## 📚 Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
