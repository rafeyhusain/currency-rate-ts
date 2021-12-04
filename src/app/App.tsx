import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RatesPage from './pages/RatesPage/RatesPage';

function App(): JSX.Element {

  return (
    <Router>
      <div className={styles.App}>
        <RatesPage></RatesPage>
      </div>
    </Router>
  );
}

export default App;
