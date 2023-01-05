import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Nav from './components/Header/Nav.jsx';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';


function App() {
  return (
      <>
      <Nav></Nav >
      <Routes> 
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
      </Routes>
      <Footer></Footer>
      </>
   
  );
}

export default App;
