import { combineReducers } from 'redux';
import postReducer from './PostReducer';

export default combineReducers({
    postReducer: postReducer
});