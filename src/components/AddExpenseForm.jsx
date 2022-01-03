import React from "react";

function AddExpenseForm() {
  return (
    <div className=" shadow-lg rounded-box">
      <form>
        <div className="p-10 card bg-base-200 columns-1 gap-2 md:flex md:flex-row md:justify-between">
          <div className="form-control basis-3/5">
            <label className="input-group" for='name'>
              <span>Name</span>
              <input
                type="text"
                required
                placeholder="Name of expense"
                className="input input-bordered w-full"
                id="name"
              />
            </label>
          </div>
          <div className="form-control basis-1/5">
            <label className="input-group" for='price'>
              <span>Price</span>
              <input
                type="text"
                required
                placeholder="Price"
                className="input input-bordered w-full "
                id='price'
              />
            </label>
          </div>
          <button className="btn btn-primary basis-1/5">Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddExpenseForm;
