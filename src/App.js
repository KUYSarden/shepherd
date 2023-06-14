
import './App.css';
import Lyrics from './song/Song';
import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from './components/Navbar';
import Side from './components/Sidebar';

function App() {

  return (
    <div>
      <Navs/>
      <Side/>
   <Lyrics/>
      
    </div>
  );
}

export default App;
