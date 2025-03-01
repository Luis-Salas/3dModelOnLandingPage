import { useState } from 'react'
import './App.css'
import FurryBuilderLandingPage from './components/LandingPageComponent'
import MaskViewerTest from './components/MaskViewerTest'

function App() {
  const [showTestPage, setShowTestPage] = useState(false)

  return (
    <>
      <div className="fixed top-0 right-0 p-4 z-[9999]">
        <button 
          onClick={() => setShowTestPage(!showTestPage)}
          className="bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        >
          {showTestPage ? 'Show Main Page' : 'Show Test Page'}
        </button>
      </div>
      
      {showTestPage ? <MaskViewerTest /> : <FurryBuilderLandingPage />}
    </>
  )
}

export default App
