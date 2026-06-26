import React from 'react';

export default function Analytics() {
  return (
    <div className="dashboard-content">
      <div className="page-header">
        <h1>Analytics</h1>
        <p>Detailed performance metrics.</p>
      </div>
      <div className="card" style={{marginTop: '2rem'}}>
        <div className="card-header">
            <h2>Traffic & Sales</h2>
        </div>
        <div className="chart-placeholder">
            Analytics data unavailable.
        </div>
      </div>
    </div>
  );
}
