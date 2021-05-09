
import * as React from 'react';
import {Animated,PanResponder,TouchableWithoutFeedback ,  Button,StyleSheet, FlatList, Text, View,Image,ScrollView, Dimensions} from 'react-native';
import Constants from 'expo-constants'
import {LinearGradient} from 'expo-linear-gradient'
import  {Video, AVPlaybackStatus} from 'expo-av'
import {useSelector,useDispatch } from 'react-redux';




const Videop=(props)=>{

  const video = React.useRef(null);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [status, setStatus] = React.useState({}); 
  const states = useSelector(state => state)
  
  const videop=`${states.gender}.mp4`
  console.log('video',states.gender)
 
  return(
  
        <View style={styles.container}>
            <Video
              ref={video}
              style={
                {
                  width: windowWidth,
                  height: windowHeight-85, 
                  position: 'absolute',
                }
              }
              useNativeControls
              shouldPlay
              source={{
          uri: `http://localhost:8080/gym/videostream/${videop}`,
        }}
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={status => setStatus(() => status)}
      
            />
 </View>
        
     


  );

}

export default Videop;

const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    backgroundColor: 'rgb(2, 6, 48)',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
