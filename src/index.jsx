import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(
  <Root />,
  document.getElementById('app'),
);
