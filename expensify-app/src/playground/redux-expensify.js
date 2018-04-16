import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Expenses
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            // or you could use: return state.concat(state, action.expens);
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(( {id} ) => id !== action.id);
        default:
            return state;
    }
};

//Filters
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', //amount or date
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

//Action Generators
const addExpense = ({description = '', note = '', amount = 0, date = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        date
    }
});


const removeExpense = ( {id} = {} ) => {
    return {
    type: 'REMOVE_EXPENSE',
    id
}};

//Store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'April Mortgage', amount: 131900 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Groceries', amount: 10000 }));
console.log('expense.id', expenseOne.expense.id);

store.dispatch(removeExpense({ id: expenseOne.expense.id}));

const demoState = {
    expenses: [{
        id: 'dfafffdidihd',
        description: 'mortgage for April',
        note: 'Just another payment',
        amount: 131900,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //amount or date
        startDate: undefined,
        endDate: undefined
    }
};