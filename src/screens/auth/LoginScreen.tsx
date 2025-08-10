import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

import type { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenProps = {
  navigation: StackNavigationProp<any>;
   setIsLoggedIn: (value: boolean) => void;
};

export default function LoginScreen({ navigation, setIsLoggedIn }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // After successful login, navigate to Home
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Replace with your restaurant logo */}
        <Text style={styles.logoText}>RESTAURANT NAME</Text>
      </View>
      
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity onPress={() => {}} style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.registerLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F8F9FA'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1B4332',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1B4332',
  },
  subtitle: {
    fontSize: 16,
    color: '#343A40',
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#52B788',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#1B4332',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#343A40',
    fontSize: 14,
  },
  registerLink: {
    color: '#52B788',
    fontSize: 14,
    fontWeight: 'bold',
  }
});