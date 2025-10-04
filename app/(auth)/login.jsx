import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { FontAwesome } from "@expo/vector-icons";


const Login = () => {
  return (
    <View style={styles.container}>

      {/* <Link href='/'>Back Welcome</Link> */}

      <Text style={styles.title}>Login here</Text>

      <Text style={styles.text}>
        Welcome back you’ve{"\n"}been missed!
      </Text>
      <TextInput style={styles.input} placeholder='Email' />
      <TextInput style={styles.input} placeholder='Password' />

      <View style={styles.forgotPasswordView}>
        <Link href='/' style={styles.forgotLink}>
          Forgot your password?
        </Link>
      </View>

      <Link href='/login' style={styles.signInBTN}>
        <Text style={styles.signInTXT}>
          Sign In
        </Text>
      </Link>

      <Link href='/register' style={{ marginVertical: 32 }}>
        <Text style={styles.createText}>
          Create new account
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

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 43,
    paddingHorizontal: 50,
    backgroundColor: '#ffff',

  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1F41BB',
  },
  text: {
    marginTop: 43,
    marginBottom: 46,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center'
  },
  input: {
    height: 50,
    width: 320,
    padding: 23,
    borderRadius: 8,
    backgroundColor: '#F1F4FF',
    marginVertical: 23,
  },
  forgotPasswordView: {
    width: '100%',
    alignItems: 'flex-end',
    margin: 10
  },
  forgotLink: {
    color: '#1F41BB',
    fontWeight: 'bold'
  },
  signInBTN: {
    backgroundColor: '#1f41ba',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 8,
    width: 320,
  },

  signInTXT: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  createText: {
    fontSize: 18,
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
    backgroundColor: '#ececec',
    borderRadius: 8
  }
})