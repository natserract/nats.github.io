
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../helpers/functions';

const AppProvider = ({ children }) => (
    <Provider store={store}>
        { children }
    </Provider> 
);

export = AppProvider;