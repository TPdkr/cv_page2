import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Navbar from './navbar/navbar';

//theme context is imported from a file
import { useTheme} from './themer.jsx';

//pages
import MainPage from './mainpage/mainpage';
import Building from './hidden_pages/building';
import Projects from './projects/projects.jsx';
import OS from './projects/os/os.jsx';
import Vision from './projects/vision/vision.jsx';

function App() {
  //theme is requested and specified at the very top component
  const {isLight} = useTheme();
  const className = (isLight)? "light" : "";

  return (
    <div className={className}>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="cv_page2/" element={<MainPage/>}></Route>
            <Route path="cv_page2/projects/" element={<Projects/>}></Route>
            <Route path="cv_page2/projects/os/" element={<OS/>}></Route>
            <Route path="cv_page2/projects/vision/" element={<Vision/>}></Route>
            <Route path="cv_page2/error/" element={<Building/>}></Route>
            <Route path="cv_page2/notyet/" element={<Building/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
