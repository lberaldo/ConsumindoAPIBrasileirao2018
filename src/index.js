import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux'; 
import fieldReducer from './fieldReducer'
import 'bootstrap/dist/css/bootstrap.min.css';
const reducers = combineReducers({
    field: fieldReducer
})

ReactDOM.render(

<Provider store={createStore(reducers)}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
