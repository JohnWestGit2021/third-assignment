import logo from './logo.svg';
import './App.css';
import SideMenu from './Component/SideMenu';
import Home from './Container/home';
import Model from './Component/Model';
import { useState } from 'react';

function App() {
  const [modal, setmodal] = useState(false)
  const [sideMenu, setSideMenu] = useState(false)

  return (
    <div className="App">
      <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
      <div  className='main'>

        <Home sideMenu={sideMenu} setmodal={setmodal} setSideMenu={setSideMenu} />
        {
          modal &&
          <Model setmodal={setmodal} />
        }
      </div>
    </div>
  );
}

export default App;
