import React, { useState } from 'react';
import { View,  Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Contador from './componet/contador';
import Botones  from './componet/boton';

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
        <Contador valor={cont} />
        <Botones incrementarContador={incrementarContador} reiniciarContador={reiniciarContador} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: 80,
    width: '100%',
    resizeMode: 'contain'
  },

  logocont:{
    flex:0.5,
    backgroundColor: '#191970',
    width: '100%', 
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  contadorcont:{
    flex:3,
  },


});
