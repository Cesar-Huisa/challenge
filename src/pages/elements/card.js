import React from 'react';

import './style/card.css';
import avatar from "../../img/avatar.jpg"

function diff(date) {
  
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  var end = date.split("-");

  var days = (Number(dd)-end[0])+((Number(mm)-end[1])*30)+((Number(yyyy)-end[2])*360);
  console.log(days);
  

  if (days == 0 ) {
    return "Today";
  }

  if (days == -1 ) {
    return "Tomorrow";
  }

  if (days == 1 ) {
    return "Yesterday";
    //red
  }

  if(days<-1) {
    return end[0]+","+end[1]+","+end[2];
  }

  else {
    return end[0]+","+end[1]+","+end[2];
    //red
  }
}

class Card extends React.Component {
  
  render() {
    var tmp=this.props.duedate;
    return (
      <div className="taskcard">

      <h4>{this.props.name}
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="17" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg>
      </h4> 
      
      <h5><svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16">
        <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
      </svg>
      {diff(tmp)}</h5>
      <h5>{this.props.tags}</h5>
      <img id="avatar" src={avatar} title="avatar" width="30" height="30"></img>
    </div>
    );
  }
}

export default Card;