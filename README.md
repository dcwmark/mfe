# mfe
[https://blog.bitsrc.io/how-to-develop-microfrontends-using-react-step-by-step-guide-47ebb479cacd](https://blog.bitsrc.io/how-to-develop-microfrontends-using-react-step-by-step-guide-47ebb479cacd)

```zsh
npx create-react-app container
npx create-react-app mfe-a
npx create-react-app mfe-b
npx create-react-app mfe-c

npm i react-app-rewired react-router-dom history
```

### Config child apps with `config-overrides.js`

```js
module.exports = {
  webpack: (config, env) => {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };

    config.output.filename = "static/js/[name].js";

    config.plugins[5].options.filename = "static/css/[name].css";
    config.plugins[5].options.moduleFilename = () => "static/css/main.css";
    return config;
  },
};
```

### child apps
replace in `package.json` `react-scripts` with `react-app-rewired`

### Enable child apps with CORS wtih /src/setupProxy.js

```zsh
module.exports = (app) => {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
};
```

### Update child apps `index.js` with `render` and `unmount` functions

Container (App.js)
```js
const mfeA = ({ history = defaultHistory }) => {
  return <MicroFrontend history={ history } host={ mfeAHost } name="_mfeA" />
};

const mfeB = ({ history = defaultHistory }) => {
  return <MicroFrontend history={ history } host={ mfeBHost } name="_mfeB" />
};

const mfeC = ({ history = defaultHistory }) => {
  return <MicroFrontend history={ history } host={ mfeCHost } name="_mfeC" />
};
```

Child App (index.js)

```js
window.render_mfeA = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmount_mfeA = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('_mfeA-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}
```

```js
window.render_mfeB = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmount_mfeB = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('_mfeB-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}
```

```js
window.render_mfeC = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmount_mfeC = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('_mfeC-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}
```
