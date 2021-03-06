import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getChosenStaffPicks } from '../helpers/data/productsData';
import StaffPickCard from '../App/components/StaffPickCard';
import StaffPicksHeader from '../App/components/StaffPicksHeader';

function ChosenStaffPicks({
  admin,
  user
}) {
  const [staffPicks, setStaffPicks] = useState([]);
  useEffect(() => {
    getChosenStaffPicks().then((response) => setStaffPicks(response));
  }, []);
  return (
    <div className="this">
      <StaffPicksHeader/>
      <div className="card-container">
        {staffPicks.map((productInfo) => (
       <StaffPickCard
       key={productInfo.firebaseKey}
       firebaseKey={productInfo.firebaseKey}
       image={productInfo.image}
       price={productInfo.price}
       name={productInfo.name}
       sFAisle={productInfo.sFAisle}
       sFBay={productInfo.sFBay}
       sFLevel={productInfo.sFLevel}
       sFStock={productInfo.sFStock}
       wHAisle={productInfo.wHAisle}
       wHBay={productInfo.wHBay}
       wHLevel={productInfo.wHLevel}
       wHStock={productInfo.wHStock}
       admin={admin}
       user={user}
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
  user: PropTypes.any,
};

export default ChosenStaffPicks;
