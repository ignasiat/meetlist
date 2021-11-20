import { combineReducers } from 'redux';
import heroes from './heroesReducer';

const rootReducer = combineReducers({
  heroes
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
