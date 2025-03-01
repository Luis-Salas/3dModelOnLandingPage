// Initialize variables
let scene, camera, renderer, mask;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

// Constants for controlling mask movement
const ROTATION_SPEED = 0.05;
const MAX_ROTATION = 0.3;

// Initialize Three.js scene
function init() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xadd8e6); // Light blue background

    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(document.getElementById('model-viewer').clientWidth, document.getElementById('model-viewer').clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('model-viewer').appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Load the mask model
    loadModel();

    // Add event listeners for mouse movement
    document.addEventListener('mousemove', onDocumentMouseMove);
    window.addEventListener('resize', onWindowResize);

    // Set up color change buttons
    setupColorButtons();

    // Start animation loop
    animate();
}

// Load the 3D model
function loadModel() {
    // Create a loader for the GLTF/GLB model
    const loader = new THREE.GLTFLoader();
    
    console.log('Attempting to load model: ./mask.glb');
    
    // Load the GLB file
    loader.load(
        './mask.glb',
        function (gltf) {
            console.log('Model loaded successfully!');
            mask = gltf.scene;
            
            // Center and scale the model appropriately
            const box = new THREE.Box3().setFromObject(mask);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            
            // Center the model
            mask.position.x = -center.x;
            mask.position.y = -center.y;
            mask.position.z = -center.z;
            
            // Scale the model to fit in view
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 3 / maxDim;
            mask.scale.set(scale, scale, scale);
            
            scene.add(mask);
            console.log('Model added to scene');
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error('An error happened while loading the model', error);
            
            // Try a different approach - using direct file path
            console.log('Trying alternative approach...');
            loader.load(
                'mask.glb',
                function(gltf) {
                    console.log('Model loaded successfully with alternative path!');
                    mask = gltf.scene;
                    
                    // Center and scale the model appropriately
                    const box = new THREE.Box3().setFromObject(mask);
                    const center = box.getCenter(new THREE.Vector3());
                    const size = box.getSize(new THREE.Vector3());
                    
                    // Center the model
                    mask.position.x = -center.x;
                    mask.position.y = -center.y;
                    mask.position.z = -center.z;
                    
                    // Scale the model to fit in view
                    const maxDim = Math.max(size.x, size.y, size.z);
                    const scale = 3 / maxDim;
                    mask.scale.set(scale, scale, scale);
                    
                    scene.add(mask);
                },
                function(xhr) {
                    console.log('Alternative path: ' + (xhr.loaded / xhr.total * 100) + '% loaded');
                },
                function(error) {
                    console.error('Alternative approach also failed', error);
                    
                    // Fallback to placeholder if model fails to load
                    console.log('Falling back to placeholder box');
                    const geometry = new THREE.BoxGeometry(2, 2, 0.5);
                    const material = new THREE.MeshStandardMaterial({ 
                        color: 0xffb6c1, // Pink pastel
                        roughness: 0.5,
                        metalness: 0.1
                    });
                    mask = new THREE.Mesh(geometry, material);
                    scene.add(mask);
                }
            );
        }
    );
}

// Handle mouse movement
function onDocumentMouseMove(event) {
    // Calculate normalized mouse position
    mouseX = (event.clientX - windowHalfX) / windowHalfX;
    mouseY = (event.clientY - windowHalfY) / windowHalfY;
}

// Handle window resize
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    
    camera.aspect = document.getElementById('model-viewer').clientWidth / document.getElementById('model-viewer').clientHeight;
    camera.updateProjectionMatrix();
    
    renderer.setSize(document.getElementById('model-viewer').clientWidth, document.getElementById('model-viewer').clientHeight);
}

// Set up color buttons
function setupColorButtons() {
    const pinkBtn = document.querySelector('.color-btn.pink');
    const blueBtn = document.querySelector('.color-btn.blue');
    const yellowBtn = document.querySelector('.color-btn.yellow');
    const mintBtn = document.querySelector('.color-btn.mint');
    
    pinkBtn.addEventListener('click', () => changeMaskColor(0xffb6c1));
    blueBtn.addEventListener('click', () => changeMaskColor(0xadd8e6));
    yellowBtn.addEventListener('click', () => changeMaskColor(0xfffacd));
    mintBtn.addEventListener('click', () => changeMaskColor(0xc7f6d3));
}

// Change mask color
function changeMaskColor(color) {
    if (mask) {
        if (mask.material) {
            mask.material.color.set(color);
        } else if (mask.traverse) {
            // For loaded GLTF models with multiple materials
            mask.traverse((child) => {
                if (child.isMesh && child.material) {
                    child.material.color.set(color);
                }
            });
        }
    }
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Make the mask look at the mouse position
    if (mask) {
        // Smoothly rotate the mask toward the mouse position
        mask.rotation.y += (mouseX * MAX_ROTATION - mask.rotation.y) * ROTATION_SPEED;
        mask.rotation.x += (mouseY * MAX_ROTATION - mask.rotation.x) * ROTATION_SPEED;
    }
    
    renderer.render(scene, camera);
}

// Start the application when the window loads
window.onload = init;
