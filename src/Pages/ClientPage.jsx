import React from 'react';
import ClientCard from './Clients.jsx';
import './ClientPage.css'; // We'll create this next

// --- IMPORT YOUR CLIENT IMAGES HERE ---
import client1Before from "../assets/Clients/001Before.png"
import client1After from "../assets/Clients/001After.png"
import client0Before from "../assets/Clients/000Before.png"
import client0After from "../assets/Clients/000After.png"
import client2Before from "../assets/Clients/002Before.png"
import client2After from "../assets/Clients/002After.png"


// Example:
// import client1Before from '../assets/client1-before.jpg';
// import client1After from '../assets/client1-after.jpg';

// Placeholder data - replace with your actual client info and images
const clientsData = [
  {
    beforeImage: client0Before,
    afterImage: client0After,
    name: 'Garrett Murdoch',
    testimonial: 'Working with Refined Aesthetics completely changed my perspective on fitness and discipline.',
  },
  {
    beforeImage: client1Before,
    afterImage: client1After,
    name: 'RJ Nichols',
    testimonial: 'Working with Refined Aesthetics completely changed my perspective on fitness and discipline.',
  },
  // Add more clients here
  {
    beforeImage: client2Before,
    afterImage: client2After,
    name: 'Mike Hepworth',
    testimonial: 'Working with Refined Aesthetics completely changed my perspective on fitness and discipline.',
  },
];

function ClientsPage() {
  return (
    <div className="clients-page-container">
      <h1>Client Transformations</h1>
      <div className="clients-grid">
        {clientsData.map((client, index) => (
          <ClientCard
            key={index}
            beforeImage={client.beforeImage}
            afterImage={client.afterImage}
            name={client.name}
            testimonial={client.testimonial}
          />
        ))}
      </div>
    </div>
  );
}

export default ClientsPage;