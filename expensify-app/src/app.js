import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();

// temp test data
store.dispatch(addExpense({ description: 'Gas Bill', amount: 10000, createdAt: 1524181442000 }));
store.dispatch(addExpense({ description: 'Water Bill', amount: 5000, createdAt: 1524181442000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 200000, createdAt: 1534181442000 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));