import React from 'react';
import './Styles/VideoCard.css';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img src={video.thumbnailUrl} alt={video.title} className="video-thumbnail" />
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-author">{video.author}</p>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoCard;

