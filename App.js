import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class App extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      message :'',
      number: 0,
      random: Math.floor(Math.random() * (100 - 1) + 1)
    }
  }

  guess(){
    let message = (this.state.number == this.state.random) ? 'Gagné !' : (this.state.number > this.state.random) ? 'Plus bas ...' : 'Plus haut ...' ;
    this.setState({message: message});
   if (this.state.number != this.state.random) {
    this.setState({number: ''});
   }
  }

  reload() {
    this.setState({random: Math.floor(Math.random() * (100 - 1) + 1)});
  }

  

  render() {
    let pic = {
      uri: 'http://www.designbolts.com/wp-content/uploads/2016/08/Nightfall-iPhone-6S-Plus-Background-1082-x-1920-px.jpg'
    };
    return (
      <View style={styles.container}>
      <Image style={styles.image} source={pic}/>
          <View style={styles.containerInfo}> 
              <Text style={styles.h1}>Devine un nombre entre 1 et 100</Text>
             
              <View style={styles.containerNumber}>
                <Text style={styles.number}>{this.state.number}</Text>
              </View>
             
              <Text style={[styles.message, this.state.message == 'Gagné !' ? styles.messageValid : styles.messageError]}>{this.state.message}</Text>
                
              
                <TextInput
                  style={styles.input}
                  onChangeText={(number) => this.setState({number, message: ''})}
                  keyboardType="numeric"
                  value={this.state.number}
                />
                
                <TouchableOpacity
                style={styles.button}
                onPress={()=> {this.guess()}}
                >               
                <Text style={styles.textbutton}>Envoyer</Text>
                </TouchableOpacity>
                
                
                <TouchableOpacity
                style={[styles.buttonRefresh]}
                onPress={()=> {this.reload()}}
                >
                <Text style={styles.textbutton1}>Refresh</Text>
                </TouchableOpacity>


                </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 20,
    borderRadius: 80,
    color: '#fff',
  },
  button: {
    width: '93%', 
    margin: 10,
    backgroundColor: '#FF9200',
    padding: 20,
    alignItems: 'center',
    borderRadius: 80,
    borderWidth: 1,
    color: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonRefresh: {
    borderColor: '#fff',
    width: '93%', 
    margin: 10,
    padding: 20,
    alignItems: 'center',
    borderRadius: 80,
    borderWidth: 1,
    color: '#fff'
  },

  h1:{
    textAlign: 'center',
    fontWeight: 'bold',
  },
  number: {
    textAlign: 'center',
    fontSize: 80,
    lineHeight: 95,
    color: '#fff',
  },
  message: {
    color: 'black',
    fontSize: 30
  },
  messageError: {
    color: 'red',
    fontSize: 30
  },
  messageValid: {
    color: 'green',
    fontSize: 40
  },

  containerInfo:{
    position: 'absolute',
    // backgroundColor: 'rgba(0,0,0,0.6)',
    backgroundColor: '#263238',
    width: '80%',
    padding: 20,
    borderRadius: 10, 
    shadowOpacity: 0.3, 
    shadowRadius: 3,   
  },

  image:{
    resizeMode: 'cover',
    width: '100%', 
    height: '100%',
},
containerNumber:{
  // width: 70, 
  // height: 70,
  // backgroundColor: '#FFF',
  // color: '#fff',
  // borderRadius: 80,
  // borderWidth: 1,
  // lineHeight: 70,


},
textbutton1:{
  color:'#fff',
}
});
