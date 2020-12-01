import React from 'react';

const Card = (props) => {
  return (  
    <div className="card " style={{width: '100%'}}>
      <img className="card-img-top" src={`./images/${props.img}.jpg`} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;