import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'


function Remaining() {
    const {expenses, budget} = useContext(AppContext)
    const total = expenses.reduce((sum, item) => {
        return (sum = sum += item.cost)
    }, 0)
    const alert = total > budget ? 'alert-warning' : 'alert-success'
    return (
      <div className="h-full w-full">
        <div class={`alert ${alert}`}>
          <div class="flex-1 justify-around">
            <label className="text-2xl font-bold">Remaining: €{budget - total}</label>
          </div>
        </div>
      </div>
    );
}

export default Remaining
