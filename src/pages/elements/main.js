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
        <Card name="Quiz" duedate="14-11-2022" status="Working" tags="react,javascript" ownid="1234567" />
        
      </div>
      <div className="column">
        <h4>In Progress</h4>
        <Card name="Challenge" duedate="14-03-2022" status="Progress" tags="django,python" ownid="1234567" />
        <Card name="Test" duedate="14-03-2022" status="Progress" tags="react" ownid="1234567" />
        
      </div>
      <div className="column" >
        <h4>Completed</h4>
        <Card name="Google" duedate="04-03-2020" status="Completed" tags="markdown" ownid="1234567" />
        <Card name="Desing Iphones" duedate="14-03-2021" status="Completed" tags="java,javascript" ownid="1234567" />
        
      </div>
    </div>
  );
}

export default MainA;