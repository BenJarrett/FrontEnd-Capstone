import React from 'react';
import { Button } from 'reactstrap';

export default function ClickHere() {
  return (
      <div className="mission-image">
        <div className="mission-text">
          <h2>Get Started</h2>
        <h4>Click here to get started</h4>
        </div>
        <div className="home-page-button">
        <Button href='/all-products'> See Complete Catalog</Button>
        </div>
      </div>
  );
}
