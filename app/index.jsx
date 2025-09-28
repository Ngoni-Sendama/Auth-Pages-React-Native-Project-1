import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/start.png')}
                style={styles.logo} />
            <Text style={styles.title}>
                Discover Your{"\n"}Dream Job Here
            </Text>

            <Text style={styles.description}>Explore all the existing job roles based on your{"\n"}interest and study major</Text>


            <View style={styles.buttonsView}>
                <Link href='/login' style={styles.loginBTN}>
                    <Text style={styles.loginTXT}>
                        Login
                    </Text>
                </Link>

                <Link href='/login' style={styles.registerBTN}>
                    <Text style={styles.registerTXT}>
                        Register
                    </Text>
                </Link>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 350,
        height: 350
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#1F41BB',
        textAlign: 'center'
    },
    description: {
        textAlign: 'center',
        marginTop: 23
    },
    buttonsView: {
        flexDirection: 'row',
        gap: 23,
        marginTop: 43
    },
    loginBTN: {
        backgroundColor: '#1F41BB',
        paddingVertical: 20,  
        paddingHorizontal: 50,
        borderRadius: 8,        
    },

    loginTXT: {
        color: 'white',
        fontSize: 18,          
        fontWeight: 'bold',    
        textAlign: 'center',
    },

      registerBTN: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 20,  
        paddingHorizontal: 50,
        borderRadius: 8,        
    },

     registerTXT: {
        color: '#0A0A0A',
        fontSize: 18,          
        fontWeight: 'bold',    
        textAlign: 'center',
    },

})