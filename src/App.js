import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Picture from './pages/Picture';


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
      <Route path="/ReactSmallSite/gallery/:p" element={ <Gallery /> } />
      <Route path="/ReactSmallSite/picture/:id/:p" element={ <Picture /> } />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
