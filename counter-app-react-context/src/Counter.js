import React from 'react';

import { useCount } from './CountContext';

const Counter = () => {
  // set dispatch and state count from useCount()
  const context = useCount()

  return (
    <>
      {/* change 0 with count from context */}
      Count: {context.state.count}
      <div>
        {/* use dispatch for onClick method */}
        <button className="count-button" onClick={() => { context.dispatch({type: 'increment'}) }} >+</button>
        <button className="count-button" onClick={() => { context.dispatch({type: 'decrement'}) }}>-</button>
      </div>
    </>
  );
}

export default Counter;