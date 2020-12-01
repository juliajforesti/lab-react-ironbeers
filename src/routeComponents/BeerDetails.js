import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BeerCard from '../components/BeerCard';

const BeerDetails = (props) => {
  const [beer, setBeer] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const { id } = props.match.params;

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${id}`
        );

        setBeer(response.data);
        setisLoading(false);

      } catch (error) {}
    })();
  });

  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center mt-5">
          <div
            className="spinner-border text-primary d-flex"
            role="status"
            style={{ width: '3rem', height: '3rem' }}
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <BeerCard beer={beer} />
      )}
    </div>
  );
};

export default BeerDetails;
