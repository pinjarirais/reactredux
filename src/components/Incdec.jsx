import React from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Inc, Dec } from '../states/reducers/index';

const Incdec = () => {
    const curstate = useSelector((state) => state.number);
    const dispatch = useDispatch();
  return (
    <>
      <div className="container mt-20">
        <h1>{curstate}</h1>
        <div>
          <button onClick={()=>{dispatch(Inc(1))}}>INC</button>
          <button onClick={()=>{dispatch(Dec(1))}}>DEC</button>
        </div>
      </div>
    </>
  )
}

export default Incdec;
