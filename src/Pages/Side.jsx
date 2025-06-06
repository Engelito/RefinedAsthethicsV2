import relatableImage from '../assets/clientSidePic.JPG';
import '../PainPoints.css';
// A simple checkmark icon component. We can reuse this.
const CheckIcon = () => (
  <svg
    className="pain-point-list-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

function PainPoints() {
  return (
     <section className="pain-points-section">
      <div className="pain-points-container">
        {/* Image Column */}
        <div className="pain-points-image-wrapper">
          <img src={relatableImage} alt="Person contemplating their career path" className="pain-points-image" />
        </div>

        {/* Text Content Column */}
        <div className="pain-points-content-wrapper">
          <h2 className="pain-points-headline">Does This Sound Familiar?</h2>
          <ul className="pain-points-list">
            <li className="pain-point-list-item">
              <CheckIcon />
              {/* CORRECTED: Using <strong> for bold text instead of Markdown */}
              <span>You feel <strong>stuck in your career</strong>, knowing you're capable of more.</span>
            </li>
            <li className="pain-point-list-item">
              <CheckIcon />
              <span><strong>Work-life balance</strong> feels like a myth, and burnout is just around the corner.</span>
            </li>
            <li className="pain-point-list-item">
              <CheckIcon />
              <span>You struggle with <strong>imposter syndrome</strong> and leading with true confidence.</span>
            </li>
             <li className="pain-point-list-item">
              <CheckIcon />
              <span>You have goals, but <strong>lack the clarity and roadmap</strong> to achieve them.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PainPoints;