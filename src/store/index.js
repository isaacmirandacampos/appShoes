import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const enhancer = console.tron.createEnhancer();

const store = createStore(rootReducer, enhancer);

export default store;
