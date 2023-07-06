import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../store/slices/expensesSlice';
import uniqid from 'uniqid';
function AddExpense() {
  const [expenses, setExpenses] = useState({});
  const dispatch = useDispatch();
  const handleName = e => {
    setExpenses({ ...expenses, name: e.target.value });
  };
  const handleCost = e => {
    setExpenses({ ...expenses, cost: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setExpenses({ ...expenses, id: uniqid() });
    dispatch(addExpense(expenses));
    e.target.reset();
  };
  return (
    <div className='mt-3'>
      <h1>AddExpense</h1>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col'>
            <label className='col-sm-2 col-form-label'>Name</label>
            <input
              type='text'
              className='form-control'
              placeholder=''
              onChange={handleName}
            />
          </div>
          <div className='col'>
            <label className='col-sm-2 col-form-label'>Cost</label>
            <input
              type='Number'
              className='form-control'
              onChange={handleCost}
              min={1}
              required
            />
          </div>
        </div>
        <div className='col-12 mt-2'>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddExpense;
