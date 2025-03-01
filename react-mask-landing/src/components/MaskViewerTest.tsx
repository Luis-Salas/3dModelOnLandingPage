import React, { useState } from 'react';
import MaskViewer from './MaskViewer';

const MaskViewerTest: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('#ff6b9d');
  
  const colorOptions = [
    { name: 'Pink', value: '#ff6b9d' },
    { name: 'Blue', value: '#60a5fa' },
    { name: 'Purple', value: '#a78bfa' },
    { name: 'Green', value: '#4ade80' },
    { name: 'Yellow', value: '#fcd34d' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Mask Viewer Test</h1>
        
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4 text-center">3D Mask Viewer</h2>
          <div className="h-[500px] w-full mb-4 border-2 border-gray-200 rounded-lg overflow-hidden">
            <MaskViewer selectedColor={selectedColor} />
          </div>
          <div className="text-center text-gray-700 mb-4">
            <p className="mb-2">Move your mouse to interact with the mask!</p>
            <p className="text-sm bg-yellow-100 p-2 rounded inline-block">
              <strong>Tip:</strong> Double-click on the viewer to enable orbit controls.
              When enabled, you can rotate (left-click + drag), pan (right-click + drag), and zoom (scroll).
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Color Options</h2>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {colorOptions.map((color) => (
              <button
                key={color.value}
                className={`w-16 h-16 rounded-full transition-transform ${
                  selectedColor === color.value ? 'ring-4 ring-black scale-110' : 'hover:scale-105'
                }`}
                style={{
                  backgroundColor: color.value,
                  border: '2px solid black',
                  boxShadow: '2px 2px 0 rgba(0,0,0,0.2)',
                }}
                onClick={() => setSelectedColor(color.value)}
                aria-label={`Select ${color.name} color`}
              >
                <span className="sr-only">{color.name}</span>
              </button>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-bold mb-2">Debug Info:</h3>
            <p>Selected Color: <span className="font-mono">{selectedColor}</span></p>
            <div 
              className="w-8 h-8 rounded-full inline-block ml-2 border border-gray-400" 
              style={{ backgroundColor: selectedColor }}
            ></div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-1">Troubleshooting:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>If you don't see the mask, check the browser console for errors</li>
                <li>The red cube marks the origin (0,0,0) in 3D space</li>
                <li>Green line = Y axis, Red line = X axis, Blue line = Z axis</li>
                <li>If orbit controls don't work, try clicking inside the viewer first</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaskViewerTest;
