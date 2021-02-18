import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Searchbar from '../components/Searchbar';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );
        if (response){
          setBeers(response.data);
          setFilteredBeers(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  function filterBeers(input) {
    const searchResult = beers.filter(beer => beer.name.toLowerCase().includes(input.toLowerCase()))
    setFilteredBeers(searchResult)
  }

  return (
    <div>
    <Searchbar beers={beers} filterBeers={filterBeers} />
      {!isLoading ? (
        <div>
          {filteredBeers.map((beer) => (
            <Link key={beer._id} to={`/beer/${beer._id}`}>
              <div className="card d-flex flex-row" style={{ width: '100%' }}>
                <img className="card-img" src={beer.image_url} alt="beer" />
                <div className="card-body">
                  <h5 className="card-title">{beer.name}</h5>
                  <p className="card-text">{beer.tagline}</p>
                  <p className="card-text">
                    <strong>Created by:</strong>{' '}
                    {beer.contributed_by
                      ? beer.contributed_by.split('<')[0]
                      : ''}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border text-primary d-flex" role="status" style={{width: "3rem", height: "3rem"}}>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default Beers;
