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
  // eslint-disable-next-line camelcase
  first_name,
  image,
  title,
  email,
  lastName,
  setStaff,
  firebaseKey,

}) => {
  const [staffMember, setStaffMember] = useState({
    // eslint-disable-next-line camelcase
    first_name: first_name || '',
    image: image || '',
    title: title || '',
    email: email || '',
    lastName: lastName || '',
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
          <Label for="first_name">First Name:</Label>
          <Input
            name='first_name'
            id='first_name'
            value={staffMember.first_name}
            type='text'
            placeholder='Enter the First Name of the Employee'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="image">Image:</Label>
          <Input
            name='image'
            id='image'
            value={staffMember.image}
            type='url'
            placeholder='Image of Staff Member'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="lastName">Last Name:</Label>
          <Input
            name='lastName'
            id='lastName'
            value={staffMember.lastName}
            type='text'
            placeholder='Enter the Last Name of the Employee'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="email">Staff Member Email:</Label>
          <Input
            name='email'
            id='email'
            value={staffMember.email}
            type='text'
            placeholder='Add Employee Email'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="title">Staff Member Title:</Label>
          <Input
            name='title'
            id='title'
            value={staffMember.title}
            type='text'
            placeholder='Add Title of Staff Member'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="adminAccess">Admin Access:</Label>
          <Input
            name='adminAccess'
            id='adminAccess'
            value={staffMember.adminAccess}
            type='checkbox'
            placeholder='Give this Employee Admin rights? '
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

StaffForm.propTypes = {
  first_name: PropTypes.string.isRequired,
  image: PropTypes.string,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  adminAccess: PropTypes.string,
  email: PropTypes.string,
  firebaseKey: PropTypes.string,
  setStaff: PropTypes.func,
};

export default StaffForm;
