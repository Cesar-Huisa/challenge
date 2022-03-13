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
        <Card name="Challenge" duedate="14-03-2022" status="Working" tags="react,javascript" ownid="1234567" />
        
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