import React from 'react';
import { IoIosRemoveCircle } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { removeExpense } from '../store/slices/expensesSlice';
function ListOfExpenses({ children }) {
  const dispatch = useDispatch();
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center '>
      {children.name}{' '}
      <span>
        <span className='badge rounded-pill text-bg-primary me-3'>
          {' '}
          €{children.cost}
        </span>
        <IoIosRemoveCircle
          role='button'
          onClick={() => {
            dispatch(removeExpense(children.id));
          }}
        />
      </span>
    </li>
  );
}

export default ListOfExpenses;
