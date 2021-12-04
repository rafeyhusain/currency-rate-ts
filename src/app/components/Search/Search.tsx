import React, { useEffect, useState } from 'react';
import classes from './Search.module.css';

function Search(): JSX.Element {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setText(value);
  };
  
  return <div className={classes.search}>Search
    <input value={text} onChange={handleChange} />
  </div>;
}

export default Search;
