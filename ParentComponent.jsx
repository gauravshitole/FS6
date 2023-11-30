// ParentComponent.jsx
import React from 'react';
import ChildComponent from '../ChildComponent/ChildComponent';

const ParentComponent = () => {
  const name = 'John'; // You can change this value

  return (
    <div>
      {/* <h1>Parent Component</h1> */}
      <ChildComponent name={name} />
    </div>
  );
};

export default ParentComponent;
