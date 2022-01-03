import React from 'react'
import {TiDelete} from 'react-icons/ti'


function ExpenseItem({name, cost}) {
    return (
      <li className='py-1'>
        <div className="flex justify-between flex-row px-4">
          <div>{name}</div>
          <div className="flex flex-row ">
            <div class="badge badge-primary ml-2">{cost}</div>
            <div className='pl-1'>
              <TiDelete size="1.5em"></TiDelete>
            </div>
          </div>
        </div>
      </li>
    );
}

export default ExpenseItem
