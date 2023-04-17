import * as React from 'react';

const Price = ({ value }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
  });
  return <span>{formatter.format(value)}</span>;
};

export default Price;
