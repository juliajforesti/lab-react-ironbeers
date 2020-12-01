import React, {useEffect, useState} from 'react';

const Searchbar = (props) => {
  const [input, setInput] = useState('');

  function handleChange(e){
    setInput(e.target.value)
  }
  useEffect(() => {
    props.filterBeers(input)
  }, [input]);

  return (  
    <div className='m-1'>
      <input className='w-100' onChange={handleChange} value={input} placeholder='Search your beer' type="text"/>
    </div>
  );
}
 
export default Searchbar;