import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import exampleFilter from './example';

const reducers = (state = {}, action) => ({
    example: exampleFilter(state.example, action)
});

export const store = createStore(reducers, applyMiddleware(thunk));
