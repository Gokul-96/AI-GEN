



import React from 'react';
import Navbar_Page1 from './components/Navbar_Page1';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';


function App() {
  return (
    <div className="bg-black text-black min-h-screen">
      <Navbar_Page1 />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section id="page1" className="snap-start h-screen flex items-center justify-center">
          <Page1 />
        </section>
        <section id="page2" className="snap-start h-screen flex items-center justify-center">
          <Page2 />
        </section>
        <section id="page3" className="snap-start h-screen flex items-center justify-center">
          <Page3 />
        </section>
        <section id="page4" className="snap-start h-screen flex items-center justify-center">
          <Page4 />
        </section>
       
      </div>
    </div>
  );
}

export default App;