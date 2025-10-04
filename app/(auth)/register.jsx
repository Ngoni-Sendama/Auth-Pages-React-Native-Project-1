import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { FontAwesome } from "@expo/vector-icons";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.description}>Create an account so you can explore all the existing jobs</Text>
      <TextInput style={styles.input} placeholder='Email' />
      <TextInput style={styles.input} placeholder='Password' />
      <TextInput style={styles.input} placeholder='Confirm Password' />
      <Link href='/login' style={styles.signInBTN}>
        <Text style={styles.signInTXT}>
          Sign Up
        </Text>
      </Link>

      <Link href='/login' style={{ marginVertical: 32 }}>
        <Text style={styles.createText}>
          Already have an account
        </Text>
      </Link>
      <Text style={{ color: '#1F41BB', fontWeight: 'bold', fontSize: 18 }}>
        or continue with
      </Text>

      <View style={styles.iconsView}>
        <FontAwesome name="google" size={25} color="#010000" style={styles.icon} />;
        <FontAwesome name="facebook" size={25} color="#010000" style={styles.icon} />;
        <FontAwesome name="apple" size={25} color="#010000" style={styles.icon} />;
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 43,
    paddingHorizontal: 10,
    backgroundColor: '#ffff',

  },
  input: {
    height: 50,
    width: '90%',
    padding: 23,
    borderRadius: 8,
    backgroundColor: '#F1F4FF',
    marginVertical: 23,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1F41BB',
  },
  description: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    width: '70%'
  },
  signInBTN: {
    backgroundColor: '#1f41ba',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 8,
    width: '90%',
  },
  signInTXT: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  createText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#494948'
  },
  iconsView: {
    flexDirection: 'row',
    gap: 14
  },
  icon: {
    marginTop: 13,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ececec61',
    borderRadius: 8
  }
})