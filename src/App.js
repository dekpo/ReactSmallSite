import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Header from './components/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/ReactSmallSite/" element={ <Home /> } />
      <Route path="/ReactSmallSite/contact" element={ <Contact /> } />
      <Route path="/ReactSmallSite/gallery" element={ <Gallery /> } />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
