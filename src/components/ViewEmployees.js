import React, { useEffect, useState } from 'react';
import { fetchEmployees } from '../api';
import EditEmployee from './EditEmployee';
import DeleteEmployee from './DeleteEmployee';

function ViewEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await fetchEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    getEmployees();
  }, []);

  return (
    <div>
      {employees.map((employee) => (
        <div key={employee.id}>
          {employee.name} - {employee.position}
          <EditEmployee employee={employee} />
          <DeleteEmployee id={employee.id} />
        </div>
      ))}
    </div>
  );
}

export default ViewEmployees;
