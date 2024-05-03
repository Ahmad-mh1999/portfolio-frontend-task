import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  /* 
    this function handle swapings between light and dark mode 
    please adhere to the style variables withen :root{...} to 
    ensure the function toggleDarkMode operates correctly 
  */
  function toggleDarkMode(){
    const rootElement = document.documentElement ;
    rootElement.classList.toggle('dark-mode');
  }
  return (
    <>
      <Navbar />
      <div className="test-dark-mode">
        <button className="test-button" onClick={toggleDarkMode}>Dark Mode</button>
      </div>

      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/project' element={<Project/>} />
      </Routes>
    </>
    
  )
}

export default App
