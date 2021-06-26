import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import { addStaffMember, updateStaffMember } from '../../helpers/data/staffData';

const StaffForm = ({
  fullName,
  profileImage,
  setStaff,
  firebaseKey,

}) => {
  const [staffMember, setStaffMember] = useState({
    fullName: fullName || '',
    profileImage: profileImage || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setStaffMember((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (staffMember.firebaseKey) {
      updateStaffMember(staffMember).then((staffMemberArray) => setStaff(staffMemberArray));
    } else {
      addStaffMember(staffMember).then((staffMemberArray) => setStaff(staffMemberArray));
    }
  };

  return (
    <div className='Form'>
    <Form id='addStaffMemberForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>Staff Form: </h2>
        <FormGroup>
          <Label for="fullName">Name:</Label>
          <Input
            name='fullName'
            id='full'
            value={staffMember.fullName}
            type='text'
            placeholder='Enter the First Name of the Employee'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="profileImage">Image:</Label>
          <Input
            name='profileImage'
            id='profileImage'
            value={staffMember.profileImage}
            type='url'
            placeholder='Image of Staff Member'
            onChange={handleInputChange}
          />
        </FormGroup>
        <div className="submit-icon">
        <Button style={{
          color: 'black', backgroundColor: 'transparent', margin: '2px', border: 'transparent',
        }} type='submit'><i className="fas fa-check-double"></i></Button>
        </div>
      </Form>
    </div>
  );
};

StaffForm.propTypes = {
  fullName: PropTypes.string.isRequired,
  profileImage: PropTypes.string,
  adminAccess: PropTypes.string,
  firebaseKey: PropTypes.string,
  setStaff: PropTypes.func,
};

export default StaffForm;
