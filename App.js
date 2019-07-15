import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer'; //nodejs가 index 파일을 찾기때문에 쓸필요없음
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //스토어를 복사해서, 칠드런 컴포넌트에 넣음

let store = createStore(reducer);

console.log(store.getState());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}