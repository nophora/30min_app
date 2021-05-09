import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ScrollView,TextInput,TouchableWithoutFeedback,StyleSheet, Text, View,Image, Dimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import Constants from 'expo-constants'


class Search extends React.Component{
  
  state = {
    search:'',
    data:[
      {id: 0, pic: require('../assets/gym/abs.jpg'), workout: 'Squat Jumps',info:`The Squat Jumps is a strength exercise from the Exercise for Better Bones program specifically designed for the Elite Level. The exercise targets the muscles of the calves, quadriceps, buttocks and hips. It also targets the bones in the spine.`,gender:'male' },
      {id: 1, pic: require('../assets/gym/back.jpg'), workout: 'Squat',info:`Keep shoulders and chest up with back straight and feet wider apart (as of the shoulder width). Take your hips back and then bend your knees and sit as if you are sitting on chair. Slowly come back to the original position and repeat. Ensure to look straight while squatting. Do it in a controlled manner.`,gender:'male'  },
      {id: 2,pic: require('../assets/gym/home.jpg'),workout:'Weight Squat' ,info:`Body squats are good for warming up the body and raising your core temperature. They are a good way to start your exercise routine. Performed regularly these exercises can help you begin toning your glutes and quads. Body squats are also beneficial because they are a gateway exercise` ,gender:'male' },
      {id: 3,pic: require('../assets/gym/images.jpg'),workout:'Push-ups',info:`It’s one of the most effective and common do-at-home exercise ever. It’s quite simple to do. Get into plank position. Keep hands under bit outside your shoulder, keep your leg stretched, lower your body until chest gets near to the floor and quickly come back to original position. It basically strengthens your upper body as it’s beneficial for chest, shoulders and triceps. It also strengthens yours thighs and abdominal muscles. `,gender:'male'  },
      {id: 4, pic: require('../assets/gym/six.jpg'), workout: 'Triceps' ,info:`he Triceps is the “antagonist” to the Biceps.  It is the muscle that operates (moves) the elbow in the opposite direction, to that of the Biceps.  It extends the elbow, primarily.  This means it “increases the angle” of the elbow joint – moving the elbow from the bent position, to the straight arm position`,gender:'male' },
      {id: 5, pic: require('../assets/gym/slid.jpeg'), workout: 'Crunches',info:`It’s a traditional exercise for stronger abs. Lie flat on your back, knees bent with feet flat on the floor. Keep the feet apart. Hands to be kept at the base of your head with elbows pointed out. Bring up your head and shoulder off the floor using your abs and go back to the position with control.` ,gender:'male'},
      {id: 6, pic: require('../assets/gym/squt.jpg'), workout: 'Leg Raise ' ,info:`Leg raise exercises are one of the best for abdominal areas. You just need to lie on your back, place your hands beside you, palms down. Raise your legs off the ground keeping your knees locked. Hold on to the position as long as you comfortably can and then slowly come back to original position.`,gender:'male' },
      {id: 7, pic: require('../assets/gym/squt1.jpg'), workout: 'Mass-Push Ups',info:`If you want to develop your chest and triceps through push-ups, then you should progress by adding weight. Below, we will have a look at a few ways to add weight to push-ups. Since not every method is equal, I’ll talk about their pros and cons in detail too. First up, I’d like to introduce you to arguably the best way of adding weight to your push-ups – using a dip belt` ,gender:'male' },
      {id: 8, pic: require('../assets/gym/squt2.jpg'), workout: 'Jumping Jacks' ,info:`. Jumping jack gives flexibility and help you increase the stamina. Keep your feet together and stand tall and keeping hands straight at your sides. While jumping, raise your arms above your head and feet’s apart to the sides. Quickly reverse and come back to standing position with a jump. A one or two minute jumping jack exercises can loosen your muscles with more flow of oxygen into the bloodstream.`,gender:'male' },
      
      {id: 9, pic: require('../assets/gym/squt3.jpg'), workout: 'Squat',info:`Keep shoulders and chest up with back straight and feet wider apart (as of the shoulder width). Take your hips back and then bend your knees and sit as if you are sitting on chair. Slowly come back to the original position and repeat. Ensure to look straight while squatting. Do it in a controlled manner.` ,gender:'female' },
      {id: 10, pic: require('../assets/gym/squt4.jpg'), workout: 'Plank Series',info:`Squeeze your elbows in toward each other to engage your lats; lift your heart through your shoulder blades, slightly tuck your tailbone, squeeze your inner thighs, and flex through your heels. Hold for 1 minute.`,gender:'female' },
      {id: 11,pic: require('../assets/gym/squt5.jpg'),workout:'Plank Jack' ,info:`Plank exercise puts your entire body on work. It’s most vital for abdominals. Get down on the floor on your elbows and toes. Elbows should bent and directly below your shoulders. Keep the body straight while holding on to the position`,gender:'female'},
      {id: 12,pic: require('../assets/gym/squt6.jpg'),workout:'Crunches',info:`It’s a traditional exercise for stronger abs. Lie flat on your back, knees bent with feet flat on the floor. Keep the feet apart. Hands to be kept at the base of your head with elbows pointed out. Bring up your head and shoulder off the floor using your abs and go back to the position with control.` ,gender:'female'},
      {id: 13, pic: require('../assets/gym/squt7.jpg'), workout: 'Hip Rotation' ,info:`Lie flat on the floor and keep the feet apart.  Slowly push up one leg, looking straight and then pull it back. Now raise your other leg and do the same. It’s that simple. It’s great stretching exercise that strengthens your hip muscles and improves flexibility.`,gender:'female'},
      {id: 14, pic: require('../assets/gym/squt1.jpg'), workout: 'Side Plank',info:`Prop yourself up on your right elbow, with the elbow just underneath the shoulder, with knees bent. Exhale to push hips away from the ground while also lifting the armpit from the floor and driving the entire forearm into the floor` ,gender:'female'},
      {id: 15, pic: require('../assets/gym/squt2.jpg'), workout: ' Bridge' ,info:`Lie flat your back with arms on your sides, palms down. Keep feet flat on the floor with knees bended. Ensure to keep feet’s apart (hip-width). Now, slowly lift your hip towards ceiling and hold on to the position for a while and then come back to original position. Bridge pose helps you get relief from lower back pain and helps you fight hypertension.`,gender:'female'},
      {id: 16, pic: require('../assets/gym/squt13.jpg'), workout: 'Leg Stand',info:`Do the basic one to start with. Keep shoulders and chest up with back straight and feet wider apart (as of the shoulder width). Take your hips back and then bend your knees and sit as if you are sitting on chair. Slowly come back to the original position and repeat. Ensure to look straight while squatting. Do it in a controlled manner. ` ,gender:'female'},
      {id: 17, pic: require('../assets/gym/squt14.jpg'), workout: 'Jumping Jacks' ,info:` Jumping jack gives flexibility and help you increase the stamina. Keep your feet together and stand tall and keeping hands straight at your sides. While jumping, raise your arms above your head and feet’s apart to the sides. Quickly reverse and come back to standing position with a jump. A one or two minute jumping jack exercises can loosen your muscles with more flow of oxygen into the bloodstream. `,gender:'female'},
      
  ],
  close:false
   
}



search = (text) => {
      this.setState({ search: text })
   }

close=()=>{
  if(this.state.close===false){
   this.setState({ close:true })
  }
}
              

