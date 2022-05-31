import React from 'react';

import './App.css';

import Crcle from './components/circle';

import Recte from './components/rect';


 import  Konva  from './components/konva';


function App() {
  return (
    <div className="App">
     <Crcle />
     <Recte />
     <Konva />
    </div>
  );
}

export default App;
