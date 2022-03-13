import React from 'react';

import './style/main.css';
import Topbar from './topbar';
import Card from './card';

function MainA() {
  return(
    <div className="row">
      <Topbar/>
      <div className="column">
        <h4>Working</h4>
        <Card name="Cesar"  />
        
      </div>
      <div className="column">
        <h4>In Progress</h4>
        
      </div>
      <div className="column" >
        <h4>Completed</h4>
        
      </div>
    </div>
  );
}

export default MainA;