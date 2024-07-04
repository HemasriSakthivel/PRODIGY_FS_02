import React, { useState } from 'react';
import { createEmployee } from '../api';

function AddEmployee() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEmployee({ name, position });
      setName('');
      setPosition('');
      alert('Employee added successfully');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployee;
