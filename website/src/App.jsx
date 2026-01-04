import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Navbar from './navbar/navbar';
import MainPage from './mainpage/mainpage';

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
            <Route path="cv_page2/projects/" element={<h1>Projects</h1>}></Route>
            <Route path="cv_page2/error/" element={<h1>Error</h1>}></Route>
            <Route path="cv_page2/notyet/" element={<h1>Not yet</h1>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
