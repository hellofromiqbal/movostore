import React from 'react';

const SectionLayout = (props) => {
  const {
    sectionId,
    gradFrom,
    gradTo,
    gradVia,
    padding = 'p-4 md:px-8 lg:px-16',
    children
  } = props;

  return (
    <div
      id={sectionId}
      className={`bg-gradient-to-b ${gradFrom} ${gradTo} ${gradVia} ${padding} flex flex-col gap-4`}
    >
      {children}
    </div>
  )
};

export default SectionLayout;