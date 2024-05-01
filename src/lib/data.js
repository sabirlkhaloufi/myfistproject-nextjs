const { Post, User } = require("./models");
const connectToDb = require("./utils");

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find(slug);
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (userId) => {
  try {
    connectToDb();
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.log(error);
  }
};
