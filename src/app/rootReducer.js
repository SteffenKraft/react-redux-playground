import { combineReducers } from 'redux';

import posts from '../routes/gallery/galleryReducer';
import comments from '../routes/single/singleReducer';

const rootReducer = combineReducers({posts, comments});

export default rootReducer;
