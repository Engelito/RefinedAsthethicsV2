
import ProductCard from '../ProductCard';
import "./Merch.css"

// Import your product images
import tshirtImage from '../assets/tshirt_884653-858.jpg'; // Example image
import shakerImage from '../assets/tshirt_884653-858.jpg'; // Example image
import hoodieImage from '../assets/tshirt_884653-858.jpg'; // Example image
import hatImage from '../assets/tshirt_884653-858.jpg';
import tanktopImage from '../assets/tshirt_884653-858.jpg';
import leggingsImage from '../assets/tshirt_884653-858.jpg';

// Array of your merchandise data
const merchData = [
  { image: tshirtImage, title: 'Refined Classic T-Shirt', price: '$29.99' },
  { image: shakerImage, title: 'Aesthetics Shaker Bottle', price: '$14.99' },
  { image: hoodieImage, title: 'Performance Hoodie', price: '$59.99' },
  { image: hatImage, title: 'Signature Snapback', price: '$24.99' },
  { image: tanktopImage, title: 'Men\'s Performance Tank', price: '$27.99' },
  { image: leggingsImage, title: 'Women\'s Sculpt Leggings', price: '$49.99' },
];
function MerchPage() {
  return (
    <div className="merch-page-container">
      <h1>Merchandise</h1>
      <div className="merch-grid">
        {merchData.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default MerchPage;