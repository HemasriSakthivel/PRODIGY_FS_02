import React from 'react';
import AddEmployee from './components/AddEmployee';
import ViewEmployees from './components/ViewEmployees';

function App() {
  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <AddEmployee />
      <ViewEmployees />
    </div>
  );
}

export default App;
