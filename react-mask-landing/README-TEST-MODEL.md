# 3D Mask Model Testing Guide

This guide explains how to test the 3D mask model separately from the React application.

## CORS Issues When Opening HTML Files Directly

If you open the `test-model.html` file directly in a browser (using the `file://` protocol), you'll encounter CORS (Cross-Origin Resource Sharing) errors like:

```
Access to fetch at 'file:///C:/Users/.../mask.glb' from origin 'null' has been blocked by CORS policy
```

This happens because browsers enforce security restrictions that prevent loading local resources when opening HTML files directly from the file system.

## Solution: Use a Local Server

To properly test the 3D model, you need to serve the files through a local HTTP server. You have two options:

### Option 1: Run server from project root (recommended)

1. Open a terminal/command prompt
2. Navigate to the project root directory:
   ```
   cd c:\Users\Luis\Desktop\github\CLattice\3dmodelOnALandingPage
   ```
3. Run the server:
   ```
   node server.cjs
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000/react-mask-landing/public/test-model.html
   ```

### Option 2: Run server from React project directory

1. Open a terminal/command prompt
2. Navigate to the React project directory:
   ```
   cd c:\Users\Luis\Desktop\github\CLattice\3dmodelOnALandingPage\react-mask-landing
   ```
3. Run the server:
   ```
   node server.js
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000/public/test-model.html
   ```

## Using the Test Page

The test page provides:

- 3D model visualization with proper lighting
- Orbit controls for manual rotation/panning/zooming
- Debug information about the model
- Visual helpers (grid, axes, origin cube)

### Orbit Controls:
- Left Click + Drag: Rotate view
- Right Click + Drag: Pan view
- Scroll: Zoom in/out

## Troubleshooting

If the model still doesn't load:

1. Check the browser console for specific errors
2. Verify that the `mask.glb` file exists in the correct location (should be in the `public` folder)
3. Try different paths in the `modelPaths` array in the HTML file
4. Make sure the server is running and accessible

### Common Issues:

- **"require is not defined"**: If you get this error when running `server.js`, use `server.cjs` instead or run from the project root directory.
- **File not found errors**: Check the server console to see which paths are being requested and make sure the files exist at those locations.
- **CORS errors still occurring**: Make sure you're accessing the page through the server (`http://localhost:3000/...`) and not directly from the file system.

## For Development

When developing the React application, the Vite development server already handles serving the files correctly, so you won't encounter these CORS issues when running:

```
npm run dev
