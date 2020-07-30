import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          
          <div id="pic">
            <img src="chewtle.png"></img>
          </div>

          <div id="items">
            <div className="req_title">
              Requirements:
            </div>
            <ul className="req_list">
              <li>Level</li>
              <li>IVs</li>
              <li>Nature</li>
            </ul>
          </div>

        </div>
      </body>
    </div>
  );
}

export default App;
