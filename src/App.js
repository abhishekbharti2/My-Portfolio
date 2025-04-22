import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Admin from './components/Admin.js';
import Footer from './components/Footer.js';
import Formatter from './components/admin/Formatter.js';
import Ejoyr from './components/admin/Ejoyr.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/excelformatter" element={<Formatter />} />
        <Route path="/admin/ejoyr" element={<Ejoyr />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
