import React, { useState, Component } from 'react';
import { View, StyleSheet,StatusBar } from 'react-native';
import { Title, TextInput } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';


export default function LoginScreen({navigation}){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    return(
        <View style={styles.container}>
            <StatusBar barStyle='dark-content'></StatusBar>
            <Title style={styles.titleText}>Welcome to Vyom Chat</Title>
            <FormInput 
                labelName='Email'
                value={email}
                autoCapitalize='none'
                onChangeText= {userEmail => setEmail(userEmail)}
            />

            <FormInput
                labelName='Password'
                value={password}
                secureTextEntry={true}
                onChangeText = {userPassword => setPassword(userPassword)}
            />

    
            <FormButton
                title='Login'
                modeValue = 'contained'
                color = '#673ab7'
                labelStyle = {styles.loginButtonLabel}
            />

            <FormButton
                title='New user? Join now'
                compact={true}
                color= '#673ab7'
                modeValue = 'text'
                uppercase = {false}
                labelStyle = {styles.signupButtonLabel}
                onPress ={()=>navigation.navigate('Signup')}
            />
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ede7f6',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleText: {
        fontSize: 24,
        marginBottom: 10,
    },

    loginButtonLabel: {
        fontSize: 22
    },

    signupButtonLabel: {
        fontSize: 19
    },

    navButtonText: {
        fontSize: 16
    }
})
