import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, Dimensions,TouchableWithoutFeedback} from 'react-native';
import {useDispatch } from 'react-redux';

const Timelin  =(props)=>{

  const dispatch = useDispatch()
 

  const male = () => {
    dispatch({ type: 'GENDER', payload: 'male' })
    props.navigation.navigate('Homegym', { name: 'male' })
      
}

  const female = () => {
    dispatch({ type: 'GENDER', payload:'female'})
     props.navigation.navigate('Homegym', { name: 'female' })
    
}
    
  return(
    <View style={styles.container}>
     
     <View style={styles.gender}>
      <View style={styles.selectgender}>
      <Text style={styles.femaletext1}>
        Select <Text style={{color:'rgb(8, 162, 0)'}}>gender</Text>
       </Text>
       </View>
        <TouchableWithoutFeedback onPress={male}>
        <View style={styles.male}>
        <Text style={styles.femaletext}>
         male
       </Text>
       </View>
       </TouchableWithoutFeedback>
       <TouchableWithoutFeedback onPress={female}>
        <View style={styles.female}>
        <Text style={styles.femaletext}>
        female
       </Text>
       </View>
       </TouchableWithoutFeedback>
       </View>
    </View>
  );

}



export default Timelin;

const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    backgroundColor: 'rgb(255, 145, 0)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(19, 22, 33)',
  
    },

     gender: {
    width:250,
    height:300,
    alignItems: 'center',
    justifyContent: 'flex-start',
  
    },
     selectgender: {
    width:'100%',
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
   
    },
    femaletext1:{
      fontSize:30,
      fontWeight:'bold',
      color:'white'
    },
         male: {
    width:200,
    borderRadius:40,
    borderWidth:2,
    borderColor:'rgb(8, 155, 0)',
    marginTop:60,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    },

     female: {
    width:200,
    borderRadius:40,
    borderWidth:2,
    borderColor:'green',
    marginTop:20,
  
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    
    },
  femaletext:{
  color:'white',
  }
});
