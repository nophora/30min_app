import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,ScrollView, Text, View,Image, Dimensions,TouchableWithoutFeedback} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as RootNavigation from '../RootNavigation.js';


const Homegym =()=>{

  const states = useSelector(state => state)
  const dispatch = useDispatch()
 

  const [tate, setTate] = useState({
    slide1: false,
    slide2: true,
    slide3: true,
    slide4: true,
   })

  const slide1 = () => {
    setTate({
      slide1: false,
    slide2: true,
    slide3: true,
      slide4: true,
     })
    dispatch({ type: 'LEVEL', payload:'Inactive' })
 
}



const slide2 = () => {
  setTate({
    slide1: true,
  slide2: false,
  slide3: true,
    slide4: true,
  })
  dispatch({ type: 'LEVEL', payload:'Beginner' })
 
}


const slide3 = () => {
  setTate({
    slide1: true,
  slide2: true,
  slide3: false,
    slide4: true,
  })
  dispatch({ type: 'LEVEL', payload:'Intermediate' })
 
}

const slide4 = () => {
  setTate({
    slide1: true,
  slide2: true,
  slide3: true,
    slide4: false,
       
  })
  dispatch({ type: 'LEVEL', payload:'Advance' })
   
}


  const next = async () => {
    
      dispatch({ type: 'GLOBAL', payload: true })
      RootNavigation.navigate('Welcomegym', { userName: 'Lucy' });
  
  }
  
  
  

  return(
    <View style={styles.container}>
      <Image source={require('../assets/gym/home.jpg')} style={styles.image} />
     <View style={styles.home}>

     <View style={styles.home1}>
     <Text style={styles.femaletexti}>
        30<Text style={{color:'rgb(8, 162, 0)'}}>min</Text>
       </Text>
        </View>
        <View style={styles.home2}>
        <View>
          <Text style={styles.femaletextb}>About You</Text>
          </View>
          <View>
            <Text style={styles.femaletexts}>The benefits of fitness
            go on and on, but you need consistency and
            discipline in order to stick with a routine
           long enough to reap those benefits</Text>
          </View>
          </View>
        <View style={styles.home3}>
        <ScrollView

           horizontal ={false}
            Style={{ width: '100%', alignItems: 'center',
            justifyContent: 'center', }} horizontal={true} >
            
            <View style={styles.choice}>
              <View style={styles.choic2}>
                <TouchableWithoutFeedback onPress={slide1}>
              <Image source={require('../assets/gym/check.png')} style={{ width: 24,height: 24,tintColor: tate.slide1?'gray':'white'}} />
              </TouchableWithoutFeedback>
              </View>
              <View style={styles.choic}>
              <Text style={styles.femaletexta}>I am</Text>
              </View>
              <View style={styles.choic}>
              <Text style={styles.femaletexta}>Inactive</Text>
              </View>
              <View style={styles.choicx}>
              <Text style={styles.femaletexts}>Not doing things that require physical</Text>
            </View>
            </View>
           

            <View style={styles.choice}>
              <View style={styles.choic2}>
                <TouchableWithoutFeedback onPress={slide2}>
              <Image source={require('../assets/gym/check.png')} style={{ width: 24,height: 24,tintColor:tate.slide2?'gray':'white'}} />
              </TouchableWithoutFeedback>
              </View>
              <View style={styles.choic}>
              <Text style={styles.femaletexta}>I am</Text>
              </View>
              <View style={styles.choic}>
              <Text style={styles.femaletexta}>Beginner</Text>
              </View>
              <View style={styles.choicx}>
              <Text style={styles.femaletexts}>Recommends starting out walking at a low intensity</Text>
            </View>
            </View>



            <View style={styles.choice}>
              <View style={styles.choic2}>
                <TouchableWithoutFeedback onPress={slide3}>
              <Image source={require('../assets/gym/check.png')} style={{ width: 24,height: 24,tintColor:tate.slide3?'gray':'white'}} />
              </TouchableWithoutFeedback>
              </View>
              <View style={styles.choic}>
              <Text style={styles.femaletexta}>I am</Text>
              </View>
              <View style={styles.choic}>
              <Text style={styles.femaletexta}>Intermediate</Text>
              </View>
              <View style={styles.choicx}>
              <Text style={styles.femaletexts}>Has knowledge of proper form and modifications</Text>
            </View>
            </View>



            <View style={styles.choice}>
              <View style={styles.choic2}>
                <TouchableWithoutFeedback onPress={slide4}>
              <Image source={require('../assets/gym/check.png')} style={{ width: 24,height: 24,tintColor: tate.slide4?'gray':'white'}} />
              </TouchableWithoutFeedback>
              </View>
              <View style={styles.choic}>
              <Text style={styles.femaletexta}>I am</Text>
              </View>
              <View style={styles.choic}>
              <Text style={styles.femaletexta}>Advance</Text>
              </View>
              <View style={styles.choicx}>
              <Text style={styles.femaletexts}>Bodybuilder workout and have experience</Text>
            </View>
            </View>


            
      
          </ScrollView>
        </View>
        <View style={styles.home4}>
          <TouchableWithoutFeedback onPress={next}  >
        <View style={styles.next}>
        <Text style={styles.femaletextn}>Next</Text>
            </View>
            </TouchableWithoutFeedback>
</View>


        
          </View>
    </View>
  );
}


export default Homegym;

const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
   alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(1,6,17)',
  
  },
  image: {
    width: '100%',
    height: '100%',
    position:'absolute',
  },
  image2: {
   
  },
  home: {
    width:'100%',
    height: '100%',
    position:'relative',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0, 19, 61, 0.824)',
  },

  home1: {
    width:'100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  home2: {
    width:'95%',
    height: 100,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  home3: {
    width:'95%',
    height: 180,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  home4: {
    width:'95%',
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
   
    },

  femaletexti:{
    color: 'white',
    fontSize: 50,
    fontWeight:'bold'
    },
    femaletextb:{
      color: 'white',
      fontSize: 40,
      fontWeight:'bold'
  },
  femaletexts:{
    color: 'white',
    fontSize: 10,
  },
  femaletextn:{
    color: 'white',
    fontSize: 20,
    fontWeight:'bold'
  },
  femaletexta:{
    color: 'rgb(8, 162, 0)',
    fontSize: 23,
    fontWeight:'bold'
  },
  choice: {
    width:160,
    height: 150,
    marginLeft: 10,
    marginTop:20,
    alignItems: 'center',
   borderRadius:8,
    justifyContent: 'flex-start',
    backgroundColor:'rgb(0,9,80)',
  },
  choic2: {
    width:'90%',
    height: 34,
    alignItems: 'flex-end',
    justifyContent: 'center',
   
  },
  choic: {
    width:'85%',
    height: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
   
  },
  choicx: {
    width:'85%',
    height: 30,
    marginTop:20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
   
   
  },
  next: {
    width:80,
    height: 40,
    alignItems: 'center',
   borderRadius:2,
    justifyContent: 'center',
    backgroundColor:'rgb(8, 162, 0)',
  },
});
