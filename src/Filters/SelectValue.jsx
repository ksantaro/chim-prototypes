import React from 'react';

const SelectValue = (props) => {
  const client = props.value.name;
  return (
    <div className="assignee-select-value">
      <p>{client}</p>
    </div>
  );
};

export default SelectValue;