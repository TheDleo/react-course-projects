import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <div>
            <h1>Expensify</h1>
        </div>
        <div>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </div>
    </div>
)

export default Header;