import React from 'react';

const Button = (props) => {
  const {
    bgcolor = "transparent",
    textcolor = "text-white",
    fontsize,
    border,
    rounded,
    onClick = () => {},
    children
  } = props;

  return (
    <button
      className={`${bgcolor} ${textcolor} ${fontsize} ${border} ${rounded} p-1`}
      onClick={onClick}
    >
      {children}
    </button>
  )
};

export default Button;