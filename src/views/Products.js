import React from 'react';
import ProudctsCard from '../App/components/ProductCard';

export default function GetProducts() {
  return (
    <div>
      <h1>You are on the all Products Page. This will be shown for anyone who visists the website, whether they are not a user, are a user, or an admin.
      </h1>
      < ProudctsCard />
    </div>
  );
}
