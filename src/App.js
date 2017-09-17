import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
