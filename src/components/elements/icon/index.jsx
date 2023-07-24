import React from 'react';

const Icon = (props) => {
  const { fontsize, isClickable = false, children } = props;

  return (
    <div className={`text-white ${fontsize} ${isClickable? 'cursor-pointer' : ''}`}>
      {children}
    </div>
  )
};

export default Icon;