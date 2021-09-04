import React, { useState } from 'react'

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import Slider from '@react-native-community/slider'

var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export default function App() {

  const [password, setPassword] = useState('')
  const [size, setSize] = useState(5)

  function generationPass() {

    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassword(pass)
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}> {size} Caracteres </Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#ffa200"
          maximumTrackTintColor='#000'
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity
        onPress={generationPass}
        style={styles.button}>
        <Text style={styles.buttonText}>Gerar sua senha</Text>
      </TouchableOpacity>


      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password}> {password} </Text>
        </View>
      )}

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3ff'
  },
  logo: {
    marginBottom: 60
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffa200'
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 7
  },
  button: {
    backgroundColor: '#ffa200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }
})
