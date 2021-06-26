import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StaffCard from '../App/components/StaffCard';
import { getUsers } from '../helpers/data/userData';
import StaffHeader from '../App/components/StaffHeader';

function staffMembers({
  admin,
  user
}) {
  const [staff, setStaff] = useState([]);
  useEffect(() => {
    getUsers().then((response) => setStaff(response));
  }, []);

  return (
    <div className="this">
      <StaffHeader/>
      <div className="card-container">
        {staff.map((productInfo) => (
       <StaffCard
       key={productInfo.firebaseKey}
       firebaseKey={productInfo.firebaseKey}
       profileImage={productInfo.profileImage}
       fullName={productInfo.fullName}
       adminAccess={productInfo.adminAccess}
       user={user}
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
  admin: PropTypes.any,
  user: PropTypes.any
};

export default staffMembers;
