import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = (props) => {
  const history = useHistory()
  return (
    <nav className="navbar fixed-top navbar-dark bg-primary d-flex justify-content-center">
      <div onClick={() => history.goBack()} className='back-icon'>
          <i className="fa fa-chevron-left " aria-hidden="true" style={{fontSize: '1.8rem'}}></i>
      </div>
        <Link to="/">
          <i className="fa fa-home fa-lg" aria-hidden="true" style={{fontSize: '2rem'}}></i>
        </Link>
    </nav>
  );
};

export default Navbar;
