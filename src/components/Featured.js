import React from 'react';

const Featured = ({match}) => {

	let name = match.params.name;

  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong>{name}</strong>, a ambassador who loves teaching courses about <strong></strong>!</p>
    </div>
  );
}

export default Featured;