import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'
import ExpenseItem from './ExpenseItem'


function ExpenseList() {
    const {expenses} = useContext(AppContext)
    
    return (
      <div class="py-5">
          <h2 className='text-center p-4'>EXPENSES LIST:</h2>
        <ul class="menu py-3 shadow-lg  rounded-box">
          {/* <li class="menu-title">
            <span>Menu Title</span>
          </li> */}

          {expenses.map(expense => (
              <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
          ))}
        </ul>
      </div>
    );
}

export default ExpenseList
