import React, { useState } from 'react';
import { View, Text,Image, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Contador} from './componet/contador';

export default function App() {
  
  const [cont, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(cont + 1);
  };

  const reiniciarContador = () => {
    setContador(0);
  };


  return (
      <View style={styles.container}>
      <View style={styles.logocont}>
        <Image style={styles.logo} source={require('./assets/logofreeCode.png')}></Image>
      </View>
      <View style={styles.contadorcont}>
        <Text>{cont}</Text>
        <Button title='contar' style={[styles]} onPress={incrementarContador}/>
        <Button title='reset' style={[styles]} onPress={reiniciarContador}/>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: 80,
    width: '100%',
    resizeMode: 'contain'
  },

  logocont:{
    flex:1,
    backgroundColor: 'pink',
    width: '100%', 
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  contadorcont:{
    flex:3,
  },

  contador: {
    fontSize: 48,
    color: '#FFFFFF',
    marginBottom: 20,
  },
});
