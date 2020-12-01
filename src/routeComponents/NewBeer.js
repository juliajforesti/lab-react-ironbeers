import React, { useState } from 'react';
import axios from 'axios';

const NewBeer = (props) => {
  const [state, setState] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true)
    await axios.post(
      'https://ih-beers-api2.herokuapp.com/beers/new',
      state
    );
    props.history.push('/');
  }

  return (
    <form className="mx-5 mt-5" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control element-radius"
          name="name"
          value={state.name}
        />
      </div>

      <div className="form-group">
        <label htmlFor="tagline">Tagline</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control element-radius"
          name="tagline"
          value={state.tagline}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          onChange={handleChange}
          value={state.description}
          className="form-control element-radius"
          name="description"
          rows="3"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="first_brewed">First Brewed</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control element-radius"
          name="first_brewed"
          value={state.first_brewed}
        />
      </div>

      <div className="form-group">
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control element-radius"
          name="brewers_tips"
          value={state.brewers_tips}
        />
      </div>

      <div className="form-group">
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          onChange={handleChange}
          type="number"
          className="form-control element-radius"
          name="attenuation_level"
          value={state.attenuation_level}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contributed_by">Contributed By</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control element-radius"
          name="contributed_by"
          value={state.contributed_by}
        />
      </div>

      {isLoading ? (
        <button class="btn btn-primary w-100 element-radius" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
      ) : (       
      <button type="submit" className="btn btn-primary w-100 element-radius">
        ADD NEW
      </button>
        
      )}      
    </form>
  );
};

export default NewBeer;
