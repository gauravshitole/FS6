// ChildComponent.jsx
import React from 'react';

const ChildComponent = (props) => {
  const uppercaseName = props.name.toUpperCase();

  return (
    <div>
      {/* <h2>Child Component</h2> */}
      <p>My name is {uppercaseName}</p>
    </div>
  );
};

export default ChildComponent;
