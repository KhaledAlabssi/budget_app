import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'


function Spent() {
    const {expenses} = useContext(AppContext)

    const total = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0)
    return (
      <div className="h-full w-full">
        <div class="alert alert-error">
          <div class="flex-1 justify-around">
            <label className="text-2xl font-bold">Spent: €{total}</label>
          </div>
        </div>
      </div>
    );
}

export default Spent
