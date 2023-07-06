import React from 'react';
import { useSelector } from 'react-redux';

function Spent() {
  const spent = useSelector(state => state.expenses);
  const spents = spent
    .map(item => +item.cost)
    .reduce((total, num) => total + num, 0);
  console.log(spents);
  return (
    <div className='col-12 col-lg  alert alert-primary d-flex  justify-content-between align-items-center mt-2 '>
      Spent : {spents}€{' '}
    </div>
  );
}

export default Spent;
