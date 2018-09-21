import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

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
      uri: 'http://www.designbolts.com/wp-content/uploads/2016/08/Nightfall-iPhone-6S-Plus-Background-1082-x-1920-px.jpg'
    };
    return (
      // Choisir la limite
      <View style={styles.container}>
             <TouchableOpacity
        style={[styles.button, styles.buttonRefresh]}
        onPress={()=> {this.setState({limit: 100})}}
        >
        <Text>100</Text>
        </TouchableOpacity>
             <TouchableOpacity
        style={[styles.button, styles.buttonRefresh]}
        onPress={()=> {this.setState({limit: 1000})}}
        >
        <Text>1000</Text>
        </TouchableOpacity>
             <TouchableOpacity
        style={[styles.button, styles.buttonRefresh]}
        onPress={()=> {this.setState({limit: 10000})}}
        >
        <Text>10000</Text>
        </TouchableOpacity>
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
        style={styles.button}
        onPress={()=> {this.guess()}}
        >
        <Text>Envoyer</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.button, styles.buttonRefresh]}
        onPress={()=> {this.reload()}}
        >
        <Text>Refresh</Text>
        </TouchableOpacity>
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
