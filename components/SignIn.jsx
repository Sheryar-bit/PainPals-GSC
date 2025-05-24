import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CompleteLogo = require('../assets/logo/mainLogo.png');
const waveCharacter = require('../assets/img/waveCharacter.png');

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // TODO: Add sign-in logic
  };

  const handleGoogleSignIn = () => {
    // TODO: Add Google sign-in logic
  };

  return (
    <View style={styles.container}>
      <Image source={CompleteLogo} style={styles.logo} />
      <Text style={styles.heading}>Sign In</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email"
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Enter password"
        />

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>or sign in using:</Text>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
        <AntDesign name="google" size={24} color="#34A853" />
      </TouchableOpacity>

      <Image source={waveCharacter} style={styles.character} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2E19B',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 120,
  },
  logo: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  formContainer: {
    backgroundColor: '#224B2F',
    padding: 20,
    paddingBottom: 30,
    marginTop: 10,
    borderRadius: 16,
    width: '80%',
    alignItems: 'stretch',
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
  },
  button: {
    backgroundColor: '#FFE09B',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 20,
    color: '#444',
  },
  googleButton: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 10,
    elevation: 3,
  },
  character: {
  width: 250,
  height: 250,
  resizeMode: 'contain',
  position: 'absolute',
  bottom: 0,
  left: 0,
}

});
