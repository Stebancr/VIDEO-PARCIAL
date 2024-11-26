// HomePage.jsx
import React, { useEffect, useState } from 'react';
import videoService from '../services/videoService';
import VideoCard from '../components/VideoCard.jsx';
import '../components/Styles/form.css';
import '../components/Styles/VideoCard.css';

const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    videoService.getVideos()
      .then(response => { setVideos(response); console.log(response); })
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div className="home-page">
      <div className="video-grid">
        {videos.map(video => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
