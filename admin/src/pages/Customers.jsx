import React from 'react';

export default function Customers() {
  return (
    <div className="dashboard-content">
      <div className="page-header">
        <h1>Customers</h1>
        <p>Manage your customer base.</p>
      </div>
      <div className="card" style={{marginTop: '2rem'}}>
        <div className="card-header">
            <h2>Customer List</h2>
        </div>
        <div className="chart-placeholder">
            No customers found.
        </div>
      </div>
    </div>
  );
}
