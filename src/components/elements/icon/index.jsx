import React from 'react';

const Icon = (props) => {
  const { fontsize, children } = props;

  return (
    <div className={`text-white ${fontsize}`}>
      {children}
    </div>
  )
};

export default Icon;