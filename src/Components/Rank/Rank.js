import React from 'react';

const Rank = ({ userName, userEntries }) => {
  return (
    <p className="f3">
      {`Hi ${userName} !! Your current rank is`}
      <span className="f1 db">{`#${userEntries}`}</span>
    </p>
  );
};

export default Rank;
