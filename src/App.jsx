import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page9 from './pages/Page9';
import Page10 from './pages/Page10';
import Page11 from './pages/Page11';
import Page12 from './pages/Page12';
import Page13 from './pages/Page13';
import Page14 from './pages/Page14';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5 />} />
      <Route path="/page6" element={<Page6 />} />
      <Route path="/page7" element={<Page7 />} />
      <Route path="/page8" element={<Page8 />} />
      <Route path="/page9" element={<Page9 />} />
      <Route path="/page10" element={<Page10 />} />
      <Route path="/page11" element={<Page11 />} />
      <Route path="/page12" element={<Page12 />} />
      <Route path="/page13" element={<Page13 />} />
      <Route path="/page14" element={<Page14 />} />

    </Routes>
  </Router>
  )
}

export default App