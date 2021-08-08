import * as api from '../api';

//ACTION CREATORS
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    // const action = { type: 'FETCH_ALL', payload: data };
    // dispacth(action);

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: 'CREATE', payload: data });
  } catch (e) {
    console.log(e);
  }
};
