import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import CasaMelo from './Components/Casamelo/Casamelo';
import TECHSPECIFICATIONS from './Components/Casamelo/TECHSPECIFICATIONS'
import Gallery from './Components/Gallery/Gallery';
import Blog from './Components/Blogs/Blog';
import FirstBlog from './Components/Blogs/FirstBlog'
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import CallNow from './Components/CallNow/CallNow'
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/casamelo' element={<CasaMelo />} />
          <Route path='/TECHSPECIFICATIONS' element={<TECHSPECIFICATIONS />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/FirstBlog' element={<FirstBlog />} />
          <Route path='*' element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
      </BrowserRouter>
      <Footer />
      <CallNow/>
    </>
  );
};

export default App;
