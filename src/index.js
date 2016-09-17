import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal400, cyan900 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { useScroll } from 'react-router-scroll';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import routes from './config/routes';
import rootReducer from './shared/reducers';
import './index.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal400,
    primary2Color: cyan900
  }
});

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

class Theme extends React.Component {

  constructor() {
    super();
    injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <Router
            history={browserHistory}
            routes={routes}
            render={applyRouterMiddleware(useScroll())}
          />
        </Provider>
      </MuiThemeProvider>
    );
  }

}

ReactDOM.render(
  <Theme />,
  document.getElementById('root')
);
