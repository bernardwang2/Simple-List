import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionRedicer from './SelectionReducer';
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionRedicer
});