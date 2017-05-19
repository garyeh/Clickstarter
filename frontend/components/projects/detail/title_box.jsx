import React from 'react';
import { Route, Link } from 'react-router-dom';

const TitleBox = ({ detail }) => {
  const username = (detail.creator) ? detail.creator.username : "";
  return (<div className="titlebox">
      <div>
        <span>By<span>{` ${username}`}</span></span>
      </div>
      <div>
        <p>{detail.title}</p>
        <p>{detail.description}</p>
      </div>
    </div>
  );
};

export default TitleBox;
