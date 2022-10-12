import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import BrowsePage from './components/BrowsePage/BrowsePage';
import { Database, twitchData } from './components/Helper/useFirebase';


function App() {
  const [theme, setTheme] = useState('dark');
  const data = twitchData();
  console.log(data);

  return (
    <div className="App">
      <NavBar theme={theme}/>
      <SideBar theme={theme}/>
      <BrowsePage />
    </div>
  );
}

export default App;
