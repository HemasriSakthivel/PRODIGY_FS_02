import axios from 'axios';

const API_URL = 'http://localhost:5000/employees';

export const fetchEmployees = async () => {
  return axios.get(API_URL);
};

export const createEmployee = async (employee) => {
  return axios.post(API_URL, employee);
};

export const updateEmployee = async (id, employee) => {
  return axios.put(`${API_URL}/${id}`, employee);
};

export const deleteEmployee = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
