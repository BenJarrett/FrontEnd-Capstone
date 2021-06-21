import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import ProudctsCard from '../App/components/ProductCard';
import { getChosenStaffPicks } from '../helpers/data/productsData';
import StaffPickCard from '../App/components/StaffPickCard';
// import { useState } from 'react';

function ChosenStaffPicks({
  admin,
}) {
  const [staffPicks, setStaffPicks] = useState([]);
  useEffect(() => {
    getChosenStaffPicks().then((response) => setStaffPicks(response));
  }, []);
  return (
    <div className="this">
    <h1>Favorites from our Staff!</h1>
      <div className="card-container">
        {staffPicks.map((productInfo) => (
       <StaffPickCard
       key={productInfo.firebaseKey}
       firebaseKey={productInfo.firebaseKey}
       image={productInfo.image}
       price={productInfo.price}
       name={productInfo.name}
       admin={admin}
       setStaffPicks={setStaffPicks}
       staffPicks={staffPicks}
       />
        ))}
       </div>
     </div>
  );
}

ChosenStaffPicks.propTypes = {
  admin: PropTypes.any,
};

export default ChosenStaffPicks;
