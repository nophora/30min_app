import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, Dimensions} from 'react-native';

import Form from './components/form'
import Home from './components/home'
import Message from './components/message'
import Video from './components/video'
import Gym from './components/gym'

class App  extends React.Component{
  render() {
    //<Form/><Home/>  <Video/> <StatusBar style="auto" />
  return(
    <View style={styles.container}>
     
     <Gym/>
    
    </View>
  );
}
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255,255)',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
