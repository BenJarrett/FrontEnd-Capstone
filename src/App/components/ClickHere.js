import React from 'react';
import { Button } from 'reactstrap';

export default function ClickHere() {
  return (
      <div className="mission-image">
        <div className="mission-text">
          <h2>Get Started</h2>
          <hr ></hr>
        <h4>Click here to view our procuct catalog!</h4>
        </div>
        <div className="home-page-button">
          <br />
        <Button href='/all-products'> See Complete Catalog</Button>
        </div>
      </div>
  );
}
