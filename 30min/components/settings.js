import { StatusBar } from 'expo-status-bar';
import React,{ useState} from 'react';
import {Animated, StyleSheet, BackHandler, Text, View,Image,TouchableWithoutFeedback, Dimensions} from 'react-native';
import Constants from 'expo-constants'


const Settings =()=> {

const [notifications,setNotifications]= useState(new Animated.Value(0))
const [autoplay,setAutoplay]=useState(new Animated.Value(0))

const [min,setMin]=useState({
min1:true,
min2:false,
min3:false,

})

const min1=()=>{
   setMin({
min1:true,
min2:false,
min3:false,
   }) 
}

const min2=()=>{
   setMin({
min1:false,
min2:true,
min3:false,
   }) 
}

const min3=()=>{
   setMin({
min1:false,
min2:false,
min3:true,
   }) 
}

const notify=()=>{
const json = parseInt(JSON.stringify(notifications))
     Animated.timing(notifications, {
                toValue: json===0?1:0,
                duration: 500,
                 useNativeDriver: false,
        }).start()
       
}

const btautoplay=()=>{
const jsonX = parseInt(JSON.stringify(autoplay))
     Animated.timing(autoplay, {
                toValue: jsonX===0?1:0,
                duration: 500,
                 useNativeDriver: false,
        }).start()
      
}


const xtrans = notifications.interpolate({
      inputRange:[0,1],
      outputRange: [0,38]
    })
const xcolor = notifications.interpolate({
      inputRange:[0,1],
      outputRange: ['rgba(8, 162,0, 0.1)','rgba(8, 162,0,0.900)']
    })


    
const outx = autoplay.interpolate({
      inputRange:[0,1],
      outputRange: [0,38]
    })
const outcolor = autoplay.interpolate({
      inputRange:[0,1],
      outputRange: ['rgba(8, 162,0, 0.1)','rgba(8, 162,0,0.900)']
    })

    
  return(
 <View style={styles.container}>
 <View style={{width: '100%', backgroundColor: 'rgb(8, 162, 0)',height: Constants.statusBarHeight}}></View>
    <View style={styles.settings}> 
<Text style={styles.sttext}>
        Settings
       </Text>
    </View>
    <View style={styles.settings2}> 



<View style={styles.bar}> 
<View style={styles.bar1}> 
<Text style={styles.sittext}>
        Notifications
       </Text>
    </View>
    <View style={styles.bar2}> 
    <TouchableWithoutFeedback onPress={notify}>
    <Animated.View style={{
          width:70,
        height:30,
        borderRadius:30,
        borderWidth:3,
 justifyContent: 'center',
       borderColor:'rgb(8, 162, 0)',
        backgroundColor: xcolor,
    }}> 
<Animated.View style={{
  width: 25,
        height:25,
        borderRadius:28,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
 transform:[
               {translateX:xtrans},
        ]

}}> 

    </Animated.View>
    </Animated.View>
</TouchableWithoutFeedback>
    </View>
    </View>



<View style={styles.bar}> 
<View style={styles.bar1}> 
<Text style={styles.sittext}>
        Auto Play
       </Text>
    </View>
    <View style={styles.bar2}> 
     <TouchableWithoutFeedback onPress={btautoplay}>
    <Animated.View style={{
          width:70,
        height:30,
        borderRadius:30,
        borderWidth:3,
 justifyContent: 'center',
       borderColor:'rgb(8, 162, 0)',
        backgroundColor: outcolor,
    }}> 
<Animated.View style={{
    width: 25,
        height:25,
        borderRadius:28,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
 transform:[
               {translateX:outx},
        ]
}}> 

    </Animated.View>
    </Animated.View>
</TouchableWithoutFeedback>
    </View>
    </View>




<View style={styles.bar}> 
<View style={styles.bar1}> 
<Text style={styles.sittext}>
        About Us
       </Text>
    </View>
   

  
    </View>



<View style={styles.time}> 
<View style={styles.time1}> 
<Text style={styles.sittext}>
        Time Stamp
       </Text>
</View>
<View style={styles.time2}> 

<View style={styles.stemp1}> 
<Text style={styles.stmptext}>
        15 <Text style={styles.stmptext2}>min</Text>
       </Text>
</View>

<View style={styles.stemp2}> 
<Text style={styles.stmptext}>
        30 <Text style={styles.stmptext2}>min</Text>
       </Text>
</View>
<View style={styles.stemp3}> 
<Text style={styles.stmptext}>
        45 <Text style={styles.stmptext2}>min</Text>
       </Text>
</View>



</View>

</View>


    </View>

 </View>
  )

   
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgb(2, 6, 48)',
  
    },
    settings: {
        width: Dimensions.get('window').width,
        height:70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(8, 162, 0)',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
  
    },
    settings2: {
        width: Dimensions.get('window').width,
        height:350,
        alignItems: 'center',
        justifyContent: 'flex-start',
       
  
    },
    bar: {
        marginTop:5,
        width: Dimensions.get('window').width,
        height:60,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'flex-start',
    },
     time: {
           marginTop:5,
        width: Dimensions.get('window').width,
        height:100,
        alignItems: 'center',
        justifyContent: 'flex-start',
     },

  time1: {
       width: Dimensions.get('window').width,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
    },

 time2: {
          marginTop:5,
       width: '95%',
       borderRadius:10,
        height:50,
         flexDirection:'row',
         borderWidth:2,
         borderColor:'rgb(8, 162, 0)',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

      bar1: {
        width: '60%',
        height:60,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
      bar2: {
        width: '40%',
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
    },

      stemp1: {
        width: '33%',
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
       borderRightWidth:2,
        borderColor:'rgb(8, 162, 0)',
        backgroundColor:'rgb(8, 162, 0)'
    },
     stemp2: {
        width: '33%',
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth:2,
        borderColor:'rgb(8, 162, 0)'
    },
   
    stemp3: {
        width: '33%',
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        },
   
   
    dot: {
        width: 25,
        height:25,
        borderRadius:28,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    sttext:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
     stmptext:{
        fontSize:13,
        fontWeight:'bold',
        color:'white'
    },
    stmptext2:{
        color:'rgb(8, 162, 0)'
    },
    sittext:{
        marginLeft:10,
        fontSize:14,
        fontWeight:'bold',
        color:'white'
    }
})
