import React from 'react';
import { Link } from 'react-router-dom';
import './Kitchen.css';

const WhatWeDo = () => (
  <div id="what" className="what-we-do">
    <h2>Chef PePe's Kitchen</h2>
    <div className="What-services">
      <div className="What-service">
        <img src="/images/Human.png" alt="Chef Pepe Logo" className="what-logo" />
        <h3>Humanely Raised</h3>
        <Link to="/chicken-recipe">
          <p>We believe Fairness for all</p>
        </Link>
      </div>
      <div className="What-service">
        <img src="/images/Organic.png" alt="Chef Pepe Logo" className="what-logo" />
        <h3>Fed Organic Diets</h3>
        <Link to="/deserts-recipe">
          <p>We Appreciate our Chefs of all levels</p>
        </Link>
      </div>
      <div className="What-service">
        <img src="/images/Care.png" alt="Chef Pepe Logo" className="what-logo" />
        <h3>Processed with Care</h3>
       <Link to="/appetizers-recipe">
        <p>We Bring back to our families the Wealth of a Recipe</p>
        </Link>
      </div>
      <div className="What-service">
        <img src="/images/Fresh.png" alt="Chef Pepe Logo" className="what-logo" />
        <h3>Delivered Fresh</h3>
       <Link to="/drinks-recipe">
        <p>Using our formula, will bring many to come together to enjoy seasons of life</p>
        </Link>
      </div>
    </div>
  </div>
);

export default WhatWeDo;