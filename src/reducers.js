import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import home from 'containers/Home/reducer';
import tagPost from 'containers/TagPost/reducer';
import article from 'containers/Article/reducer';
import dashboard from 'containers/Dashboard/reducer';

export default asyncReducers =>
  combineReducers({
    home,
    tagPost,
    article,
    dashboard,
    routing: routerReducer,
    ...asyncReducers,
  });
