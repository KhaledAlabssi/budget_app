import React, {useContext} from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../context/AppContext'


function ExpenseItem({name, cost, id}) {
    const {dispatch} = useContext(AppContext)

    const deleteHandler = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        })
    }
    return (
      <li className='py-1'>
        <div className="flex justify-between flex-row px-4">
          <div><p className='font-bold'>{name}</p></div>
          <div className="flex flex-row ">
            <div class="badge badge-secondary ml-2">{cost}</div>
            <div className='pl-1'>
              <TiDelete size="1.5em" onClick={deleteHandler}></TiDelete>
            </div>
          </div>
        </div>
      </li>
    );
}

export default ExpenseItem
