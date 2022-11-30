import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import StartUp from './components/startup';
import Image from "./resources/superdry_logo-1.png";
import {Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <div className='background'>
      <header className='header'>
        <div className='symbol'>
          <img src={Image} height={50}/>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/"><div className='headerItem'>Home</div></Link>
              
            </li>
            <li>
              <Link to="/Contact"><div className='headerItem'>Contact</div></Link>
            </li>
          </ul>
        </div>
        
      </header>
      <main>
        <Routes >
          <Route exact path='/' element={<StartUp/>} />
          <Route exact path='/Contact' element={<Contact/>} />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
