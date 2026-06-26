import React from 'react';

export default function Reviews() {
  return (
    <div className="dashboard-content">
      <div className="page-header">
        <h1>Reviews</h1>
        <p>Manage product reviews.</p>
      </div>
      <div className="card" style={{marginTop: '2rem'}}>
        <div className="card-header">
            <h2>Recent Reviews</h2>
        </div>
        <div className="chart-placeholder">
            No reviews yet.
        </div>
      </div>
    </div>
  );
}
