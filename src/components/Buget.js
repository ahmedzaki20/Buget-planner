import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { addBuget } from '../store/slices/bugetSlice';

function Buget() {
  const dispatch = useDispatch();
  const bugetState = useSelector(state => state.buget);
  const [buget, setBuget] = useState();
  const editBuget = async () => {
    const { value: number } = await Swal.fire({
      title: 'Input your buget',
      input: 'number',
      inputPlaceholder: 'Enter your buget',
    });
    dispatch(addBuget(number));
  };
  useEffect(() => {
    setBuget(bugetState);
  }, [bugetState]);
  return (
    <div className='col-12 col-lg alert alert-secondary d-flex  justify-content-between align-items-center mt-2 p-3'>
      Buget : {buget}€{' '}
      <button
        className='btn btn-primary btn-sm'
        type='button'
        onClick={editBuget}>
        Edit
      </button>
    </div>
  );
}

export default Buget;
