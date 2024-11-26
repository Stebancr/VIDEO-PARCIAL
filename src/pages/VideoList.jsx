import React, {useState, useEffect} from 'react';
import '../components/Styles/VideoList.css';
import '../components/Styles/VideoCard.css';
import videoService from '../services/videoService';
import { useSearchParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import '../components/Styles/form.css'
import '../App.css'


const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const [search, setSearch] = useSearchParams('');
  useEffect(() => {
    videoService.getVideos(search)
      .then(response => {setVideos(response);console.log(response)})
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

export default VideoList;
