import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

//theme context is imported from a file
import {useTheme} from './themer.jsx';

import Navbar from './navbar/navbar';

//pages
import MainPage from './mainpage/mainpage';
import Building from './hidden_pages/building';
import Projects from './projects/projects.jsx';
import OS from './projects/os/os.jsx';
import Vision from './projects/vision/vision.jsx';
import Share from './other/share.jsx';
import About from './projects/about/about.jsx';
import SE from './projects/se/se.jsx';
import DBs from './projects/dbs/dbs.jsx';
import Genau from './projects/genau/genau.jsx';
import JVM from './projects/jvm/jvm.jsx';
import ADS from './projects/ads/ads.jsx';
import CCpp from './projects/cc/cc.jsx';

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
            <Route path="cv_page2/projects/about/" element={<About/>}></Route>
            <Route path="cv_page2/projects/vision/" element={<Vision/>}></Route>
            <Route path="cv_page2/projects/se/" element={<SE/>}></Route>
            <Route path="cv_page2/projects/os/" element={<OS/>}></Route>
            <Route path="cv_page2/projects/dbs/" element={<DBs/>}></Route>
            <Route path="cv_page2/projects/genau/" element={<Genau/>}></Route>
            <Route path="cv_page2/projects/jvm/" element={<JVM/>}></Route>
            <Route path="cv_page2/projects/ads/" element={<ADS/>}></Route>
            <Route path="cv_page2/projects/cc/" element={<CCpp/>}></Route>
            <Route path="cv_page2/error/" element={<Building/>}></Route>
            <Route path="cv_page2/notyet/" element={<Building/>}></Route>
            <Route path="cv_page2/share/" element={<Share/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
