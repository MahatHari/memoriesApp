import axios from 'axios';

const url = 'http://localhost:8000/posts';
export const fetchPosts = async () => {
  const { data, status } = await axios.get(url);
  if (status === 200) {
    console.log(data);
    return data.data;
  } else {
    return;
  }
};

export const createPost = (newPost) => {
  return axios.post(url, newPost);
};
