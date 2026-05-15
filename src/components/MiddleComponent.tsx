import React from 'react';
import Card from './Card';

function MiddleComponent() {
  return (
    <div className="middle-component">
      <h1>Featured Car Models</h1>
      <div className="cards">
        <Card title="Model 1" description="This is model 1" />
        <Card title="Model 2" description="This is model 2" />
        <Card title="Model 3" description="This is model 3" />
      </div>
    </div>
  );
}

export default MiddleComponent;