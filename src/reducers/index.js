import { combineReducers } from 'redux';
import user from './user';
import rooms from './rooms';
import currentRoom from './currentRoom';

const reducers = combineReducers({
  currentRoom,
  rooms,
  user
});

export default reducers;
