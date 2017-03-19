import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tracks from './tracks';

export default combineReducers({
    routing: routerReducer,
    tracks
})

export function create(state=[], action) {
    if (action.type === 'ADD') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}