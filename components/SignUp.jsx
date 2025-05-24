import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CompleteLogo = require('../assets/logo/mainLogo.png');

const SignUp = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // TODO: Add signup logic
  };

  const handleGoogleSignUp = () => {
    // TODO: Add Google signup logic
  };

  const handleSignInRedirect = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Image source={CompleteLogo} style={styles.logo} />
      <Text style={styles.title}>Get Started</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>or register using:</Text>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignUp}>
        <AntDesign name="google" size={24} color="#34A853" />
      </TouchableOpacity>

      <Text style={styles.footerText}>Already have an account?</Text>

      <TouchableOpacity style={styles.signinButton} onPress={handleSignInRedirect}>
        <Text style={styles.signinText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#1F422F',
    padding: 20,
    borderRadius: 16,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  signupButton: {
    backgroundColor: '#F9D589',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  signupText: {
    color: '#333',
    fontWeight: 'bold',
  },
  orText: {
    marginTop: 20,
    fontSize: 14,
    color: '#333',
  },
  googleButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#555',
  },
  signinButton: {
    backgroundColor: '#F9D589',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  signinText: {
    color: '#1F2633',
    fontWeight: 'bold',
  },
});

export default SignUp;
