import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Navbar from './navbar/navbar';
import MainPage from './mainpage/mainpage';
import Building from './hidden_pages/building';

/*
<!--
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>-->
*/

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="cv_page2/" element={<MainPage/>}></Route>
            <Route path="cv_page2/projects/" element={<Building/>}></Route>
            <Route path="cv_page2/error/" element={<Building/>}></Route>
            <Route path="cv_page2/notyet/" element={<Building/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
