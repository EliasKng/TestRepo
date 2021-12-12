import React from 'react';
import './App.scss';
import {Visualization} from "./Components/Visualization";
import {VisualizationSettings} from "./Components/VisualizationSettings";

function App() {
  return <div className="App">
    <body>
      <Visualization/>
      <VisualizationSettings/>
    </body>
  </div>;
}

export default App;
