import { useState } from 'react';
import youtube from '../api/youtube';

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  const search = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: { part: 'snippet', q: searchTerm, type: 'video' }
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
