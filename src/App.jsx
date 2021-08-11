import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from "./components/portfolio/Portfolio"
import Contact from './components/contact/Contact'
import Certifications from './components/certifications/Certifications'
import './app.scss'

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className='sections'>
        <Intro/>
        <Portfolio/>
        <Certifications/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
