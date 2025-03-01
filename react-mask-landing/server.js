import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    // Get the file path from the URL
    let urlPath = req.url;
    
    // Default to index.html if root is requested
    if (urlPath === '/') {
        urlPath = '/index.html';
    }
    
    // Construct the absolute file path
    let filePath = path.join(__dirname, urlPath);
    
    console.log('Request for:', urlPath);
    console.log('Trying to serve file:', filePath);

    // Get the file extension
    const extname = String(path.extname(filePath)).toLowerCase();
    
    // Define content types for different file extensions
    const contentTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm',
        '.glb': 'model/gltf-binary',
        '.gltf': 'model/gltf+json'
    };

    // Set default content type to text/plain
    let contentType = contentTypes[extname] || 'text/plain';

    // Read the file
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // File not found
                res.writeHead(404);
                res.end(`File not found: ${urlPath} (${filePath})`);
                console.log(`File not found: ${urlPath} (${filePath})`);
            } else {
                // Server error
                res.writeHead(500);
                res.end('Server Error: ' + error.code);
                console.log('Server Error:', error.code, error);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
            console.log(`Successfully served: ${urlPath} (${contentType})`);
        }
    });
});

// Set the port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`To view the test model page, go to: http://localhost:${PORT}/public/test-model.html`);
    console.log(`Press Ctrl+C to stop the server`);
});
