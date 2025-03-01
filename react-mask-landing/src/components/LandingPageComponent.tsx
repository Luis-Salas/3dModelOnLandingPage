import React, { useState } from 'react';

import { Heart, ShoppingCart, Menu, Home, Info, Store } from 'lucide-react';
import MaskViewer from './MaskViewer'; // Make sure to import the MaskViewer component

const FurryBuilderLandingPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('#ff6b9d');
  
  const colorOptions = [
    { name: 'Pink', value: '#ff6b9d' },
    { name: 'Blue', value: '#60a5fa' },
    { name: 'Purple', value: '#a78bfa' },
    { name: 'Green', value: '#4ade80' },
    { name: 'Yellow', value: '#fcd34d' },
  ];

  return (
    <div className="min-h-screen bg-yellow-100 font-sans" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23bae6fd\' fill-opacity=\'0.3\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundAttachment: 'fixed'}}>
      {/* Fantasy-themed clouds and floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-24 h-24 bg-white rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white rounded-full opacity-30 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-white rounded-full opacity-50 animate-float-slow"></div>
      </div>
      
      {/* Navigation Bar with bold cartoon outline */}
      <nav className="sticky top-0 z-50 py-3 px-6" style={{
        background: 'linear-gradient(to right, #fef9c3, #fce7f3)',
        boxShadow: '0 4px 0 rgba(0,0,0,0.2)',
        border: '3px solid #000'
      }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold" style={{
              textShadow: '2px 2px 0 #fff, 3px 3px 0 #000',
              color: '#9333ea'
            }}>
              <span style={{color: '#db2777'}}>Fuzzy</span>Quests
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Shop'].map((item) => (
              <a key={item} href="#" className="flex items-center space-x-1 font-bold hover:scale-110 transition-all" style={{
                color: '#7e22ce',
                textShadow: '1px 1px 0 #fff'
              }}>
                {item === 'Home' && <Home size={18} />}
                {item === 'About' && <Info size={18} />}
                {item === 'Shop' && <Store size={18} />}
                <span>{item}</span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="relative p-2 hover:scale-110 transition-all" style={{color: '#db2777'}}>
              <Heart size={28} style={{filter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.3))'}} />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">3</span>
            </a>
            <a href="#" className="relative p-2 hover:scale-110 transition-all" style={{color: '#db2777'}}>
              <ShoppingCart size={28} style={{filter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.3))'}} />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">2</span>
            </a>
            <button className="md:hidden p-2 hover:scale-110 transition-all" style={{color: '#db2777'}}>
              <Menu size={28} style={{filter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.3))'}} />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Hero Section with Neopets-style illustrations */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 relative">
            {/* Decorative stars */}
            <div className="absolute -top-10 -left-8 w-16 h-16 text-yellow-400" style={{
              transform: 'rotate(-15deg)'
            }}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <div className="absolute top-20 right-0 w-10 h-10 text-pink-400" style={{
              transform: 'rotate(20deg)'
            }}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{
              color: '#7e22ce',
              textShadow: '2px 2px 0 #fff, 3px 3px 0 #000',
              fontFamily: 'comic sans ms, cursive'
            }}>Design Your <span style={{color: '#db2777'}}>Magical</span> Fursuit!</h1>
            
            <p className="text-lg mb-6" style={{
              color: '#6b21a8',
              textShadow: '1px 1px 0 #fff',
              fontWeight: 'bold'
            }}>Create your dream character with our interactive builder! Each costume is handcrafted with love and magic✨</p>
            
            <div className="flex space-x-4">
              <button className="px-6 py-3 font-bold rounded-full transform hover:scale-105 transition-all" style={{
                background: 'linear-gradient(to bottom, #db2777, #9d174d)',
                color: 'white',
                border: '3px solid #000',
                boxShadow: '0 4px 0 #000',
                textShadow: '1px 1px 0 #000'
              }}>Start Creating</button>
              
              <button className="px-6 py-3 font-bold rounded-full transform hover:scale-105 transition-all" style={{
                background: 'linear-gradient(to bottom, #a78bfa, #7e22ce)',
                color: 'white',
                border: '3px solid #000',
                boxShadow: '0 4px 0 #000',
                textShadow: '1px 1px 0 #000'
              }}>View Gallery</button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative" style={{
            border: '4px solid #000',
            borderRadius: '24px',
            background: 'linear-gradient(to bottom, #fef9c3, #fff)',
            boxShadow: '0 6px 0 rgba(0,0,0,0.3)',
            transform: 'rotate(2deg)'
          }}>
            <div className="absolute -top-8 -left-8 bg-blue-400 py-2 px-4 font-bold" style={{
              borderRadius: '12px',
              border: '3px solid #000',
              color: 'white',
              transform: 'rotate(-8deg)',
              boxShadow: '0 4px 0 rgba(0,0,0,0.3)',
              textShadow: '1px 1px 0 #000'
            }}>New!</div>
            
            <div className="p-6 rounded-2xl">
              <img src="/api/placeholder/500/400" alt="Fursuit preview" className="w-full h-64 object-cover rounded-xl mb-4" style={{
                border: '3px solid #000',
                boxShadow: '0 4px 0 rgba(0,0,0,0.2)'
              }} />
              <p className="text-center italic font-bold" style={{color: '#9333ea'}}>*Your 3D preview will magically appear here*</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Customizer Section with cartoon styling */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold relative inline-block" style={{
              color: '#7e22ce',
              textShadow: '2px 2px 0 #fff, 3px 3px 0 #000',
              fontFamily: 'comic sans ms, cursive'
            }}>
              Create Your <span style={{color: '#db2777'}}>Perfect</span> Character
              <div className="absolute w-full h-4 bg-yellow-300 -z-10 bottom-0 left-0 transform -rotate-1 rounded-lg"></div>
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 3D Model Preview Area */}
            <div className="lg:w-7/12">
              <div className="bg-white p-6 rounded-xl shadow-lg" style={{
                borderRadius: '24px',
                border: '4px solid #000',
                boxShadow: '8px 8px 0 rgba(0,0,0,0.2)',
                height: '500px',
                width: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Decorative pawprints */}
                <div className="absolute top-4 left-4 w-8 h-8 text-purple-700 opacity-40">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1c-2.2 0-4 1.8-4 4 0 1.1.5 2.1 1.2 2.8L8 9H4c-1.1 0-2 .9-2 2s.9 2 2 2h4l1.2 1.2c.7.7 1.8 1.2 2.8 1.2 2.2 0 4-1.8 4-4 0-1.1-.5-2.1-1.2-2.8L14 7h4c1.1 0 2-.9 2-2s-.9-2-2-2h-4l-1.2-1.2C12.1 1.5 11.1 1 10 1h2z"/></svg>
                </div>
                <div className="absolute bottom-8 right-8 w-10 h-10 text-pink-700 opacity-30" style={{transform: 'rotate(45deg)'}}>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1c-2.2 0-4 1.8-4 4 0 1.1.5 2.1 1.2 2.8L8 9H4c-1.1 0-2 .9-2 2s.9 2 2 2h4l1.2 1.2c.7.7 1.8 1.2 2.8 1.2 2.2 0 4-1.8 4-4 0-1.1-.5-2.1-1.2-2.8L14 7h4c1.1 0 2-.9 2-2s-.9-2-2-2h-4l-1.2-1.2C12.1 1.5 11.1 1 10 1h2z"/></svg>
                </div>
                
                <div className="text-center">
                  <div className="w-full h-full mx-auto mb-4 relative">
                    <MaskViewer selectedColor={selectedColor} />
                  </div>
                  <p className="font-bold" style={{
                    color: '#6b21a8',
                    textShadow: '1px 1px 0 rgba(0,0,0,0.3)'
                  }}>
                    Move your mouse to interact with the mask!
                  </p>
                </div>
              </div>
            </div>
            
            {/* Customization Controls */}
            <div className="lg:w-5/12">
              <div className="p-6 relative" style={{
                background: 'linear-gradient(to bottom, #fbcfe8, #f9a8d4)',
                border: '4px solid #000',
                borderRadius: '24px',
                boxShadow: '0 6px 0 rgba(0,0,0,0.3)'
              }}>
                {/* Decorative star */}
                <div className="absolute -top-4 -right-4 w-12 h-12 text-yellow-400">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                
                <h3 className="text-xl font-bold mb-4" style={{
                  color: '#6b21a8',
                  textShadow: '1px 1px 0 rgba(0,0,0,0.3)',
                  fontFamily: 'comic sans ms, cursive'
                }}>Customize Your Fursuit</h3>
                
                {/* Tabs for different customization options - cartoon style */}
                <div className="flex mb-6">
                  {['Masks', 'Ears', 'Tails', 'Colors'].map((tab) => (
                    <button 
                      key={tab}
                      className={`px-4 py-2 font-bold ${tab === 'Masks' ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-800'}`}
                      style={{
                        borderTop: '3px solid #000',
                        borderRight: '3px solid #000',
                        borderBottom: tab === 'Masks' ? 'none' : '3px solid #000',
                        borderLeft: tab === 'Masks' ? '3px solid #000' : 'none',
                        borderTopLeftRadius: tab === 'Masks' ? '12px' : '0',
                        borderTopRightRadius: tab === 'Colors' ? '12px' : '0',
                        boxShadow: tab === 'Masks' ? 'none' : '0 4px 0 rgba(0,0,0,0.1)',
                        textShadow: tab === 'Masks' ? '1px 1px 0 rgba(0,0,0,0.5)' : 'none',
                        position: 'relative',
                        top: tab === 'Masks' ? '3px' : '0'
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                
                {/* Color selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3" style={{
                    color: '#6b21a8'
                  }}>
                    Choose a Color
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {colorOptions.map((color) => (
                      <button
                        key={color.value}
                        className={`w-12 h-12 rounded-full transition-transform ${selectedColor === color.value ? 'scale-110 ring-4 ring-black' : 'scale-100 hover:scale-105'}`}
                        style={{
                          backgroundColor: color.value,
                          border: '2px solid black',
                          boxShadow: '2px 2px 0 rgba(0,0,0,0.2)',
                          transform: selectedColor === color.value ? 'scale(1.1)' : 'scale(1)'
                        }}
                        onClick={() => setSelectedColor(color.value)}
                        aria-label={`Select ${color.name} color`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Mask Options - with cartoon styling */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-3" style={{
                    color: '#6b21a8',
                    textShadow: '1px 1px 0 #fff'
                  }}>Select Mask Style</h4>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['Classic', 'Chibi', 'Realistic', 'Toony', 'Fantasy', 'Custom'].map((style) => (
                      <button 
                        key={style}
                        className={`p-3 flex flex-col items-center transform hover:scale-105 transition-all`}
                        style={{
                          background: style === 'Chibi' ? 'linear-gradient(to bottom, #fbcfe8, #db2777)' : 'linear-gradient(to bottom, #e9d5ff, #a78bfa)',
                          border: '3px solid #000',
                          borderRadius: '16px',
                          boxShadow: '0 4px 0 rgba(0,0,0,0.2)'
                        }}
                      >
                        <div className="w-12 h-12 bg-white rounded-full border-2 border-black mb-2"></div>
                        <span className="text-sm font-bold" style={{
                          color: style === 'Chibi' ? 'white' : '#6b21a8',
                          textShadow: style === 'Chibi' ? '1px 1px 0 rgba(0,0,0,0.5)' : '1px 1px 0 #fff'
                        }}>{style}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Facial Features Options - cartoon styling */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-3" style={{
                    color: '#6b21a8',
                    textShadow: '1px 1px 0 #fff'
                  }}>Facial Features</h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {['Eyes', 'Nose', 'Mouth', 'Markings'].map((feature) => (
                      <button 
                        key={feature}
                        className="p-3 flex items-center transform hover:scale-105 transition-all"
                        style={{
                          background: 'linear-gradient(to bottom, #c4b5fd, #8b5cf6)',
                          borderRadius: '16px',
                          border: '3px solid #000',
                          boxShadow: '0 4px 0 rgba(0,0,0,0.2)'
                        }}
                      >
                        <div className="w-10 h-10 bg-white rounded-full border-2 border-black mr-3"></div>
                        <span className="text-sm font-bold text-white" style={{
                          textShadow: '1px 1px 0 rgba(0,0,0,0.5)'
                        }}>{feature}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex mt-8 space-x-3">
                  <button className="flex-1 px-4 py-3 font-bold rounded-full transform hover:scale-105 transition-all" style={{
                    background: 'linear-gradient(to bottom, #db2777, #9d174d)',
                    color: 'white',
                    border: '3px solid #000',
                    boxShadow: '0 4px 0 #000',
                    textShadow: '1px 1px 0 #000'
                  }}>Save Design</button>
                  
                  <button className="flex-1 px-4 py-3 font-bold rounded-full transform hover:scale-105 transition-all" style={{
                    background: 'linear-gradient(to bottom, #7e22ce, #581c87)',
                    color: 'white',
                    border: '3px solid #000',
                    boxShadow: '0 4px 0 #000',
                    textShadow: '1px 1px 0 #000'
                  }}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products - Neo-styled */}
      <section className="py-16 px-6 relative z-10" style={{
        background: 'linear-gradient(to bottom, #ddd6fe, #e9d5ff)',
        borderTop: '4px dashed #000',
        borderBottom: '4px dashed #000'
      }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold relative inline-block" style={{
              color: '#7e22ce',
              textShadow: '2px 2px 0 #fff, 3px 3px 0 #000',
              fontFamily: 'comic sans ms, cursive'
            }}>
              Magical <span style={{color: '#db2777'}}>Creations</span>
              <div className="absolute w-full h-4 bg-yellow-300 -z-10 bottom-0 left-0 transform -rotate-1 rounded-lg"></div>
            </h2>
            <p className="text-lg font-bold mt-2" style={{
              color: '#6b21a8',
              textShadow: '1px 1px 0 #fff'
            }}>Get inspired by our most popular designs!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="transform hover:scale-105 transition-all" style={{
                background: 'linear-gradient(to bottom, #fff, #f0e4fa)',
                border: '4px solid #000',
                borderRadius: '24px',
                boxShadow: '0 6px 0 rgba(0,0,0,0.3)',
                overflow: 'hidden'
              }}>
                <div className="h-56 relative">
                  <img src={`/api/placeholder/400/${300 + item * 20}`} alt={`Featured fursuit ${item}`} className="w-full h-full object-cover" style={{
                    borderBottom: '4px solid #000'
                  }} />
                  <div className="absolute top-4 right-4 transform rotate-12" style={{
                    background: '#db2777',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '8px 16px',
                    border: '3px solid #000',
                    borderRadius: '8px',
                    boxShadow: '0 3px 0 rgba(0,0,0,0.3)',
                    textShadow: '1px 1px 0 #000'
                  }}>Popular!</div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{
                    color: '#7e22ce',
                    textShadow: '1px 1px 0 #fff',
                    fontFamily: 'comic sans ms, cursive'
                  }}>Fuzzy Dreamer #{item}</h3>
                  
                  <p className="mb-4 font-bold" style={{
                    color: '#6b21a8'
                  }}>Handcrafted full suit with custom details</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold" style={{
                      background: '#fef9c3',
                      color: '#db2777',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      border: '2px solid #000',
                      boxShadow: '0 2px 0 rgba(0,0,0,0.2)',
                      textShadow: '1px 1px 0 #fff'
                    }}>799 Neopoints</span>
                    
                    <button className="p-2 text-pink-500 transform hover:scale-110 transition-all">
                      <Heart size={28} style={{filter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.3))'}} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 font-bold rounded-full transform hover:scale-105 transition-all" style={{
              background: 'linear-gradient(to bottom, #8b5cf6, #6d28d9)',
              color: 'white',
              border: '3px solid #000',
              boxShadow: '0 4px 0 #000',
              textShadow: '1px 1px 0 #000'
            }}>
              View All Designs
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer - with Neo-style */}
      <footer className="py-12 px-6 relative z-10" style={{
        background: 'linear-gradient(to bottom, #7e22ce, #581c87)',
        borderTop: '4px solid #000'
      }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{
              color: '#f9a8d4',
              textShadow: '2px 2px 0 #000',
              fontFamily: 'comic sans ms, cursive'
            }}>FuzzyQuests</h3>
            
            <p className="mb-4 font-bold" style={{
              color: '#f5d0fe',
              textShadow: '1px 1px 0 rgba(0,0,0,0.5)'
            }}>Handcrafted furry costumes made with love and magic!</p>
            
            <div className="flex space-x-4">
              {['F', 'I', 'T', 'D'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full transform hover:scale-110 transition-all"
                  style={{
                    background: 'linear-gradient(to bottom, #f9a8d4, #db2777)',
                    border: '2px solid #000',
                    boxShadow: '0 2px 0 rgba(0,0,0,0.3)'
                  }}
                >
                  <span className="text-sm font-bold text-white" style={{textShadow: '1px 1px 0 #000'}}>{social}</span>
                </a>
              ))}
            </div>
          </div>
          
          {['Shop', 'Help', 'Contact'].map((category) => (
            <div key={category}>
              <h4 className="text-lg font-bold mb-4" style={{
                color: '#f9a8d4',
                textShadow: '2px 2px 0 #000',
                fontFamily: 'comic sans ms, cursive'
              }}>{category}</h4>
              
              <ul className="space-y-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-bold hover:text-pink-300 transition-colors" style={{
                      color: '#f5d0fe',
                      textShadow: '1px 1px 0 rgba(0,0,0,0.5)'
                    }}>{`${category} Item ${item}`}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto border-t border-purple-500 mt-8 pt-8 text-center">
          <p className="font-bold" style={{
            color: '#f5d0fe',
            textShadow: '1px 1px 0 rgba(0,0,0,0.5)'
          }}> 2025 FuzzyQuests. All magic rights reserved. Handmade with neopet love!</p>
        </div>
      </footer>
      
      {/* Animation styles */}
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float-delayed {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        `}
      </style>
    </div>
  );
};

export default FurryBuilderLandingPage;