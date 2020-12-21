import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyles from '~/styles/globalStyle';
import Prices from '~/containers/Prices';

const App = () => (
  <Router>
    <GlobalStyles />
    <Route exact path="/" component={Prices} />
  </Router>
);

export default App;
