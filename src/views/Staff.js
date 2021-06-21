import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getStaffList } from '../helpers/data/staffData';
import StaffCard from '../App/components/StaffCard';

function staffMembers({
  firebaseKey,
  image,
  email,
  admin,
  // eslint-disable-next-line camelcase
  first_name,
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
       first_name={first_name}
       lastName={lastName}
       title={title}
       admin={admin}
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
  admin: PropTypes.any,
  staff: PropTypes.array,
  setStaff: PropTypes.func
};

export default staffMembers;
