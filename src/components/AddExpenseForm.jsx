import React, {useState, useContext} from "react";
import { AppContext } from "../context/AppContext"
import { v4 as uuidv4 } from "uuid";

function AddExpenseForm() {
    const {dispatch} = useContext(AppContext)
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        const expense = {
            id: uuidv4,
            name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })

        setName('')
        setCost('')


    }

  return (
    <div className=" shadow-lg rounded-box">
      <form onSubmit={submitHandler}>
        <div className="p-10 card bg-base-200 columns-1 gap-2 md:flex md:flex-row md:justify-between">
          <div className="form-control basis-3/5">
            <label className="input-group" for='name'>
              <span>Name</span>
              <input
              value={name}
                type="text"
                required
                placeholder="Name of expense"
                className="input input-bordered w-full"
                id="name"
                onChange={e => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-control basis-1/5">
            <label className="input-group" for='price'>
              <span>Price</span>
              <input
              value={cost}
              onChange={e => setCost(e.target.value)}
                type="text"
                required
                placeholder="Price"
                className="input input-bordered w-full "
                id='price'
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary basis-1/5">Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddExpenseForm;
