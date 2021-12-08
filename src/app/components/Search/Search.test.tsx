import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';

test("renders without crash", ()=> {
  const div = document.createElement("div");

  ReactDOM.render(<Search onSearch={()=>{}}/>, div);
  ReactDOM.unmountComponentAtNode(div)
})