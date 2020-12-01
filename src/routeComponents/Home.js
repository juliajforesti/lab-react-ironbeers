import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <Link className="col-12 col-lg-4" to="/beers">
          <Card
            title="All Beers"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure repellat quia molestias reiciendis animi saepe dolorum tempore voluptatem obcaecati?"
            img='beer-pub'
          />
        </Link>
        <Link className="col-12 col-lg-4" to="random-beer">
          <Card
            title="Random Beer"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure repellat quia molestias reiciendis animi saepe dolorum tempore voluptatem obcaecati?"
            img='random-beer'
          />
        </Link>
        <Link className="col-12 col-lg-4" to="new-beer">
          <Card
            title="New Beer"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure repellat quia molestias reiciendis animi saepe dolorum tempore voluptatem obcaecati?"
            img='new-beer'
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
