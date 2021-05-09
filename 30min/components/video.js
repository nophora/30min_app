
import * as React from 'react';
import {Animated,PanResponder,TouchableWithoutFeedback ,  Button,StyleSheet, FlatList, Text, View,Image,ScrollView, Dimensions} from 'react-native';
import Constants from 'expo-constants'
import {LinearGradient} from 'expo-linear-gradient'
import  {Video, AVPlaybackStatus} from 'expo-av'




const Videop=(props)=>{

 
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [touch, setTouch] = React.useState(false);
  const [current, setCurrent] = React.useState(0);
 

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const translate= new Animated.Value(0)





 const scroll = PanResponder.create({

    onStartShouldSetPanResponder: () => {
   //   console.log(' translate')
     if (status.isPlaying) {
       video.current.pauseAsync()
       setTouch(true)
     }
      return true
    } ,
   
   onPanResponderMove: (e, gestureState) => {
    //console.log('move', gestureState.dy)
      Animated.event([
        null,
        { dy:translate }
      ], {useNativeDriver: false})(e, gestureState)
     
    },

   onPanResponderRelease: () => {
     const json = parseInt(JSON.stringify(translate))
     const by2 = windowHeight / 4
     const micros = by2 / 2
     const adding=by2+micros
      console.log('release', json)
      // - 220 160
   
       if (json < 0) {
         Animated.spring(translate, {
           toValue: json < 0 && json < (-1 * (adding)) ? current - windowHeight : 0,
           useNativeDriver: false
         }
         ).start(() => {
           if (touch) {
             video.current.playAsync()
           }
           setTouch(false)
           setCurrent(current - windowHeight)
           translate.extractOffset()
         })
       } else {
         
        Animated.spring(translate, {
          toValue: json > 0 && json > adding ? current + windowHeight : 0,
          useNativeDriver: false
        }
        ).start(() => {
          if (touch) {
            video.current.playAsync()
          }
          setTouch(false)
          setCurrent(current + windowHeight)
          translate.extractOffset()
        }) 
         
      
       
       
     }
       
   
    
      
    }
  })




  
  
/*

<View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>


*/

  return(
  
    <Animated.View style={{
      width:'100%',
      height:Dimensions.get('window').height,
     
      alignItems: 'center',
      justifyContent: 'flex-start',
                borderTopLeftRadius:props.edge,
                borderTopRightRadius: props.edge,
              
      opacity: props.opacity,
      overflow: 'hidden'
                
    }} >



<Animated.View  style={
        {
          width: windowWidth,
          height: windowHeight,
          justifyContent: 'flex-start',
          alignItems: 'center',
          transform: [
            {translateY:translate}
          ],  
        }}
        {...scroll.panHandlers}
          >
<Video
        ref={video}
        style={
          {
            width: windowWidth,
            height: windowHeight,
            position: 'absolute',
          }
        }
        source={require('../assets/tiktok2.mp4')}
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      
        />

<View style={
          {
            width: windowWidth,
            height: windowHeight,
            position: 'relative',
           }
        }>

        <View style={
          {
            width:'100%',
            height: windowHeight-30,
            flexDirection:'row',
          }
        }>
          <View style={styles.row1}>
            <View style={styles.row1mg}>

            <View style={styles.spantxt}>
              <Text style={styles.spantxt2}>@ Mendy Flora</Text>
              <View style={styles.spantxtc}>
                  <Text style={styles.spantxt2c}>follow</Text>
              </View>
              </View>
 <View style={styles.spantxtsymb}>
                <Text style={styles.spantxt2sy}>
                  i like the bottom left one quite
                  a lot, the combination of the purple
                  and the typography 👌🏻.
                  And personally 
                  like the blue gradient that's
                      added on the other two.</Text>
              </View>
              <View style={styles.wrpmmusic}>
                <View style={styles.musicmg}>
                <Image style={styles.imgmusic} source={require('../assets/she2.png')} />
                </View>
                <View style={styles.musictext}>
                <Text style={styles.lockedup}>Lil Durk-Locked up</Text>
                </View>
              </View>

              </View>
</View>
          <View style={styles.row2}>
          <View style={styles.row2mg}>
              <View style={styles.fiten1}>

                <View style={styles.iconsp}>
                <Image style={styles.iconpfil} source={require('../assets/lilwal.jpg')} />
                <View style={styles.iconorg}>
                  <Text style={styles.locliep}>+</Text>
                  </View>
                </View>
                
                <View style={styles.icons}>
                <Image style={styles.imgmusicun} source={require('../assets/loveun.png')} />
                <Text style={styles.loclike}>57.3K</Text>
                </View>

                <View style={styles.icons}>
                <Image style={styles.imgmusicmg} source={require('../assets/mesagw.png')} />
                <Text style={styles.loclike}>573</Text>
                </View>
                
                <View style={styles.icons}>
                <Image style={styles.imgmusicun} source={require('../assets/she3.png')} />
                <Text style={styles.loclike}>7.3K</Text>
              </View>

              </View>
              <TouchableWithoutFeedback onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          } >
              <View  style={styles.fitne2}>
              <Image style={styles.locked} source={require('../assets/lockedup.png')} />
                </View>
                </TouchableWithoutFeedback>
          </View>
</View>

        </View>
        <View style={styles.voluz}></View>
        </View>

       

      </Animated.View>
      


      




    </Animated.View>


  );

}