  render() {
    const found = this.state.data.filter(f => { return f.workout.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1; });

  return(
    <View style={styles.container}>
      <View style={styles.picview}>
        <Image source={require('../assets/gym/bseach.jpg')} style={{ width: '100%',height: '100%',position:'absolute'}} />
    
         <LinearGradient colors={["rgba(2, 6, 48,0.10)","rgba(2, 6, 48,0.800)","rgb(2, 6, 48)", "rgb(2, 6, 48)"]} style={styles.boxlinier}>
        
     </LinearGradient> 
    </View>


     <View style={styles.searchbord}>
 <View style={{width: '100%',height: Constants.statusBarHeight}}></View>
      <View style={styles.discover}>
      <View style={styles.discover2y}>

<View style={styles.discovertext}>
 <Text style={styles.searchtext}>Discover</Text>
            </View>

            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Welcomegym', { back:'back' })}>          
<View style={styles.discoverdot}>
<View style={styles.line1}>
</View>
<View style={styles.line2}>
</View>
</View>
 </TouchableWithoutFeedback>
</View>
</View>

<View style={styles.discover2}>

<TouchableWithoutFeedback onPress={this.close}>
<View style={styles.inputsech}>
{
this.state.close?
<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Search workout"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.search}/>

  :<View style={styles.wordsflex}>
<View style={styles.words}>
 <Text style={styles.searchtext}>Search workout</Text>
</View>
    <Image source={require('../assets/gym/search.png')} style={{ width: 27, height: 27}} />
</View>
  }
</View>
</TouchableWithoutFeedback>
</View>

<View style={styles.discover3}>
 <ScrollView
Style={{ width: '100%', alignItems: 'center',
justifyContent: 'center',backgroundColor:'pink' }}  >
           
            {this.state.search.length <= 0?
            <View style={styles.notfound}>
            </View>
             :this.state.search.length > 0 && typeof found[0] !== 'object'?
            <View style={styles.notfound}>
            <Text style={styles.searchtext}>workout found not</Text>
            </View>
             :found.map(e => {
              return (
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Workout', { add: e.gender,select:e.workout})}  key={e.id.toString()} >
                <View  style={styles.findbox}>
                <Image source={e.pic} style={{ width: 70, height: 70, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, }} />
                <View style={styles.findbox1}>
                  <View style={styles.findtext}>
                        <Text style={styles.searchtextw}>{e.workout}</Text>
                  </View>
                  <View style={styles.findtext2}>
                    <Text style={styles.searchtexts}>{e.info.slice(0,49)}</Text>
                  </View>
              
                </View>
                <View style={styles.findbox2}>
                  <View style={styles.findboxc}>
                        <Text style={styles.searchtexta}>{e.gender}</Text>
                  </View>
                </View>
                  </View>
                  </TouchableWithoutFeedback>
              )})}
           
            
 </ScrollView>
</View>

      </View>
    
    </View>
  );
}
}

