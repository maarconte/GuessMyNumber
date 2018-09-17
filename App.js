import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
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
    return (
      <View style={styles.container}>
      <Text style={styles.h1}>Devine un nombre entre 1 et 100</Text>
      <Text style={styles.number}>{this.state.number}</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 10,
  },
  button: {
    width: 100,
    margin: 10,
    backgroundColor: '#FF9200',
    padding: 5,
    alignItems: 'center',
  },
  buttonRefresh: {
    backgroundColor: '#FFBF00',
  },
  h1:{
    textAlign: 'center',
    fontWeight: 'bold',
  },
  number: {
    textAlign: 'center',
    fontSize: 60,
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
});
