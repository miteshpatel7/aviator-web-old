import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isLoadingReducer } from './reducers/loadingReducer';
import { userDataReducer } from './reducers/userDataReducer';
import { isUserLoginReducer } from './reducers/loginReducer';
const middleware = [thunk];

const rootReducer = combineReducers({
  loading: isLoadingReducer,
  userData: userDataReducer,
  login:isUserLoginReducer,
});


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;
