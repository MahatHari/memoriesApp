import PostMessage from '../models/postMessage.js';
export const getPost = async (req, res, next) => {
  try {
    const postMeessages = await PostMessage.find();
    res.status(200).json({
      status: 'sucess',
      data: {
        data: postMeessages,
      },
    });
  } catch (e) {
    res.status(404).json({
      status: 'failure',
      message: e.message,
    });
  }
};

export const createPost = async (req, res, next) => {
  const post = req.body;
  const newPost = await PostMessage.create(post);
  try {
    res.status(200).json({
      status: 'sucess',
      data: {
        data: newPost,
      },
    });
  } catch (e) {
    res.status(404).json({
      status: 'failure',
      message: e.message,
    });
  }
};
