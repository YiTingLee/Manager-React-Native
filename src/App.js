import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBZVuqVjxlZvLBsXbgXw5_TgazNwsDODjU',
      authDomain: 'manager-35a84.firebaseapp.com',
      databaseURL: 'https://manager-35a84.firebaseio.com',
      projectId: 'manager-35a84',
      storageBucket: '',
      messagingSenderId: '306237729303'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
