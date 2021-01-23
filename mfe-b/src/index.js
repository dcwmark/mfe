import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderMFEb = (containerId, history) => {
  console.log(`********** re containerId::${containerId}`)
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmountMFEb = containerId => {
  console.log(`********** un containerId::${containerId}`)
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('MFEb-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}
