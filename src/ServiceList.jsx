// src/components/ServiceList.jsx

import React from 'react';
import './ServiceList.css';

// The data stays in one main array for easy management
const services = [
  { name: 'Base Workout Plan', price: '$60', description: 'Receive a structured weekly program with regular check-ins and adjustments, including new cycles every 4-8 weeks to ensure progressive overload and proper technique.' },
  { name: 'Base Nutrition Plan', price: '$60', description: 'Get a straightforward, macro-based diet focusing on healthy fats, proteins, and carbohydrates to optimize recovery, muscle growth, and fat loss. ' },
  { name: 'Refined Nutrition & Workout Program', price: '$120', description: 'This comprehensive package combines the benefits of both the Base Workout and Base Nutrition plans for integrated fitness and dietary support.' },
  { name: 'Refined Competition Prep', price: '$150 - $350', description: 'Benefit from daily check-ins, 1-2 weekly one-on-one posing sessions (increasing in frequency pre-show), and a tailored workout program designed for cardiovascular health, muscle recovery, and achieving peak stage conditioning.' },
  { name: 'Refined Reverse Program', price: '$100 - $150', description: 'Following competition, this 6-week program provides expert dietary guidance for healthy body fat restoration, a workout plan prioritizing muscle anabolism, and a review of blood work and supplement recommendations.' },
  { name: 'Refined Rehab Programs', price: '$80', description: 'Specialized nutrition and exercise plans, including in-depth stretching and strengthening of supportive muscles, are designed to aid injury recovery.' },
  { name: 'One on One posing session', price: '$30 a session', description: '...' },
];


const ServiceList = () => {
  // Filter services into two groups
  const refinedServices = services.filter(service => service.name.includes('Refined'));
  const baseServices = services.filter(service => !service.name.includes('Refined'));

  return (
    <div className="service-list-container">
      <h2 className="service-list-title">Services Provided</h2>

      {/* --- Base Services Group --- */}
      <h3 className="service-group-title">Base Services</h3>
      <ul className="service-list">
        {baseServices.map((service) => (
          <li key={service.name} className="service-item">
            <div className="service-header">
              <h4 className="service-name">{service.name}</h4>
              <span className="service-price">{service.price}</span>
            </div>
            {service.description && <p className="service-description">{service.description}</p>}
          </li>
        ))}
      </ul>

      {/* --- Refined Services Group --- */}
      <h3 className="service-group-title">Refined Aesthetics Premium Services</h3>
      <ul className="service-list">
        {refinedServices.map((service) => (
          <li key={service.name} className="service-item">
            <div className="service-header">
              <h4 className="service-name">{service.name}</h4>
              <span className="service-price">{service.price}</span>
            </div>
            {service.description && <p className="service-description">{service.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;