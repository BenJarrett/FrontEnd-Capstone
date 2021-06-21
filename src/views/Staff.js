import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getStaffList } from '../helpers/data/staffData';
import StaffCard from '../App/components/StaffCard';

function staffMembers({
  admin
}) {
  const [staff, setStaff] = useState([]);
  useEffect(() => {
    getStaffList().then((response) => setStaff(response));
  }, []);

  return (
    <div className="this">
    <h1>Staff Members</h1>
      <div className="card-container">
        {staff.map((productInfo) => (
       <StaffCard
       key={productInfo.firebaseKey}
       firebaseKey={productInfo.firebaseKey}
       image={productInfo.image}
       email={productInfo.email}
       firstName={productInfo.firstName}
       lastName={productInfo.lastName}
       title={productInfo.title}
       admin={admin}
       staff={staff}
       setStaff={setStaff}
       />
        ))}
       </div>
     </div>
  );
}

staffMembers.propTypes = {
  admin: PropTypes.any
};

export default staffMembers;
