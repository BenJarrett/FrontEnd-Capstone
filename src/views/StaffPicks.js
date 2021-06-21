import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import ProudctsCard from '../App/components/ProductCard';
import { getChosenStaffPicks } from '../helpers/data/productsData';
import StaffPickCard from '../App/components/StaffPickCard';
// import { useState } from 'react';

function ChosenStaffPicks({
  firebaseKey,
  image,
  price,
  name,
  admin
}) {
  const [staffPicks, setStaffPicks] = useState([]);
  useEffect(() => {
    getChosenStaffPicks().then((response) => setStaffPicks(response));
  }, []);
  return (
    <div className="this">
    <h1>Products</h1>
      <div className="card-container">
       <StaffPickCard
       firebaseKey={firebaseKey}
       image={image}
       price={price}
       name={name}
       admin={admin}
       setStaffPicks={setStaffPicks}
       staffPicks={staffPicks}
       />
       </div>
     </div>
  );
}

ChosenStaffPicks.propTypes = {
  firebaseKey: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
  admin: PropTypes.any,
  staffPicks: PropTypes.array,
  setStaffPicks: PropTypes.func
};

export default ChosenStaffPicks;
