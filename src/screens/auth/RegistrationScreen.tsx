import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  // Add other routes here if needed
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface RegisterScreenProps {
  navigation: RegisterScreenNavigationProp;
}

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Add registration logic here
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    alert(`Name: ${name}\nEmail: ${email}\nRegistration successful!`);
    // After successful registration, navigate to Login or Home
    // navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Sign up to get started</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      
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
      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      
      <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.loginLink}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F8F9FA'
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
  registerButton: {
    backgroundColor: '#1B4332',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    color: '#343A40',
    fontSize: 14,
  },
  loginLink: {
    color: '#52B788',
    fontSize: 14,
    fontWeight: 'bold',
  }
});