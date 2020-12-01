import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = (props) => {
  const history = useHistory()
  console.log(history.goBack())
  return (
    <nav className="navbar navbar-dark bg-primary d-flex justify-content-center">
      <div onClick={() => history.goBack()} className='w-50'>
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div className='w-50'>
        <Link to="/">
          <i className="fa fa-home fa-lg" aria-hidden="true"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
