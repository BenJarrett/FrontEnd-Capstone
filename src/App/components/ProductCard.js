// import React, { useState } from 'react';
// // import { useHistory } from 'react-router-dom';
// import {
//   Card,
//   Button,
//   CardTitle,
//   // CardLink,
//   CardBody,
//   CardSubtitle
// } from 'reactstrap';
// import PropTypes from 'prop-types';
// import { deleteProduct } from '../../helpers/data/productsData';
// import ProductsForm from './ProductForm';

// const ProjectsCard = ({
//   firebaseKey,
//   projects,
//   setProjects,
//   admin
// }) => {
//   const [editing, setEditing] = useState(false);
//   // const history = useHistory();
//   console.warn(firebaseKey);
//   const handleClick = (fbKey, type) => {
//     switch (type) {
//       case 'delete':
//         deleteProduct(fbKey)
//           .then(setProjects);
//         break;
//       case 'edit':
//         setEditing((prevState) => !prevState);
//         break;
//       default:
//         console.warn('No Projects');
//     }
//   };
//   const editView = (fbKey) => (
//     <div>
//       <Button style={{ backgroundColor: '#252323', margin: '10px', textAlign: 'left' }} onClick={() => handleClick(fbKey, 'delete')}>Delete Product</Button>
//       <Button style={{ backgroundColor: '#70798C' }} onClick={() => handleClick(fbKey, 'edit')}>
//         {editing ? 'Close Form' : 'Edit Project'}
//       </Button>
//     </div>
//   );
//   return (
//     projects.map((productInfo) => (
//         <Card
//         key={productInfo.firebaseKey}>
//           <CardBody>
//          <CardTitle tag="h5">Project Name: {productInfo.name}</CardTitle>
//          <hr></hr>
//          <CardSubtitle tag="h6" className="mb-2 text-muted">Technologies Used: {productInfo.price}</CardSubtitle>
//          </CardBody>
//          <img width="100%" src={productInfo.image} className="photo" alt="Card image cap" />
//          <CardBody>
//          { admin && editView(productInfo.firebaseKey) }
//          {
//          editing && <ProductsForm
//          formTitle='Edit Project'
//          setProjects={setProjects}
//          firebaseKey={productInfo.firebaseKey}
//          githubUrl={productInfo.price}
//          screenshot={productInfo.imgage}
//          title={productInfo.name}
//          />
//          }
//          </CardBody>
//          </Card>
//     ))
//   );
// };

// ProjectsCard.propTypes = {
//   firebaseKey: PropTypes.string,
//   projects: PropTypes.array,
//   setProjects: PropTypes.func,
//   admin: PropTypes.any
// };
// export default ProjectsCard;
