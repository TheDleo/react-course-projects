import React from 'react';

const ExpenseListItem = ({description, amount, createdAt}) => (
        <div>
            Description: {description} - Amount: {amount} - CreatedAt: {createdAt}
        </div>
);

export default ExpenseListItem;