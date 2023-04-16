import * as React from 'react';
import './PageTitle.scss';

const PageTitle = ({ title, children }) => {
  return (
    <header>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="actions">{children}</div>
    </header>
  );
};

export default PageTitle;
