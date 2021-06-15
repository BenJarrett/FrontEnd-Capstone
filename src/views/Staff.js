import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import ProudctsCard from '../App/components/ProductCard';
import { getStaffList } from '../helpers/data/staffData';
import StaffCard from '../App/components/StaffCard';
// import StaffPickCard from '../App/components/StaffPickCard';
// import { useState } from 'react';

function staffMembers({
  firebaseKey,
  image,
  email,
  // eslint-disable-next-line camelcase
  first_Name,
  lastName,
  title
}) {
  const [staff, setStaff] = useState([]);
  useEffect(() => {
    getStaffList().then((response) => setStaff(response));
  }, []);
  return (
    <div className="this">
    <h1>Staff Members</h1>
      <div className="card-container">
       <StaffCard
       firebaseKey={firebaseKey}
       image={image}
       email={email}
       // eslint-disable-next-line camelcase
       first_Name={first_Name}
       lastName={lastName}
       title={title}
       staff={staff}
       setStaff={setStaff}
       />
       </div>
     </div>
  );
}

staffMembers.propTypes = {
  firebaseKey: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string,
  first_Name: PropTypes.string,
  lastName: PropTypes.string,
  title: PropTypes.string,
  staff: PropTypes.array,
  setStaff: PropTypes.func
};

export default staffMembers;
