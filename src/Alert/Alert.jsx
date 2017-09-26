import React, { Component } from 'react';

import './Alert.css';

class Alert extends Component {
  constructor (props) {
    super(props);
    this.state = {
      
    };
    this.clickedLink = this.clickedLink.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  clickedLink (e) {
    //e.preventDefault();
    console.log(e);
  }
  closeAlert (e) {
    console.log('close alert');
  }

  render () {
    const mainColor = this.props.mainColor;
    const borderStyle = {borderColor: mainColor};
    const colorStyle = {color: mainColor};
    const titleStyle = {backgroundColor: mainColor, color: this.props.titleColor};
    const alertItemList = this.props.missedDeadlines.map((alertItem, index) =>
      <div className="alert-item">
        <span style={colorStyle}>!</span> <a href={alertItem.href} onClick={(e) => this.clickedLink(e)}>Task {alertItem.task}</a> past due on <b>{alertItem.date}</b> for {alertItem.client}. Assigned to {alertItem.student}.
      </div>
    );
    return (
      <div className="alert-container" style={borderStyle}>
        <div className="alert-title" style={titleStyle}>
          Alert: Missed Deadlines <span onClick={(e) => this.closeAlert(e)}>X</span>
        </div>
        <div className="alert-item-list">
          {alertItemList}
        </div>
      </div>
    );
  }
}

export default Alert;
