import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const ExpenseDashboardPage = () => (
    <div>
        this is the dashboard.
    </div>
);

const AddExpensePage = () => (
    <div>
        this is the add expense page.
    </div>
);

const EditExpensePage = () => (
    <div>
        this is the edit expense page.
    </div>
);

const HelpPage = () => (
    <div>
        this is the help page.
    </div>
);

const NotFoundPage = () => (
    <div>
        404!
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));