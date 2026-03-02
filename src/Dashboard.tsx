import React, { useState, useEffect } from 'react';
import { AiOutlinePieChart, AiOutlineLineChart } from 'lucide-react';
import './Dashboard.css';

function Dashboard() {
  const [watchCollection, setWatchCollection] = useState([]);
  const [marketTrends, setMarketTrends] = useState([]);

  useEffect(() => {
    // API calls to fetch watch collection and market trends
  }, []);

  return (
    <div className="dashboard">
      <h1>Watch Collection</h1>
      <div className="collection">
        {watchCollection.map((watch) => (
          <div key={watch.id} className="watch">
            <h2>{watch.brand} {watch.model}</h2>
            <p>Reference Number: {watch.referenceNumber}</p>
            <p>Year of Production: {watch.yearOfProduction}</p>
            <p>Condition: {watch.condition}</p>
          </div>
        ))}
      </div>
      <h1>Market Trends</h1>
      <div className="trends">
        <div className="chart">
          <AiOutlinePieChart size={50} />
          <h2>Pie Chart</h2>
        </div>
        <div className="chart">
          <AiOutlineLineChart size={50} />
          <h2>Line Chart</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;