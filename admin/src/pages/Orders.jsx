import React from 'react';

export default function Orders() {
  return (
    <div className="dashboard-content">
      <div className="page-header">
        <h1>Orders</h1>
        <p>Manage your customer orders here.</p>
      </div>
      <div className="card" style={{marginTop: '2rem'}}>
        <div className="card-header">
            <h2>Order List</h2>
        </div>
        <div className="chart-placeholder">
            No orders found.
        </div>
      </div>
    </div>
  );
}
