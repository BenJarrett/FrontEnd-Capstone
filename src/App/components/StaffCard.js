import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Card,
  Button,
  CardTitle,
  CardBody,
  CardSubtitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { removeStaffMember } from '../../helpers/data/staffData';
import StaffForm from './StaffForm';

const StaffCard = ({
  firebaseKey,
  staff,
  setStaff,
  admin
}) => {
  const [editing, setEditing] = useState(false);
  console.warn(firebaseKey);
  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        removeStaffMember(fbKey)
          .then(setStaff);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('No Staff Members');
    }
  };
  const editView = (fbKey) => (
    <div>
      <Button style={{ backgroundColor: '#252323', margin: '10px', textAlign: 'left' }} onClick={() => handleClick(fbKey, 'delete')}>Remove Staff Member</Button>
      <Button style={{ backgroundColor: '#70798C' }} onClick={() => handleClick(fbKey, 'edit')}>
        {editing ? 'Close Form' : 'Edit Employee Information'}
      </Button>
    </div>
  );
  return (
    staff.map((staffInfo) => (
        <Card
        key={staffInfo.firebaseKey}>
          <CardBody>
         <CardTitle tag="h5">First Name: {staffInfo.first_name}</CardTitle>
         <CardTitle tag="h5"> Last Name: {staffInfo.lastName}</CardTitle>
         <hr></hr>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Email: {staffInfo.email}</CardSubtitle>
         <CardTitle tag="h5">Title: {staffInfo.title}</CardTitle>
         <hr></hr>
         </CardBody>
         <img width="100%" src={staffInfo.image} className="photo" alt="Card image cap" />
         <CardBody>
         { admin && editView(staffInfo.firebaseKey) }
         {
         editing && <StaffForm
         formTitle='Edit Staff Member'
         firebaseKey={staffInfo.firebaseKey}
         first_name={staffInfo.first_name}
         lastName={staffInfo.lastName}
         title={staffInfo.title}
         email={staffInfo.email}
         setStaff={setStaff}
         />
         }
         </CardBody>
         </Card>
    ))
  );
};

StaffCard.propTypes = {
  firebaseKey: PropTypes.string,
  staff: PropTypes.array,
  image: PropTypes.string,
  first_name: PropTypes.string,
  lastName: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  admin: PropTypes.any,
  setStaff: PropTypes.func,

};
export default StaffCard;
