import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.description}>
        Create an account so you can explore all the existing jobs
      </Text>

      <TextInput style={styles.input} placeholder='Email' placeholderTextColor="#666" />
      <TextInput style={styles.input} placeholder='Password' placeholderTextColor="#666" secureTextEntry />
      <TextInput style={styles.input} placeholder='Confirm Password' placeholderTextColor="#666" secureTextEntry />

      <Link href='/login' style={styles.signInBTN}>
        <Text style={styles.signInTXT}>Sign Up</Text>
      </Link>

      <Link href='/login' style={{ marginVertical: 24 }}>
        <Text style={styles.createText}>Already have an account?</Text>
      </Link>

      <Text style={styles.orText}>or continue with</Text>

      <View style={styles.iconsView}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="google" size={25} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="facebook" size={25} color="#4267B2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="apple" size={25} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#F9FAFF',
  },
  input: {
    height: 60,
    width: '100%',
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#F1F4FF',
    marginVertical: 12,
    fontSize: 16,
    fontWeight: '500',
    elevation: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F41BB',
  },
  description: {
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 20,
    fontSize: 16,
    color: '#444',
    width: '80%',
  },
  signInBTN: {
    backgroundColor: '#1F41BB',
    paddingVertical: 16,
    borderRadius: 12,
    width: '100%',
    marginTop: 12,
  },
  signInTXT: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  createText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    textAlign: 'center',
  },
  orText: {
    color: '#1F41BB',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 20,
  },
  iconsView: {
    flexDirection: 'row',
    gap: 16,
  },
  icon: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
