import React from 'react';


class Card extends React.Component {
  render() {
    return (
      <div className="taskcard">
      <h3>{this.props.name}</h3>
      <h4>{this.props.duedate}</h4>
      <h4>{this.props.ownid}</h4>
      <h4>{this.props.status}</h4>
      <h4>{this.props.tags}</h4>
      <h4>{this.props.tags}</h4>
    </div>
    );
  }
}

export default Card;