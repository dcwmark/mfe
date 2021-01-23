import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderMFEc = (containerId, history) => {
  console.log(`********** re containerId::${containerId}`)
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmountMFEc = containerId => {
  console.log(`********** un containerId::${containerId}`)
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('MFEc-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}
