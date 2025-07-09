import React from 'react';
import './ContentVideo.css'; // We'll create this next

// This component takes the video file as a 'prop' to make it reusable
function ContentVideo({ videoSrc }) {
  return (
    <div className="content-video-container">
      <video className="content-video" src={videoSrc} controls>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default ContentVideo;