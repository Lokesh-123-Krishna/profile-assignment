import { createStore } from 'redux';
import rootReducer from "../reducer/Initiator";

const store = createStore(rootReducer);

export default store;
