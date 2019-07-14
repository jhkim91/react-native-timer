import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer'; //nodejs가 index 파일을 찾기때문에 쓸필요없음

export default class App extends Component {
  render() {
    return (
      <Timer />
    );
  }
}