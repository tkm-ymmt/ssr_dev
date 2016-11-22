import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router'
import routes from './src/js/route'
import reducer from './src/js/reducers';
import { createStore } from 'redux';
import subdomain from 'express-subdomain';
import Express from 'express'

const router = Express.Router();

const app = Express();
app.get('*', handleRender);
app.use(subdomain('api', router));
app.listen(3000);


function renderFullPage(renderedContent, preloadedState) {
  return `
  <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>React Server Rendering sample</title>
    </head>
    <div id="app">${renderedContent}</div>
   <script>
    </script>
    <script type="text/javascript" charset="utf-8" src="/static/js/bundle.js"></script>
    </body>
    </html>
  `;
}


function handleRender(req, res) {
  console.log(req.headers.host);
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {

      const store = createStore(reducer);
      const html = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
      );
      const renderedPage = renderFullPage(html, store.getState());
      res.status(200).send(renderedPage);

    } else {
      res.status(404).send('Not found')
    }
  })
}




