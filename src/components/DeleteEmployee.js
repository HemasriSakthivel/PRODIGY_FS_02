import React from 'react';
import { deleteEmployee } from '../api';

function DeleteEmployee({ id }) {
  const handleDelete = async () => {
    try {
      await deleteEmployee(id);
      alert('Employee deleted successfully');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteEmployee;
