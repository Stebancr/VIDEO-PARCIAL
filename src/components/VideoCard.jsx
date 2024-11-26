import React from 'react';
import './Styles/VideoCard.css';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} />
      <h3>{video.title}</h3>
      <p>
        Uploaded by <strong>{video.user.name}</strong> on{' '}
        {new Date(video.uploadedAt).toLocaleString()}
      </p>
      <a href={video.url} target="_blank" rel="noopener noreferrer">Watch Video</a>
    </div>
  );
};

export default VideoCard;
