import React from 'react';

const Icon = (props) => {
  const {
    bgcolor = "transparent",
    textcolor = "text-white",
    fontsize,
    children
  } = props;

  return (
    <div
      className={`${bgcolor} ${textcolor} ${fontsize}`}
    >
      {children}
    </div>
  )
};

export default Icon;