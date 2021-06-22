import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Card,
  Button,
  CardTitle,
  CardBody,
  // CardSubtitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { removeStaffMember } from '../../helpers/data/staffData';
import StaffForm from './StaffForm';

const StaffCard = ({
  firebaseKey,
  setStaff,
  admin,
  fullName,
  profileImage
}) => {
  const [editing, setEditing] = useState(false);

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
         <CardTitle tag="h5">{fullName}</CardTitle>
         <hr></hr>
         </CardBody>
         <img width="100%" src={profileImage} className="photo" alt="Card image cap" />
         <CardBody>
         { admin && editView(firebaseKey) }
         {
         editing && <StaffForm
         formTitle='Edit Staff Member'
         firebaseKey={firebaseKey}
         fullName={fullName}
         profileImage={profileImage}
         admin={admin}
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
  profileImage: PropTypes.string,
  fullName: PropTypes.string,
  admin: PropTypes.any,
  setStaff: PropTypes.func,

};
export default StaffCard;
