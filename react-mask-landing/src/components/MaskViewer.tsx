import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface MaskViewerProps {
  color?: string;
}

const MaskViewer: React.FC<MaskViewerProps> = ({ color = '#ffffff' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<any>({});
  const [isMouseTracking, setIsMouseTracking] = useState(true);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const maskRef = useRef<THREE.Object3D | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const isInitializedRef = useRef(false);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Toggle between mouse tracking and orbit controls
  const toggleControls = () => {
    const newIsMouseTracking = !isMouseTracking;
    setIsMouseTracking(newIsMouseTracking);
    if (controlsRef.current) {
      controlsRef.current.enabled = !newIsMouseTracking;
    }
  };

  useEffect(() => {
    if (!containerRef.current || isInitializedRef.current) return;
    isInitializedRef.current = true;

    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.position.y = 2;
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0xe0e0e0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add debug helpers
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enabled = !isMouseTracking;
    controlsRef.current = controls;

    // Load the model
    const loader = new GLTFLoader();
    const modelUrl = 'http://localhost:3000/react-mask-landing/public/mask.glb';

    loader.load(
      modelUrl,
      (gltf) => {
        const model = gltf.scene;

        // Calculate bounding box
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        const size = new THREE.Vector3();
        box.getCenter(center);
        box.getSize(size);

        // Update debug info
        setDebugInfo({
          modelInfo: {
            boundingBox: {
              min: box.min.toArray(),
              max: box.max.toArray(),
              center: center.toArray(),
              size: size.toArray()
            },
            meshCount: 0,
            materials: []
          },
          controls: {
            mode: isMouseTracking ? 'Mouse Tracking' : 'Orbit Controls'
          }
        });

        // Center the model
        model.position.x = -center.x;
        model.position.y = -center.y;
        model.position.z = -center.z;

        // Scale the model
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        model.scale.setScalar(scale);

        // Set color and count meshes/materials
        let meshCount = 0;
        const materials: string[] = [];
        model.traverse((child: THREE.Object3D) => {
          if ((child as THREE.Mesh).isMesh) {
            meshCount++;
            const mesh = child as THREE.Mesh;
            if (mesh.material) {
              (mesh.material as THREE.MeshStandardMaterial).color.set(color);
              materials.push(mesh.material.type);
            }
          }
        });

        // Update debug info with mesh data
        setDebugInfo(prev => ({
          ...prev,
          modelInfo: {
            ...prev.modelInfo,
            meshCount,
            materials
          }
        }));

        scene.add(model);
        maskRef.current = model;
        setLoading(false);
      },
      (xhr) => {
        const percentComplete = (xhr.loaded / xhr.total) * 100;
        setDebugInfo(prev => ({
          ...prev,
          loading: {
            progress: Math.round(percentComplete),
            loaded: xhr.loaded,
            total: xhr.total
          }
        }));
      },
      (error) => {
        console.error('Error loading model:', error);
        setError('Failed to load model');
        setLoading(false);
        setDebugInfo(prev => ({
          ...prev,
          error: error.message
        }));
      }
    );

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [color]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current = { x, y };
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('dblclick', toggleControls);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('dblclick', toggleControls);
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

    const animate = () => {
      requestAnimationFrame(animate);

      if (controlsRef.current) {
        controlsRef.current.update();
      }

      // Update mask rotation based on mouse position when tracking is enabled
      if (maskRef.current && isMouseTracking) {
        const targetRotationX = mouseRef.current.y * Math.PI * 0.5;
        const targetRotationY = mouseRef.current.x * Math.PI * 0.5;
        
        maskRef.current.rotation.x += (targetRotationX - maskRef.current.rotation.x) * 0.1;
        maskRef.current.rotation.y += (targetRotationY - maskRef.current.rotation.y) * 0.1;
        
        // Update debug info with current rotation
        setDebugInfo(prev => ({
          ...prev,
          controls: {
            mode: isMouseTracking ? 'Mouse Tracking' : 'Orbit Controls',
            rotation: {
              x: maskRef.current.rotation.x,
              y: maskRef.current.rotation.y
            }
          }
        }));
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate();
  }, [isMouseTracking]);

  // Update color when prop changes
  useEffect(() => {
    if (maskRef.current) {
      maskRef.current.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            (mesh.material as THREE.MeshStandardMaterial).color.set(color);
          }
        }
      });
    }
  }, [color]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '400px', 
        background: '#e0e0e0',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px',
        border: '2px solid #000'
      }}
    >
      {/* Loading indicator */}
      {loading && (
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }} />
          <p style={{ marginTop: '10px' }}>
            Loading... {debugInfo.loading?.progress}%
          </p>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          background: 'rgba(255, 0, 0, 0.1)',
          padding: '20px',
          borderRadius: '8px',
          color: 'red'
        }}>
          {error}
        </div>
      )}

      {/* Debug overlay */}
      <div style={{ 
        position: 'absolute', 
        top: 10, 
        left: 10, 
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '10px',
        borderRadius: '4px',
        fontSize: '12px',
        maxWidth: '300px',
        maxHeight: '200px',
        overflow: 'auto'
      }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Debug Info</h3>
        <pre style={{ margin: 0, fontSize: '11px' }}>
          {JSON.stringify(debugInfo, null, 2)}
        </pre>
        <div style={{ marginTop: '8px' }}>
          <p>Mode: {isMouseTracking ? 'Mouse Tracking' : 'Orbit Controls'}</p>
          <p>Double-click to toggle mode</p>
        </div>
      </div>
    </div>
  );
};

export default MaskViewer;
