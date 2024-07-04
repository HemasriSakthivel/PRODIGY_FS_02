const pool = require('../db');

// Create Employee
const createEmployee = async (req, res) => {
  const { name, position } = req.body;
  const newEmployee = await pool.query(
    'INSERT INTO employees (name, position) VALUES ($1, $2) RETURNING *',
    [name, position]
  );
  res.json(newEmployee.rows[0]);
};

// Get Employees
const getEmployees = async (req, res) => {
  const allEmployees = await pool.query('SELECT * FROM employees');
  res.json(allEmployees.rows);
};

// Update Employee
const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, position } = req.body;
  const updatedEmployee = await pool.query(
    'UPDATE employees SET name = $1, position = $2 WHERE id = $3 RETURNING *',
    [name, position, id]
  );
  res.json(updatedEmployee.rows[0]);
};

// Delete Employee
const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM employees WHERE id = $1', [id]);
  res.json({ message: 'Employee deleted' });
};

module.exports = {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
};
