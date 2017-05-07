import { createStore, compose } from 'redux';

// import the root reducer
import rootReducer from './rootReducer';

import comments from '../data/comments';
import posts from '../data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments
};

let store = createStore(rootReducer, defaultState, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store;
