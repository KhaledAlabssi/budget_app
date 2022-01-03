import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

function Budget() {
    const {budget} = useContext(AppContext)
    return (
      <div className="w-full h-full">
        <div class="alert alert-info">
          <div class="flex-1 justify-around">
            <p className="text-2xl font-bold">Budget: €{budget}</p>
          </div>
        </div>
      </div>
    );
}

export default Budget
