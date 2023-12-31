import React from 'react';

const Button = (props) => {
  const {
    bgcolor = "transparent",
    textcolor = "text-white",
    fontsize,
    border,
    rounded,
    padding = "p-1",
    onClick = () => {},
    children
  } = props;

  return (
    <button
      className={`${bgcolor} ${textcolor} ${fontsize} ${border} ${rounded} ${padding}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
};

export default Button;