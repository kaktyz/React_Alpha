import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/main.css';
import {Provider} from 'react-redux';
import configStore from './components/store/configStore';

import App from './components/app/app.jsx';

const store = configStore(()=>{}, {});

ReactDOM.render(
        <Provider store={store}>
            <App /> 
        </Provider>,

        document.getElementById('root')
    );