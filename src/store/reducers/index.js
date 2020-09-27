import { combineReducers } from 'redux';

import ui from './ui.reducer';
import addClient from './addClient.reducer';

const rootReducer = combineReducers({
    ui,
    addClient
});

export default rootReducer;
