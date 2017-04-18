import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './root';

const render =  (NexComponent) => {
  ReactDom.render((
     <AppContainer>
      <NexComponent />
    </AppContainer>
  ), document.getElementById('root'));
}

render(Root);

if (module.hot) {

  module.hot.accept('./root', () => {
    const NexComponent = require('./root').default;
    render(NexComponent);

  });
}
