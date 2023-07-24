import React from 'react';

const SectionLayout = (props) => {
  const { sectionId, gradFrom, gradTo, gradVia, children } = props;

  return (
    <div
      id={sectionId}
      className={`bg-gradient-to-b ${gradFrom} ${gradTo} ${gradVia} p-4 md:px-8 lg:px-16 flex flex-col gap-4`}
    >
      {children}
    </div>
  )
};

export default SectionLayout;