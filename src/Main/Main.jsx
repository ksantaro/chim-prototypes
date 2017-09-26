import React, { Component } from 'react';
import Alert from '../Alert/Alert';

const missedDeadlines = [
  {task: '4', date: '9/25/2017', client: 'Client 1', student: 'Student 2', href: '4'},
  {task: '1', date: '9/22/2017', client: 'Client 1', student: 'Studnet 2', href: '1'},
  {task: '2', date: '9/23/2017', client: 'Client 2', student: 'Student 1', href: '2'},
  {task: '3', date: '9/24/2017', client: 'Client 2', student: 'Student 1', href: '3'}
];

const red = '#dd5555';
const yellow = 'rgb(241, 202, 40)';
const green = 'rgb(37, 162, 103)';
const black = 'black';
const white = 'white';

class Main extends Component {
  render () {
    return (
      <div>
        <div style={{backgroundColor: 'rgb(6, 64, 106)', textAlign: 'center', color: 'white', padding: '12px'}}>
          NavBar
        </div>
        <Alert
          missedDeadlines={missedDeadlines}
          mainColor={red}
          titleColor={white}
        />
        <Alert
          missedDeadlines={missedDeadlines}
          mainColor={yellow}
          titleColor={black}
        />
        <Alert
          missedDeadlines={missedDeadlines}
          mainColor={green}
          titleColor={white}
        />
      </div>
    );
  }
}

export default Main;
