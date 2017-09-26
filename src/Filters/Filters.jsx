import React, { Component } from 'react';
import Select from 'react-select';

import SelectValue from './SelectValue';
import 'react-select/dist/react-select.css';
import './Filters.css';

class Filters extends Component {
  constructor (props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.logChange = this.logChange.bind(this);
    this.state = {
      clients: [{label: 'client 1', value: 0}, {label: 'client 2', value: 1}, {label: 'client 3', value: 2}],
      selectedClients: []
    };
  }
  onChange (selectedClients) {
    console.log(this.clients)
    this.setState({clients: this.clients || []});
  }

  logChange(val) {
    this.setState({selectedClients: val});
  }

  render () {
  const clients = this.state.clients.splice(0);
  // const options = members.map((member, index) =>
  // <Member
  //   display={false}
  //   key={index + "member"}
  //   title={member.member}
  //   id={index}
  //   cardInfo={{listIndex, cardIndex}}
  //   handleCardAddMember={cardEventHandlers.handleCardAddMember}
  //   handleCardDeleteMember={cardEventHandlers.handleCardDeleteMember}
  // />
  // );
  //  console.log(selClients, unSelClients);
    return (
      <div className='Filters-Container'>
        
      </div>
    );
  }
}

// Filters.propTypes = {
//   margin: PropTypes.array,
// };

export default Filters;
