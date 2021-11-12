import React, { useState } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardBody,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { removeStaffMember } from '../../helpers/data/staffData';
import StaffForm from './StaffForm';
import { updateAdmin, updateAdminAccess } from '../../helpers/data/userData';

const StaffCard = ({
  firebaseKey,
  setStaff,
  admin,
  fullName,
  profileImage,
  adminAccess
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
      case 'admin':
        updateAdmin(fbKey).then(() => {
          const adminObj = { adminAccess: true };
          // eslint-disable-next-line
          window.alert('Access Granted!');
          updateAdminAccess(fbKey, adminObj);
          // eslint-disable-next-line
        });
        break;
      case 'lose-admin':
        updateAdmin(fbKey).then(() => {
          const adminObj = { adminAccess: false };
          // eslint-disable-next-line
          window.alert('Access Revoked!');
          updateAdminAccess(fbKey, adminObj);
          // eslint-disable-next-line
        });
        break;
      default:
        // console.warn('No Staff Members');
    }
  };
  const editView = (fbKey) => (
    <div className="staff-buttons">
      <Button style={{
        color: 'black', backgroundColor: 'transparent', margin: '2px', border: 'transparent',
      }} onClick={() => handleClick(fbKey, 'edit')}>
        {editing ? 'Close Form' : <i className="fas fa-pencil-alt"></i>}
      </Button>
      <Button style={{
        color: 'black', backgroundColor: 'transparent', margin: '2px', border: 'transparent',
      }} onClick={() => handleClick(fbKey, 'delete')}><i className="fas fa-user-slash"></i></Button>
      <Button style={{
        color: 'black', backgroundColor: 'transparent', margin: '2px', border: 'transparent',
      }} onClick={() => handleClick(fbKey, 'admin')}><i className="fas fa-unlock"></i></Button>
      <Button style={{
        color: 'black', backgroundColor: 'transparent', margin: '2px', border: 'transparent',
      }} onClick={() => handleClick(fbKey, 'lose-admin')}><i className="fas fa-lock"></i></Button>
    </div>

  );
  return (
        <Card>
          <CardBody>
         <CardTitle className="staffCardTitle" tag="h5">{fullName}</CardTitle>
         <hr></hr>
         </CardBody>
         <img width="100%" src={profileImage} className="photo" alt="Card image cap" />
         <CardBody>
         <hr></hr>
         { admin && editView(firebaseKey) }
         {
         editing && <StaffForm
         formTitle='Edit Staff Member'
         firebaseKey={firebaseKey}
         fullName={fullName}
         profileImage={profileImage}
         admin={admin}
         adminAccess={adminAccess}
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
  adminAccess: PropTypes.bool,
  setStaff: PropTypes.func,

};
export default StaffCard;
