import React from 'react';

const BeerCard = (props) => {
  const { beer } = props;
  return (
    <div className="p-3 mt-3">
      <div className="d-flex justify-content-center">
        <img className="card-img" src={beer.image_url} alt="" />
      </div>
      <div className="d-flex justify-content-between">
        <h3 className="d-inline">{beer.name}</h3>
        <h3 className="d-inline text-secondary">{beer.attenuation_level}</h3>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-secondary d-inline">{beer.tagline}</p>
        <p className="d-inline font-weight-bold">{beer.first_brewed}</p>
      </div>
      <p>{beer.description}</p>
      <p className="text-secondary font-weight-bold">
        {beer.contributed_by ? beer.contributed_by.split('<')[0] : ''}
      </p>
    </div>
  );
};

export default BeerCard;
