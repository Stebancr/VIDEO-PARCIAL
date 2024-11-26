import axios from 'axios';

const API_URL = 'https://video-backend-mu.vercel.app/';

// Obtener todos los videos
const getVideos = async (title) => {
  let url = API_URL + 'api/videos/view/'
  if (title){url = url + `?title=${title}`}
  console.log(url)
  const response = await axios.get(url);
  console.log(response.data)
  return response.data;
};

// Subir un nuevo video
const uploadVideo = async (formData) => {
  console.log(formData)
  const response = await axios.post(API_URL + 'api/videos/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

const videoService = {
  getVideos,
  uploadVideo,
};

export default videoService;
