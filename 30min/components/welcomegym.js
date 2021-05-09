import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {BackHandler,ScrollView,StyleSheet,TouchableWithoutFeedback, Text, View,Image, Dimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import Constants from 'expo-constants'


class Welcome extends React.Component{
    state = {
        w1: true,
        w2: false,
        w3: false,
        w4: false,

        type:'Popular',
        
        popular:[
            { id: 1, pic: require('../assets/gym/squt.jpg'), workout: 'Weight Squat',gender:'male' },
            { id: 2, pic: require('../assets/gym/squt1.jpg'), workout:  'Squat',gender:'male'},
            {id: 3,pic: require('../assets/gym/squt2.jpg'),workout:'Crunches',gender:'female'  },
            {id: 4,pic: require('../assets/gym/squt3.jpg'),workout:'Hip Rotation',gender:'female' },
        ],
        hard:[
            { id: 1, pic: require('../assets/gym/squt4.jpg'), workout: 'Squat',gender:'male'  },
            { id: 2, pic: require('../assets/gym/squt5.jpg'), workout: 'Push-Ups',gender:'male'},
            {id: 3,pic: require('../assets/gym/squt6.jpg'),workout:'Side Plank',gender:'female'  },
            {id: 4,pic: require('../assets/gym/squt7.jpg'),workout:' Bridge',gender:'female'  },
        ],
        beginner:[
            { id: 1, pic: require('../assets/gym/squt5.jpg'), workout: 'Push-Ups',gender:'male' },
            { id: 2, pic:require('../assets/gym/squt10.jpg'), workout: 'Side Plank',gender:'female'  },
            {id: 3,pic: require('../assets/gym/squt11.jpg'),workout:'Hip Rotation',gender:'female'  },
            {id: 4,pic: require('../assets/gym/squt9.jpg'),workout:'Crunches',gender:'female'  },
        ],
        recent:[
            { id: 1, pic: require('../assets/gym/squt13.jpg'), workout: 'Knees Push Up' },
            { id: 2, pic: require('../assets/gym/squt12.jpg'), workout: 'Inner Leg' },
            {id: 3,pic: require('../assets/gym/squt14.jpg'),workout:'Outer Leg'  },
            {id: 4,pic: require('../assets/gym/squt15.jpg'),workout:'Gluter Bridge'  },
        ],
    }


    w1 = () => {
        this.setState({
            w1: true,
            w2: false,
            w3: false,
            w4: false,
            type:'Popular',
    })
}

w2 = () => {
    this.setState({
        w1: false,
        w2: true,
        w3: false,
        w4: false,
        type:'Hard',
})
}


w3 = () => {
    this.setState({
        w1: false,
        w2: false,
        w3: true,
        w4: false,
        type:'Beginner',
})
    }
    
    w4 = () => {
        this.setState({
            w1: false,
            w2: false,
            w3: false,
            w4: true,
            type:'Recent',
    })
    }


    passRoute = (add, select) => {
    
        this.props.navigation.navigate('Workout', {add:add, select:select})
 
}

handleBackButtonClick=()=>{
    
      BackHandler.addEventListener('hardwareBackPress', ()=>{
this.props.navigation.navigate('Welcomegym', {userName: 'Mobile'})
    return true;
      });
  
  
}



UNSAFE_componentWillMount() {
     this.handleBackButtonClick()
     }

   /*UNSAFE_componentWillUnmount() {
       BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
   }*/



  render() {
     
  return(
    <View style={styles.container}>
   <View style={styles.pecent1}>
   <Image source={require('../assets/gym/six.jpg')} style={styles.six} />
   <LinearGradient colors={["rgb(2, 6, 48)","rgba(2, 6, 48,0.300)","rgba(2, 6, 48,0.500)", "rgb(2, 6, 48)"]} style={styles.boxlinier}>
   <View style={{width: '100%',height: Constants.statusBarHeight}}></View>
                  <View style={styles.sixhade}>
   <Text style={styles.femaletexti}>
        Hi <Text style={{color:'rgb(8, 162, 0)'}}>There</Text>
       </Text>
                  </View>
                  <View style={styles.sixhade2}>
                   <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Stream', { add: 'male' })}>
                  <View style={styles.play}>
                   <Image source={require('../assets/gym/play.png')} style={{ width: 30,height: 35,tintColor:'white'}} />
              
   </View>
   </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.sixhade3}>
                  <View style={styles.seach1}>
                  <Text style={styles.femaletextt}>
        Find <Text style={{color:'white'}}>your workout</Text>
       </Text>
                      </View>
                      <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Search', { name: 'male' })}>
                      <View style={styles.seach2}>
                      <View style={styles.seacht}>
                              <Text style={styles.searchtext}>Search your workout</Text>
                          </View>
                          <Image source={require('../assets/gym/search.png')} style={{ width: 25,height:25,tintColor:'white'}} />
              
   </View>
   </TouchableWithoutFeedback>
   </View>
              </LinearGradient>
          </View>
          <View style={styles.pecent2}>
          <View style={styles.pecentrent}>
          <TouchableWithoutFeedback onPress={this.w1}> 
                  <View style={{
                      width: 75,
        height: 30,
        flexDirection: 'row',
        borderRadius: 30,
        borderWidth: 2,
        borderColor:this.state.w1?'blue':'rgba(0,0,0,0)',
        alignItems: 'center',
        justifyContent: 'center',}}>
                              <Text style={styles.searchtext}>Popular</Text>
                          </View>
                          </TouchableWithoutFeedback>
                          <TouchableWithoutFeedback onPress={this.w2}>
                          <View style={{ width: 75,
        height: 30,
        flexDirection: 'row',
        borderRadius: 30,
        borderWidth: 2,
        borderColor:this.state.w2?'blue':'rgba(0,0,0,0)',
        alignItems: 'center',
        justifyContent: 'center',}}>
                              <Text style={styles.searchtext}>Hard</Text>
                      </View>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback onPress={this.w3}>
                  <View style={{ width: 75,
        height: 30,
        flexDirection: 'row',
        borderRadius: 30,
        borderWidth: 2,
        borderColor:this.state.w3?'blue':'rgba(0,0,0,0)',
        alignItems: 'center',
        justifyContent: 'center',}}>
                              <Text style={styles.searchtext}>Beginner</Text>
                      </View>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback onPress={this.w4}>
                  <View style={{ width: 75,
        height: 30,
        flexDirection: 'row',
        borderRadius: 30,
        borderWidth: 2,
        borderColor:this.state.w4?'blue':'rgba(0,0,0,0)',
        alignItems: 'center',
        justifyContent: 'center',}}>
                              <Text style={styles.searchtext}>Recent</Text>
                          </View>
                          </TouchableWithoutFeedback>
              </View>
              <View style={styles.mage}>
                  <Text style={styles.searchtexty}>{`${this.state.type} workout`}</Text>
              </View>
              <View style={styles.magebox}>
              <ScrollView

horizontal ={false}
 Style={{ width: '100%', alignItems: 'center',
 justifyContent: 'center', }} horizontal={true} >
 
                      {this.state.w1 && this.state.popular.map(e => {
                          return (<TouchableWithoutFeedback onPress={()=>this.passRoute(e.gender,e.workout)} key={e.id.toString()} >
                              <View key={e.id.toString()} style={styles.magebox1}>
                                  <Image source={e.pic} style={{ width: 120, height: 80, borderRadius: 4, }} />
                                  <Text style={styles.searchtext}>{e.workout}</Text>
                              </View>
                          </TouchableWithoutFeedback>)
                      })}

        {this.state.w2 && this.state.hard.map(e => {
                          return (<TouchableWithoutFeedback onPress={()=>this.passRoute(e.gender,e.workout)} key={e.id.toString()} >
                              <View key={e.id.toString()} style={styles.magebox1}>
                                  <Image source={e.pic} style={{ width: 120, height: 80, borderRadius: 4, }} />
                                  <Text style={styles.searchtext}>{e.workout}</Text>
                              </View>
                          </TouchableWithoutFeedback>)
})}
                      
                      {this.state.w3 && this.state.beginner.map(e => {
                          return (<TouchableWithoutFeedback onPress={()=>this.passRoute(e.gender,e.workout)} key={e.id.toString()} >
                              <View key={e.id.toString()} style={styles.magebox1}>
                                  <Image source={e.pic} style={{ width: 120, height: 80, borderRadius: 4, }} />
                                  <Text style={styles.searchtext}>{e.workout}</Text>
                              </View>
                          </TouchableWithoutFeedback>)
                      })}

{this.state.w4 && this.state.recent.map(e => {
                          return (<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Workout', { add: 'male',select:'none' })}  key={e.id.toString()} >
                              <View key={e.id.toString()} style={styles.magebox1}>
                                  <Image source={e.pic} style={{ width: 120, height: 80, borderRadius: 4, }} />
                                  <Text style={styles.searchtext}>{e.workout}</Text>
                              </View>
                          </TouchableWithoutFeedback>)
                      })}
                  
                
                      </ScrollView>
              </View>
              <View style={styles.hide}></View>
            
              

          </View>
        
    </View>
  );
}
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'rgb(255, 145, 0)',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgb(2, 6, 48)',
  
    },
    pecent1: {
        width: '100%',
        height: 300,
       alignItems: 'center',
        justifyContent: 'flex-start',
   
    },
    six: {
        width: '100%',
        position:'absolute',
        height: 300,
       alignItems: 'center',
        justifyContent: 'flex-start',
     
    },
    boxlinier: {
        position:'relative',
        width: '100%',
        height: 300,
       alignItems: 'center',
        justifyContent: 'flex-start',
     
    },
    pecent2: {
        width: '100%',
        height: '100%',
        marginTop:25,
       alignItems: 'center',
        justifyContent: 'flex-start',
     },

    pecentrent: {
        width: '100%',
        height: 50,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    magebox: {
        width: '95%',
        height:120,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      
      
    },
    mage: {
        width: '95%',
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
       
    },
    hide: {
        width: '100%',
        height: 30,
        position:'relative',
        marginTop:-9,
        backgroundColor:'rgb(2, 6, 48)'
     
    },
    magebox1: {
        width: 150,
        height:110,
        alignItems: 'center',
        justifyContent: 'space-around',
     
    },
    btnbox: {
        width: 70,
        height: 30,
        marginTop:5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgb(8, 162, 0)'
     
    },
    barbox: {
        width: '100%',
        height: 40,
        position:'absolute',
        marginTop: Dimensions.get('window').height-40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgb(10, 14, 46)'
     
    },

  

    sixhade: {
        width: '95%',
        height:70,
       alignItems: 'flex-start',
        justifyContent: 'center',
      
    },
    sixhade2: {
        width: '95%',
        height:130,
       alignItems: 'center',
        justifyContent: 'center',
      
    },
    sixhade3: {
        width: '95%',
        height:80,
       alignItems: 'center',
        justifyContent: 'flex-start',
      
    },
    play: {
        width: 50,
        height: 50,
        borderRadius:50,
       alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgb(8, 162, 0)'
      
    },
    seach1: {
        width: '95%',
        height:'50%',
       alignItems: 'flex-start',
        justifyContent: 'center',
      
    },
    seach2: {
        width: '95%',
        marginTop:7,
        height: 43,
        borderRadius: 43,
        flexDirection:'row',
       alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:'rgba(0, 13, 160, 0.354)'
      
    },
    seacht: {
        width: '66%',
        alignItems: 'flex-start',
        justifyContent: 'center',
       
    },
    searchtext: {
        color:'white'
    },
    searchtexty: {
        color: 'white',
        fontWeight:'bold'
    },
    searchtextb: {
        color: 'white',
        fontWeight:'bold'
    },
    femaletexti: {
        fontSize: 30,
        color:'white'
    },
    femaletextt: {
        fontSize: 20,
        color:'rgb(8, 162, 0)'
    }
});
