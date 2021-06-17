import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Card,
  Button,
  CardTitle,
  // CardLink,
  CardBody,
  CardSubtitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addStaffMember, removeStaffMember } from '../../helpers/data/staffData';
import StaffForm from './StaffForm';

const StaffCard = ({
  firebaseKey,
  staff,
  setStaff
}) => {
  const [editing, setEditing] = useState(false);
  // const history = useHistory();
  console.warn(firebaseKey);
  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        removeStaffMember(fbKey)
          .then(setStaff);
        break;
      case 'add':
        addStaffMember(fbKey)
          .then(setStaff);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('No Projects');
    }
  };
  const editView = (fbKey) => (
    <div>
      <Button style={{ backgroundColor: '#252323', margin: '10px', textAlign: 'left' }} onClick={() => handleClick(fbKey, 'add')}>Add Staff Member</Button>
      <Button style={{ backgroundColor: '#252323', margin: '10px', textAlign: 'left' }} onClick={() => handleClick(fbKey, 'delete')}>Remove Staff Member</Button>
      <Button style={{ backgroundColor: '#70798C' }} onClick={() => handleClick(fbKey, 'edit')}>
        {editing ? 'Close Form' : 'Edit Product'}
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
         { editView(staffInfo.firebaseKey) }
         {
         editing && <StaffForm
         formTitle='Edit Staff Member'
         setStaff={setStaff}
         firebaseKey={staffInfo.firebaseKey}
         first_name={staffInfo.first_name}
         lastName={staffInfo.lastName}
         title={staffInfo.title}
         email={staffInfo.email}
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
  setStaff: PropTypes.func,
  image: PropTypes.string,
  first_name: PropTypes.string,
  lastName: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string
};
export default StaffCard;
