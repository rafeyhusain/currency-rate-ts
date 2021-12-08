import React from 'react';
import RatesPage from './RatesPage';
import {Route, MemoryRouter} from 'react-router-dom';
import { render } from '@testing-library/react';

test("renders without crash", ()=> {
  () => (
    render(
      <MemoryRouter>
        <Route path="/:currency?" children={<RatesPage />} />
    </MemoryRouter>
    )
  )
})