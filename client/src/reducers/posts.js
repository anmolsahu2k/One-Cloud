import { CREATE, UPDATE, DELETE, FETCH_ONE, CLEAR } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ONE:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case CLEAR:
      return posts = [];
    default:
      return posts;
  }
};