export default Search;

const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'flex-start',
  backgroundColor:  'rgb(2, 6, 48)',
  
    },

     picview: {
         position:'absolute',
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent:'flex-start',
  
    },
  
   boxlinier: {
    width:Dimensions.get('window').width,
    height:'100%',
    position:'relative',
     alignItems: 'center',
    justifyContent: 'flex-start',
  
    },

     searchbord: {
    width:Dimensions.get('window').width,
    height:'100%',
    position:'relative',
     alignItems: 'center',
    justifyContent: 'flex-start',
 
    },
discover:{
      width:Dimensions.get('window').width,
    height:100,
    position:'relative',
     alignItems: 'center',
    justifyContent: 'flex-end',
 
    },
    discover2:{
      width:Dimensions.get('window').width,
    height:60,
    position:'relative',
     alignItems: 'center',
    justifyContent: 'center',
 
    },

    discover3:{
      width:'100%',
      height: 348,
    
  },

  notfound:{
      width:'100%',
      height: 78,
        alignItems: 'center',
    justifyContent: 'center',
   
     
  },
    
  findbox:{
    width: '95%',
    alignSelf:'center',
    height: 70,
    borderRadius: 8,
    flexDirection:'row',
  marginTop:5,
   alignItems: 'center',
  justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,9,80,0.500)',

  },

  findbox1:{
    width: '58%',
    marginLeft:5,
    alignSelf:'center',
    height: 70,
    alignItems: 'flex-start',
  justifyContent: 'flex-start',
 
  },
  findbox2:{
    width: 40,
    marginLeft:5,
    alignSelf:'center',
    height: 65,
    alignItems: 'flex-start',
  justifyContent: 'flex-end',
  },

  findboxc:{
    width: 30,
   alignSelf:'center',
    height: 30,
    borderWidth: 2,
    borderColor:'rgb(8, 162, 0)',
    borderRadius:30,
    alignItems: 'center',
  justifyContent: 'center',
 
  },

  findtext:{
    width: '100%',
     height:30,
    alignItems: 'flex-start',
  justifyContent: 'center',
   },

  findtext2:{
    width: '100%',
     height:40,
    alignItems: 'flex-start',
  justifyContent: 'flex-start',
  
  },
  searchtextw: {
    fontWeight: 'bold',
    color:'white'
  },
  searchtexts: {
    fontSize:11,
      color:'white'
  },
  searchtexta: {
    fontSize:7,
      color:'white'
  },
      discover2y:{
      width:'95%',
    height:50,
    position:'relative',
     alignItems: 'center',
     flexDirection:'row',
    justifyContent: 'space-between',
  
    },

     inputsech:{
      width:'95%',
    height:40,
    position:'relative',
     alignItems: 'center',
     flexDirection:'row',
    justifyContent: 'space-around',
   backgroundColor: 'rgba(0, 13, 160, 0.654)',
   borderRadius:40,
  
  
    },

     wordsflex:{
      width:'100%',
    height:40,
    position:'relative',
     alignItems: 'center',
     flexDirection:'row',
    justifyContent: 'space-around',
  
 
  
    },

      discovertext:{
      width:100,
    height:30,
    position:'relative',
     alignItems: 'center',
    justifyContent: 'center',
  backgroundColor: 'rgb(8, 162, 0)',
  borderRadius:15,
    
    },

    searchtext:{
color:'white'
    },

     discoverdot:{
      width:30,
    height:30,
    borderRadius:30,
    position:'relative',
     alignItems: 'center',
    justifyContent: 'center',
  backgroundColor: 'white',
  
    },
  
    line1:{
      width:2,
    height:20,
     position:'absolute',
     alignItems: 'center',
    justifyContent: 'center',
  backgroundColor: 'rgb(8, 162, 0)',
   transform:[
                              { rotateZ: '50deg'},
                             // { translateY:-55/2 },
                            ],
  
    },
    line2:{
      width:2,
    height:20,
    position:'relative',
      transform:[
                              { rotateZ: '-50deg' },
                             // { translateY:-55/2 },
                            ],
     alignItems: 'center',
    justifyContent: 'center',
  backgroundColor: 'rgb(8, 162, 0)',
  
    },
  
});



