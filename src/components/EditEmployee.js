import React, { useState } from 'react';
import { updateEmployee } from '../api';

function EditEmployee({ employee }) {
  const [name, setName] = useState(employee.name);
  const [position, setPosition] = useState(employee.position);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(employee.id, { name, position });
      alert('Employee updated successfully');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditEmployee;
