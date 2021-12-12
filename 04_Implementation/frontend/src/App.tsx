import React from 'react';
import './App.scss';
import {Visualization} from "./Components/Visualization";
import {VisualizationSettings} from "./Components/VisualizationSettings";
import {Summary} from "./Components/Summary";

function App() {
  return <div className="App">
    <body>
      <Visualization/>
      <VisualizationSettings/>
      <Summary/>
    </body>
  </div>;
}

export default App;
