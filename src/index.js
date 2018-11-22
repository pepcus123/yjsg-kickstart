import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import hi from "react-intl/locale-data/hi";

import logger from 'redux-logger';
import AppContainer from './components/coreComponents/AppContainer';
import sagas from './sagas';
import localeData from './locale/messages';

import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

let middleware = [
  sagaMiddleware, logger,
];

const store = createStore(rootReducer, applyMiddleware(...middleware));

addLocaleData([...en, ...hi]);

const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

const messages =
  localeData[language] ||
  localeData.en;

function* sagaWatchers() {
  yield all([
    sagas,
  ]);
}
sagaMiddleware.run(sagaWatchers);

ReactDOM.render(
  <IntlProvider locale={language} messages={messages}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </IntlProvider>, document.getElementById('thinkHRWidget'));

