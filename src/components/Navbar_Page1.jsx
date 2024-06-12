import React from 'react';

const Navbar_Page1 = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white py-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold">A.I. GEN</div>
        
          
            
            <a href="#" className="text-gray-300 hover:text-white">Features</a>
            <a href="#" className="text-gray-300 hover:text-white">Roadmap</a>
            <a href="#" className="text-gray-300 hover:text-white">Tokenomics</a>

            </div>
            <div className="hidden md:flex space-x-4">
            <a href="#" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-purple-400">Whitepaper</a>
            <a href="#" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-400">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar_Page1;