import { StatusBar } from 'expo-status-bar';
import React,{useState,useRef} from 'react';
import {Animated,Easing,FlatList, ScrollView,TouchableWithoutFeedback,StyleSheet, Text, View,Image, Dimensions} from 'react-native';
import Constants from 'expo-constants'
import { Extrapolate } from 'react-native-reanimated';



const Workout =(props)=>{


    
const [start, setStart] = React.useState(false);
   const data=[
        {id: 0, pic: require('../assets/gym/iconm8.png'), workout: 'Squat Jumps',info:`The Squat Jumps is a strength exercise from the Exercise for Better Bones program specifically designed for the Elite Level. The exercise targets the muscles of the calves, quadriceps, buttocks and hips. It also targets the bones in the spine.`,gender:'male' },
        {id: 1, pic: require('../assets/gym/iconm9.png'), workout: 'Squat',info:`Keep shoulders and chest up with back straight and feet wider apart (as of the shoulder width). Take your hips back and then bend your knees and sit as if you are sitting on chair. Slowly come back to the original position and repeat. Ensure to look straight while squatting. Do it in a controlled manner.`,gender:'male'  },
        {id: 2,pic: require('../assets/gym/iconm5.png'),workout:'Weight Squat' ,info:`Body squats are good for warming up the body and raising your core temperature. They are a good way to start your exercise routine. Performed regularly these exercises can help you begin toning your glutes and quads. Body squats are also beneficial because they are a gateway exercise` ,gender:'male' },
        {id: 3,pic: require('../assets/gym/iconm6.png'),workout:'Push-ups',info:`It’s one of the most effective and common do-at-home exercise ever. It’s quite simple to do. Get into plank position. Keep hands under bit outside your shoulder, keep your leg stretched, lower your body until chest gets near to the floor and quickly come back to original position. It basically strengthens your upper body as it’s beneficial for chest, shoulders and triceps. It also strengthens yours thighs and abdominal muscles. `,gender:'male'  },
        {id: 4, pic: require('../assets/gym/iconm2.png'), workout: 'Triceps' ,info:`he Triceps is the “antagonist” to the Biceps.  It is the muscle that operates (moves) the elbow in the opposite direction, to that of the Biceps.  It extends the elbow, primarily.  This means it “increases the angle” of the elbow joint – moving the elbow from the bent position, to the straight arm position`,gender:'male' },
        {id: 5, pic: require('../assets/gym/iconm7.png'), workout: 'Crunches',info:`It’s a traditional exercise for stronger abs. Lie flat on your back, knees bent with feet flat on the floor. Keep the feet apart. Hands to be kept at the base of your head with elbows pointed out. Bring up your head and shoulder off the floor using your abs and go back to the position with control.` ,gender:'male'},
        {id: 6, pic: require('../assets/gym/icom4.png'), workout: 'Leg Raise ' ,info:`Leg raise exercises are one of the best for abdominal areas. You just need to lie on your back, place your hands beside you, palms down. Raise your legs off the ground keeping your knees locked. Hold on to the position as long as you comfortably can and then slowly come back to original position.`,gender:'male' },
        {id: 7, pic: require('../assets/gym/iconm1.png'), workout: 'Mass-Push Ups',info:`If you want to develop your chest and triceps through push-ups, then you should progress by adding weight. Below, we will have a look at a few ways to add weight to push-ups. Since not every method is equal, I’ll talk about their pros and cons in detail too. First up, I’d like to introduce you to arguably the best way of adding weight to your push-ups – using a dip belt` ,gender:'male' },
        {id: 8, pic: require('../assets/gym/iconm3.png'), workout: 'Jumping Jacks' ,info:`. Jumping jack gives flexibility and help you increase the stamina. Keep your feet together and stand tall and keeping hands straight at your sides. While jumping, raise your arms above your head and feet’s apart to the sides. Quickly reverse and come back to standing position with a jump. A one or two minute jumping jack exercises can loosen your muscles with more flow of oxygen into the bloodstream.`,gender:'male' },
        
        {id: 9, pic: require('../assets/gym/icong4.png'), workout: 'Squat',info:`Keep shoulders and chest up with back straight and feet wider apart (as of the shoulder width). Take your hips back and then bend your knees and sit as if you are sitting on chair. Slowly come back to the original position and repeat. Ensure to look straight while squatting. Do it in a controlled manner.` ,gender:'female' },
        {id: 10, pic: require('../assets/gym/icong5.png'), workout: 'Plank Series',info:`Squeeze your elbows in toward each other to engage your lats; lift your heart through your shoulder blades, slightly tuck your tailbone, squeeze your inner thighs, and flex through your heels. Hold for 1 minute.`,gender:'female' },
        {id: 11,pic: require('../assets/gym/icong6.png'),workout:'Plank Jack' ,info:`Plank exercise puts your entire body on work. It’s most vital for abdominals. Get down on the floor on your elbows and toes. Elbows should bent and directly below your shoulders. Keep the body straight while holding on to the position`,gender:'female'},
        {id: 12,pic: require('../assets/gym/iconm7.png'),workout:'Crunches',info:`It’s a traditional exercise for stronger abs. Lie flat on your back, knees bent with feet flat on the floor. Keep the feet apart. Hands to be kept at the base of your head with elbows pointed out. Bring up your head and shoulder off the floor using your abs and go back to the position with control.` ,gender:'female'},
        {id: 13, pic: require('../assets/gym/icong1.png'), workout: 'Hip Rotation' ,info:`Lie flat on the floor and keep the feet apart.  Slowly push up one leg, looking straight and then pull it back. Now raise your other leg and do the same. It’s that simple. It’s great stretching exercise that strengthens your hip muscles and improves flexibility.`,gender:'female'},
        {id: 14, pic: require('../assets/gym/icong8.png'), workout: 'Side Plank',info:`Prop yourself up on your right elbow, with the elbow just underneath the shoulder, with knees bent. Exhale to push hips away from the ground while also lifting the armpit from the floor and driving the entire forearm into the floor` ,gender:'female'},
        {id: 15, pic: require('../assets/gym/icong2.png'), workout: ' Bridge' ,info:`Lie flat your back with arms on your sides, palms down. Keep feet flat on the floor with knees bended. Ensure to keep feet’s apart (hip-width). Now, slowly lift your hip towards ceiling and hold on to the position for a while and then come back to original position. Bridge pose helps you get relief from lower back pain and helps you fight hypertension.`,gender:'female'},
        {id: 16, pic: require('../assets/gym/icong9.png'), workout: 'Leg Stand',info:`Do the basic one to start with. Keep shoulders and chest up with back straight and feet wider apart (as of the shoulder width). Take your hips back and then bend your knees and sit as if you are sitting on chair. Slowly come back to the original position and repeat. Ensure to look straight while squatting. Do it in a controlled manner. ` ,gender:'female'},
        {id: 17, pic: require('../assets/gym/icong3.png'), workout: 'Jumping Jacks' ,info:` Jumping jack gives flexibility and help you increase the stamina. Keep your feet together and stand tall and keeping hands straight at your sides. While jumping, raise your arms above your head and feet’s apart to the sides. Quickly reverse and come back to standing position with a jump. A one or two minute jumping jack exercises can loosen your muscles with more flow of oxygen into the bloodstream. `,gender:'female'},
        
    ]



    const rotate_one= new Animated.Value(0)
    const rotate_two=new Animated.Value(0)
    
    const starting = () => {  
 setStart(!start)
  
  }

  React.useEffect(() => {

    Animated.timing(rotate_one, {
        toValue: 180,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
    }).start()

    setTimeout(() => {
        Animated.timing(rotate_two, {
            toValue: 180,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start()
    }, 2900)
    }, [start])

    const { add, select } = props.route.params;
    console.log('prop',props.route.params)
const choice=select==='none'?data.filter(e=> e.gender===add):data.filter(e=> e.gender===add && e.workout===select)


  
  const Width = Dimensions.get('window').width;
   const scrollX=useRef(new Animated.Value(0)).current
 
   const turn=rotate_one.interpolate({
    inputRange:[0,180],
       outputRange: ['0deg', '180deg'],
    extrapolate:Extrapolate.CLAMP
   })
    
   const turn2=rotate_two.interpolate({
    inputRange:[0,180],
       outputRange: ['0deg', '180deg'],
    extrapolate:Extrapolate.CLAMP
})

    
  return(
    <View style={styles.container}>
     <View style={{width: '100%',height: Constants.statusBarHeight}}></View>
          <View style={styles.typeofw}>

         {choice.map(e=>{

             const  scrollys=scrollX.interpolate({
                inputRange:[-Width,0,Width],
                outputRange:[40,0,-40],
            })
    return(  <Animated.View key={e.id} style={{
  width: '40%',
        height: 40,
        transform:[
               {translateY:scrollys},
        ] ,
        alignItems: 'flex-start',
        justifyContent: 'center',
     } }>
          <Text style={styles.mint}>{e.workout}</Text>
          </Animated.View>)})}

          </View>
          
          <View style={styles.typeofw2}>
         
        <Animated.FlatList 

        keyExtractor={item=>item.id.toString()}
        data={choice}
       renderItem={({item,index})=>{
            const inputRange=[(index-1)*Width,index*Width,(index+1)*Width]
            const scale=scrollX.interpolate({
                inputRange,
                outputRange:[0,1,0],
            })
             return(
       <Animated.View  key={item.id}style={{justifyContent:'center',transform:[{scale}],alignItems:'center'  ,width:Dimensions.get('window').width ,height: '100%'}}>
       <Image  source={item.pic} style={{tintColor:'blue', width: 80,height: 80, borderRadius: 7,shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.100,
shadowRadius:1,
}} />
 </Animated.View>
)}}
 pagingEnabled  
showsHorizontalScrollIndicator={false}
 horizontal

onScroll={Animated.event(
    [{nativeEvent:{contentOffset:{x:scrollX}}}],
    {useNativeDriver:true}
)}
scrollEventThrottle={16}

         
/>

            </View>





          
            <View style={styles.typeofw3}>

            {start===false?   <TouchableWithoutFeedback onPress={starting}>
            <View style={styles.round}>
            <Text style={styles.min}>Start !</Text>  
            </View>
          </TouchableWithoutFeedback>        :<View style={styles.absolu}>
            <View style={styles.round2}>
                  <View style={styles.rwidup}>  
                      <Animated.View style={{
                     width: 110,
                     height: 55,
                     alignItems: 'center',
                     justifyContent: 'flex-start',
                          overflow: 'hidden',
                          transform:[
                              { translateY:55/2 },
                              { rotateZ: turn },
                              { translateY:-55/2 },
                            ]
              } }>    
              <View style={styles.roudup}></View>
                  </Animated.View>

                  </View>
 <View style={styles.rwiddown}>
                     <Animated.View style={{
                     width: 110,
                     height:55,
                     alignItems: 'center',
                     justifyContent: 'flex-start',
                    overflow: 'hidden',
                          transform: [
                            { translateY:-55/2 },
                              { rotateZ: turn2 },
                             { translateY:55/2 },
                             
                     ]
              } }>    
              <View style={styles.roudwni}></View>
                  </Animated.View>
                  </View>
                      </View>

                      <TouchableWithoutFeedback onPress={starting}>
                      <View style={styles.viewss}>
                             <Text style={styles.min}>30 <Text style={styles.min2}>min</Text></Text>
              </View>
              </TouchableWithoutFeedback>

</View>}
              
             






            </View>







          
          <View style={styles.typeofw4}>
             <View style={styles.typeofw5}>
             <Text style={styles.min}>ABOUT WORKOUT</Text>
           </View>
            <View style={styles.typeofw6}>


{choice.map(e=>{
    
   const inputRange=[-250+1,0,250-11]

    const translating=scrollX.interpolate({
                inputRange,
                outputRange:[200,0,-200],
            })

            const  speed=scrollX.interpolate({
                inputRange:[-250+1,0,8000],
                outputRange:[e.id*0.8,0,-e.id*0.8],
            })
    
    return(<Animated.View key={e.id} 
style={{   width: '100%',
         height: 200,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        transform:[
               {translateX:translating},
        ]
      }}>
            <View style={styles.typeofwsd}>
             <Animated.Text style={{
                 fontSize: 15,
        color: 'white', 
        fontWeight:'bold',
        transform:[
               {translateX:speed},
        ]
        }}>{e.workout}</Animated.Text>
           </View>
            <View style={styles.typeofwsdt}>
            <Text style={styles.minst}>{e.info.slice(0,300)} ...</Text>
           </View>
<TouchableWithoutFeedback onPress={()=>props.navigation.navigate('Stream', { add:'male'})}>
            <View style={styles.wartch}>
             <Text style={{
                 fontSize: 12,
        color: 'white', 
        fontWeight:'bold',
       
        }}>WATCH</Text>
           </View>
           </TouchableWithoutFeedback>
</Animated.View>)})}




           </View>
           </View>
    </View>
  );

}

export default Workout;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgb(2, 6, 48)',
  
    },
    typeofw: {
        width: '95%',
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    overflow:'hidden'
  
    },
   

    typeofw2: {
        width: '100%',
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
      
    },
    typeofw3: {
        width: '95%',
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
     
    },
     typeofw4: {
        width: '95%',
        marginTop:2,
        height: 200,
        alignItems: 'center',
        justifyContent: 'flex-start',
         flexDirection:'row',
       },

typeofwsd: {
        width: '90%',
        height: 45,
        marginLeft:10,
        alignItems: 'center',
        justifyContent: 'flex-start',
         flexDirection:'row',
           marginTop:10,
       
       },

       typeofwsdt: {
        width: '90%',
        height: 105,
        marginLeft:10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
         flexDirection:'row',
      },

       wartch: {
        width: 70,
        height: 30,
        marginRight:20,
        alignSelf:'flex-end',
        marginLeft:10,
        alignItems: 'center',
        justifyContent: 'center',
         flexDirection:'row',
         backgroundColor:'rgb(8, 162, 0)'
      },

    typeofw5: {
        width:195,
         height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'blue',
        transform:[
               {translateX:-80},
         
            {rotateZ:'-90deg'}
        ],
         borderWidth:2,
          
    },

 
    typeofw6: {
        width: '88%',
         height: 200,
         overflow:'hidden',
         flexDirection:'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
         transform:[
               {translateX:-150},
        ]
       
          
    },


    round: {
        width: 110,
        height: 110,
        alignItems: 'center',
        borderRadius: 110,
        borderColor: 'rgb(8, 162, 0)',
        borderWidth:6,
        justifyContent: 'center',
      
    },

    

    roudup: {
        width: 110,
        height: 110,
        borderRadius: 110,
        marginTop:-1, 
        alignItems: 'center',
        justifyContent: 'center',
       backgroundColor:'rgb(2, 6, 48)'
      
    },
    roudwni: {
        width: 110,
        height: 110,
        marginTop:-49,               
        borderRadius: 110,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgb(2, 6, 48)'
  
    },

    rwidup: {
        width: 110,
        height: 55,
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow:'hidden'
    },

    rwiddown: {
        width: 110,
        height: 55,
        alignItems: 'center',
        justifyContent: 'flex-start',
         overflow:'hidden'
    },

    absolu: {
        width: 110,
        height: 110,
        alignItems: 'center',
        borderRadius:110,
        justifyContent: 'center',
      backgroundColor:'rgb(8, 162, 0)'
    },

    viewss: {
        position:'relative',
        width: 105,
        height: 105,
        alignItems: 'center',
        borderRadius:105,
        justifyContent: 'center',
      backgroundColor:'rgb(2, 6, 48)'
    },

    round2: {
        position:'absolute',
        width: 110,
        height: 110,
        alignItems: 'center',
        borderRadius:110,
        justifyContent: 'flex-start',
      backgroundColor:'rgb(8, 162, 0)',
      transform:[
                              { rotateZ:'91deg' },
                             ]
    },



    min: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
     minb: {
        fontSize: 15,
        color: 'white', 
        fontWeight:'bold',
       
    },
mint: {
        fontSize: 15,
        fontWeight:'bold',
        color:'white',
        textTransform:'uppercase',
       // capitalize
    },

minst: {
        fontSize: 12,
        color:'white'
    },

    min2: {
        color:'rgb(8, 162, 0)'
    }

})
