import React, { useEffect, useState } from 'react';
import ListOfExpenses from './ListOfExpenses';
import { useSelector } from 'react-redux';

function Expenses() {
  const expenses = useSelector(state => state.expenses);
  const [search, setSearch] = useState('');
  return (
    <div>
      <h2>Expenses</h2>
      <input
        type='text'
        className='form-control'
        id='search'
        placeholder='Type to search ...'
        onChange={e => {
          setSearch(e.target.value);
        }}></input>
      <ul className='list-group mt-4'>
        {expenses
          .filter(item => item.name.includes(search))
          .map(expenses => {
            return (
              <ListOfExpenses key={expenses.id}>{expenses}</ListOfExpenses>
            );
          })}
      </ul>
    </div>
  );
}

export default Expenses;
