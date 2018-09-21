import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import {Container, Content, Grid, Row, Col} from 'native-base';

export default class App extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      message :'',
      number: 0,
      limit: 100,
      random: 0,
      tries: 0,

    }
  }

  componentDidMount(){
    // Génère un nombre entier entre 1 et 100
    this.setState({random: Math.floor(Math.random() * (this.state.limit - 1) + 1)})
  }

  guess(){
    // Le message change en fonction de la réponse
    let message = (this.state.number == this.state.random) ? 'Gagné !' : (this.state.number > this.state.random) ? 'Plus bas ...' : 'Plus haut ...' ;
    // Mise à jour de l'état du component.
    this.setState({message: message});
    // Vider l'état de number quand ce n'est pas la bonne réponse
   if (this.state.number != this.state.random) {
    this.setState(prevState => ({number: '', tries: prevState.tries + 1 }));
   }
  }

  reload() {
    this.setState({random: Math.floor(Math.random() * (100 - 1) + 1), number: 0,  message: ''});
  }



  render() {
    let pic = {
      uri: 'https://www.w3schools.com/w3css/img_lights.jpg'
    };
    return (
      // Choisir la limite

      
    <ImageBackground source={pic} style={styles.imgBackground}>
          <View style={styles.containerinfo}>
              <Text style={styles.intro}>Choississez votre limite</Text>
                 <View style={{flex: 1, flexDirection: 'row', marginTop: 10, marginBottom: 100}}>
                            <TouchableOpacity
                            style={[styles.button, styles.buttonRefresh, styles.buttonRefresh_1]}
                            onPress={()=> {this.setState({limit: 100})}}
                            >
                            <Text>100</Text>
                            
                            
                            </TouchableOpacity>
                                <TouchableOpacity
                            style={[styles.button, styles.buttonRefresh, styles.buttonRefresh_2]}
                            onPress={()=> {this.setState({limit: 1000})}}
                            >
                            <Text>1000</Text>
                            </TouchableOpacity>
                                <TouchableOpacity
                            style={[styles.button, styles.buttonRefresh, styles.buttonRefresh_3]}
                            onPress={()=> {this.setState({limit: 10000})}}
                            >
                            <Text>10000</Text>
                            </TouchableOpacity>
                            
                </View>          
                          <Text style={styles.h1}>Devine un nombre entre 1 et {this.state.limit}</Text>
                          <Text style={styles.number}>{this.state.number}</Text>
                          <Text style={{color: 'red'}}>{(this.state.number > this.state.limit) ? 'Entrer un nombre plus petit ou égale à ' + this.state.limit : ''}</Text>
                          <Text style={[styles.message,
                            // La couleur du message est rouge en cas d'erreur et vert quand on a gagné
                            this.state.message == 'Gagné !' ? styles.messageValid : styles.messageError]}>
                            {this.state.message}
                          </Text>

                          <Text>
                          {this.state.message == 'Gagné !' ? 'Il vous a fallu '+ this.state.tries +' essais' : ''}</Text>
                            <TextInput
                            // Mettre à jour de l'état number et vider l'input quand ce n'est pas la bonne réponse
                            style={styles.input}
                            onChangeText={(number) => this.setState({number, message: ''})}
                            keyboardType="numeric"
                            max={this.state.limit}
                            // Transformer un int en string
                            value={this.state.number ? String(this.state.number) : null}
                          />
                          <TouchableOpacity
                          style={[styles.button, styles.buttonRefresh2]}
                          onPress={()=> {this.guess()}}
                          >
                          <Text>Envoyer</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                          style={[styles.button, styles.buttonRefresh3]}
                          onPress={()=> {this.reload()}}
                          >
                          <Text>Refresh</Text>
                          </TouchableOpacity>
                          </View>       






    </ImageBackground>
              
    );
  }
}

const styles = StyleSheet.create({

  containerinfo:{
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 5,
    alignItems: 'center',
    paddingTop: 20
  },

  input: {
    margin: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 20,
    borderRadius: 10,
    color: '#fff',
    width: '85%',
  },
  button: {
    margin: 10,
    backgroundColor: '#FF9200',
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    color: 'red',
    justifyContent: 'center',
    fontSize: 5
  },

  buttonRefresh: {
    borderColor: '#fff',
    margin: 10,
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    color: '#fff',
    width: 86, 
    height: 86,
    fontSize: 5
  },
 
  buttonRefresh2:{
    borderColor: '#fff',
    margin: 5,
    padding: 10,
    alignItems: 'center',
    borderRadius: 60,
    borderWidth: 1,
    color: '#fff',
    width: '85%', 
    height: 86,
    fontSize: 5,
    backgroundColor: '#B0BEC5',
  },
  buttonRefresh3:{
    borderColor: '#fff',
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 60,
    borderWidth: 1,
    color: '#fff',
    width: '85%', 
    height: 86,
    fontSize: 5,
    backgroundColor: '#fff',
    borderColor: '#B0BEC5',
  },

  h1:{
    textAlign: 'center',
    fontWeight: 'bold',
  },
  number: {
    textAlign: 'center',
    fontSize: 80,
    lineHeight: 95,
    color: '#000',
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
    width: '80%',
    padding: 20,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  imgBackground:{
    width: '100%', 
    height: '100%',
    flex: 1,
    resizeMode:'cover',
    justifyContent: 'center',
    alignItems: 'center',
},

buttonRefresh_1:{
  backgroundColor: '#BBDEFB',
},

buttonRefresh_2:{
  backgroundColor: '#90CAF9',
},

buttonRefresh_3:{
  backgroundColor: '#64B5F6',
},

intro:{
  alignItems: 'center',
  fontSize: 20

},

textbutton1:{
  color:'#BDBDBD'
}
});
