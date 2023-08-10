 import {configureStore} from 'redux'
 import rootReducers from './redux/action/reducer'

 const store = configureStore(rootReducers);

 export default store;
