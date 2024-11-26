import React, { useState } from 'react';
import axios from 'axios';
import '../components/Styles/Upload.css';
import videoService from '../services/videoService.js';

const UploadPage = () => {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('thumbnail', thumbnail);
    formData.append('video', video);
    formData.append('user',JSON.parse(localStorage.getItem('user'))._id)
    
    try {
      const response = await videoService.uploadVideo (formData);
      setMessage('Video uploaded successfully!');
    } catch (error) {
      setMessage('Failed to upload video.');
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Video</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Titulo:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Portada:</label>
        <input
          type="file"
          onChange={(e) => setThumbnail(e.target.files[0])}
          required
        />
        <label>Video:</label>
        <input
          type="file"
          onChange={(e) => setVideo(e.target.files[0])}
          required
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadPage;
