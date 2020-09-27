import { combineReducers } from 'redux';

import ui from './ui.reducer';
import clients from './clients.reducer';
import addClient from './addClient.reducer';

const rootReducer = combineReducers({
    ui,
    clients,
    addClient
});

export default rootReducer;
