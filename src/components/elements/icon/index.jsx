import React from 'react';

const Icon = (props) => {
  const {
    fontsize,
    isClickable = false,
    onClick = () => {},
    children
  } = props;

  return (
    <div
      className={`text-white ${fontsize} ${isClickable? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
};

export default Icon;