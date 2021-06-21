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
  setStaff,
  admin,
  firstName,
  lastName,
  title,
  image,
  email
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
      case 'add-remove-admin-access':
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
      <Button style={{ backgroundColor: '#34653C', margin: '10px', textAlign: 'left' }}>Give Admin Access</Button>
    </div>
  );
  return (
        <Card>
          <CardBody>
         <CardTitle tag="h5">First Name: {firstName}</CardTitle>
         <CardTitle tag="h5"> Last Name: {lastName}</CardTitle>
         <hr></hr>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Email: {email}</CardSubtitle>
         <CardTitle tag="h5">Title: {title}</CardTitle>
         <hr></hr>
         </CardBody>
         <img width="100%" src={image} className="photo" alt="Card image cap" />
         <CardBody>
         { admin && editView(firebaseKey) }
         {
         editing && <StaffForm
         formTitle='Edit Staff Member'
         firebaseKey={firebaseKey}
         firstName={firstName}
         lastName={lastName}
         title={title}
         email={email}
         admin={admin}
         image={image}
         setStaff={setStaff}
         />
         }
         </CardBody>
         </Card>
  );
};

StaffCard.propTypes = {
  firebaseKey: PropTypes.string,
  staff: PropTypes.array,
  image: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  admin: PropTypes.any,
  setStaff: PropTypes.func,

};
export default StaffCard;
