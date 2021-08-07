import * as api from '../api';

//ACTION CREATORS
export const getPosts = () => async (dispacth) => {
  try {
    const { data } = await api.fetchPosts();
    // const action = { type: 'FETCH_ALL', payload: data };
    // dispacth(action);
    dispacth({ type: 'FETCH_ALL', payload: data });
  } catch (e) {
    console.log(e);
  }
};
