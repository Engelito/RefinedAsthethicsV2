import React from 'react';
import './ComparisonTable.css'; // We'll create this CSS file next


const servicesData = [
  {
    name: 'Base Workout Plan',
    price: '$60',
    priceDescription: 'per month',
    isPopular: false,
    features: {
      'Weekly Planning': true,
      'Weekly Check-ins and Adjustments': true,
      'Private Community Access': true,
      'Personalized Workout Plan': false,
      '1-on-1 Monthly Check-in': false,
      '24/7 Priority Support': false,
    },
  },
  {
    name: 'Pro',
    price: '$199',
    priceDescription: 'per month',
    isPopular: true,
    features: {
      'Weekly Planning': true,
      'Weekly Check-ins and Adjustments': true,
      'Private Community Access': true,
      'Personalized Workout Plan': true,
      '1-on-1 Monthly Check-in': true,
      '24/7 Priority Support': false,
    },
  },
  {
    name: 'Premium',
    price: '$299',
    priceDescription: 'per month',
    isPopular: false,
    features: {
      'Weekly Planning': true,
      'Weekly Check-ins and Adjustments': true,
      'Private Community Access': true,
      'Personalized Workout Plan': true,
      '1-on-1 Monthly Check-in': true,
      '24/7 Priority Support': true,
    },
  },
];

//Feature order

const featureOrder = [
  'Weekly Planning',
  'Weekly Check-ins and Adjustments',
  'Private Community Access',
  'Personalized Workout Plan',
  '1-on-1 Monthly Check-in',
  '24/7 Priority Support',
];

// We'll create the component next...
const ComparisonTable = () => {
  return (
    <div className="comparison-container">
      <table className="comparison-table">
        <thead>
          <tr>
            <th className="feature-header">Features</th>
            {servicesData.map((plan) => (
              <th key={plan.name} className={plan.isPopular ? 'popular' : ''}>
                {plan.isPopular && <span className="popular-badge">Most Popular</span>}
                <h2>{plan.name}</h2>
                <p className="price">{plan.price}</p>
                <p className="price-desc">{plan.priceDescription}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureOrder.map((feature) => (
            <tr key={feature}>
              <td>{feature}</td>
              {servicesData.map((plan) => (
                <td key={plan.name} className={plan.isPopular ? 'popular' : ''}>
                  <span className={plan.features[feature] ? 'checkmark' : 'cross'}>
                    {plan.features[feature] ? '✔' : '✖'}
                  </span>
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td></td>
            {servicesData.map((plan) => (
              <td key={plan.name} className={plan.isPopular ? 'popular' : ''}>
                <button className="cta-button">Choose Plan</button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;