export default Videop;

const styles = StyleSheet.create({
  container: {
        width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    backgroundColor: 'rgb(255, 145, 0)',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  voluz: {
    width:'100%',
    height: 20,
   },

  row1: {
    width:Dimensions.get('window').width-70,
    height:'100%',
   alignItems: 'center',
    justifyContent: 'flex-end',
  },
  row2: {
    width:70,
    height:'100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    },
  row1mg: {
    width:'100%',
    height: '25%',
    justifyContent: 'flex-start',
  },
  row2mg: {
    width:'100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
   },
  spantxt: {
    width: '100%',
    flexDirection:'row',
  },
  spantxtsymb: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    marginTop:5,
  },
  spantxtc: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'orange',
    borderWidth:2,
    marginLeft:5,
    borderRadius:7
    
  },
  spantxt2: {
    color: 'white',
    marginLeft:5,
    maxWidth:'100%',
    fontWeight: 'bold',
    fontSize:14,
   
  },
  spantxt2sy: {
    color: 'white',
    marginLeft:5,
    maxWidth:'100%',
    fontSize:12
  },

  spantxt2c: {
    color: 'white',
     fontSize:12,
  },
 wrpmmusic: {
    width: '100%',
   height: 50,
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection: 'row',
   
   
    marginTop:3,
  },

  musicmg: {
    width: '20%',
   height: 30,
    justifyContent:'center',
    alignItems:'center',
  
  
  },
  musictext: {
    width: '80%',
   height: 30,
    justifyContent:'center',
    alignItems:'flex-start',
    overflow: 'hidden'
   
  },

  imgmusic: {
    width:  25,
    height: 25
  },
  imgmusicun: {
    width:  50,
    height: 50
  },
  imgmusicmg: {
    width:  46,
    height: 46
  },
  loclike: {
    color: 'white',
    fontSize: 12,
     fontWeight:'bold'
  },
  lockedup: {
    color: 'white',
     fontSize:13,
  },

  fiten1: {
    width:  '100%',
    height: '70%',
   justifyContent:'flex-start',
    alignItems:'center',
   
  },
  fitne2: {
    width:  '100%',
    height: '30%',
   justifyContent:'flex-end',
    alignItems:'center',
   
  },
  locked: {
    width:  50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor:'orange'
  },
  iconsp: {
    width:  65,
    height: 65,
    marginTop: 4,
    justifyContent:'center',
    alignItems:'center',
 },
  
icons: {
  width:  65,
  height: 65,
  marginTop: 4,
  justifyContent:'space-around',
  alignItems:'center',
  },
  iconpfil: {
    width:  50,
    height: 50,
    position:'absolute',
    borderRadius: 50,
    borderWidth: 2,
    borderColor:'white',
    justifyContent:'space-around',
    alignItems:'center',
  },
  iconorg: {
    width:  15,
    height: 15,
    borderRadius: 15,
    position: 'relative',
    backgroundColor:'orange',
    marginTop: 48,
    justifyContent: 'center',
    alignItems:'center',
  },
  locliep: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: -4,
    fontSize: 14,
  }
});
