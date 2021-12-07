import React, { useState } from 'react';
import classes from './Search.module.css';

type OnSearch = (text: string) => void;

type SearchProps = {
  onSearch: OnSearch;
};

function Search({onSearch}: SearchProps): JSX.Element {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    
    setText(value);
    onSearch(value);
  };
  
  return <div className={classes.search}>Search&nbsp;
    <input value={text} onChange={handleChange} placeholder=" e.g. USD" />
  </div>;
}

export default Search;
