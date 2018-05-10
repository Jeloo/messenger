import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from './reducers';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const createMiddleware = () => {
    const common = [thunk, routerMiddleware(history)],
          dev    = [createLogger()];

    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(...common);
    } else {
        return applyMiddleware(...common, ...dev);
    }
};

export const store = createStore(
    reducers,
    composeWithDevTools(createMiddleware())
);