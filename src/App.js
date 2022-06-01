
import React from 'react';

import './App.css';

 import Crcle from './components/circle';

import Recte from './components/rect';

import  Konva  from './components/konva';

import Animation from './components/animation';

import Transforme from './components/transformer';


function App() {
  return (
    <div className="App">
    <Transforme />
    <Animation />
    <Konva />
    <Crcle />
    <Recte />
    </div>
  );
}

export default App;
