import React from 'react'

function ExpenseItem({name, cost}) {
    return (
      <li className='flex-row justify-between px-5'>
        <p>{name}</p>
        <div class="badge badge-primary ml-2 success">{cost}</div>
      </li>
    );
}

export default ExpenseItem
