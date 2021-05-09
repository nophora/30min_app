import { StatusBar } from 'expo-status-bar';
import React,{useState,useRef,useEffect,useCallback} from 'react';
import { StyleSheet, Text, View,Image,TouchableWithoutFeedback,Dimensions} from 'react-native';




import Gym from './components/gym'
import Homegym from './components/homegym'
import Welcomegym from './components/welcomegym'
import Workout from './components/workout'
import Search from './components/seach'
import Stream from './components/stream'
import Settings from './components/settings'



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';
import * as RootNavigation from './RootNavigation.js';
import {useSelector,useDispatch } from 'react-redux';


const Stack = createStackNavigator();


const Apps = (props) => {
      
  const states = useSelector(state => state)
  const dispatch = useDispatch()
  
  console.log('stateY',states)

 const [tate, setTate] = useState({
  home: true,
  female: false,
  male: false,
  settings:false,
})

const  home = (props) => {
  setTate({
    home: true,
    female: false,
    male: false,
    settings: false,
  })
 RootNavigation.navigate('Welcomegym', { userName: 'Mobile' });
}
const female = () => {
    setTate({
    home: false,
    female: true,
    male: false,
    settings:false,
  })
 RootNavigation.navigate('Workout', { add: 'female',select:'none' });

}

const male = () => {
    setTate({
      home: false,
      female: false,
      male: true,
      settings: false,
    })
   RootNavigation.navigate('Workout', { add: 'male',select:'none'  });

  }

  const settings = () => {
  setTate({
    home: false,
    female: false,
    male: false,
    settings: true,
  })
RootNavigation.navigate('Settings', { userName: 'Lucy' });

}

    
    return (
      
<View style={styles.container}>
    
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
           <Stack.Screen name="Gym" component={Gym} />
          <Stack.Screen name="Homegym" component={Homegym} />
           <Stack.Screen name="Welcomegym" component={Welcomegym} />
         <Stack.Screen name="Workout" component={Workout} />
           <Stack.Screen name="Search" component={Search} />
       <Stack.Screen name="Stream" component={Stream} />
      <Stack.Screen name="Settings" component={Settings} />
      
          
        

        </Stack.Navigator>
     </NavigationContainer>

     
        {states.navBar&&<View style={styles.barbox}>
          <TouchableWithoutFeedback onPress={home} >
            <Image source={require('./assets/gym/projects.png')} style={{ width: 20, height: 20, tintColor: tate.home ? 'rgb(8, 162, 0)' : 'white' }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={female}>
            <Text style={{ color: tate.female ? 'rgb(8, 162, 0)' : 'white' }}>Female</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={male}>
            <Text style={{ color: tate.male ? 'rgb(8, 162, 0)' : 'white' }}>Male</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={settings}>
            <Text style={{ color: tate.settings ? 'rgb(8, 162, 0)' : 'white' }}>Settings</Text>
          </TouchableWithoutFeedback>
        </View>}
      
     <StatusBar style="auto" />
      </View>

    );
}


export default Apps


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255,255)',
    justifyContent: 'flex-start',
  
  },
  barbox: {
    width: '100%',
    height: 40,
    position:'absolute',
    marginTop: Dimensions.get('window').height-40,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(10, 14, 46)',
    
   
},
});
