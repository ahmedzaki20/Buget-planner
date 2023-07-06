import React from 'react';
import { useSelector } from 'react-redux';

function Remaining() {
  const spent = useSelector(state => state.expenses) || [];
  const spents = spent
    .map(item => +item.cost)
    .reduce((total, num) => total + num, 0);
  const buget = useSelector(state => state.buget);
  return (
    <div className='col-12 col-lg  alert alert-success d-flex  justify-content-between align-items-center mt-2 '>
      Remaining : {buget - spents}€{' '}
    </div>
  );
}

export default Remaining;
