import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title,IconButton } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0f2f1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleText: {
        fontSize: 24,
        marginBottom: 10
    },

    loginButtonLabel: {
        fontSize:22
    },

    navButtonText: {
        fontSize: 18
    },

    navButton: {
        marginTop: 10
    }
})


export default function SignUpScreen({navigation}){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Title style={styles.titleText}>Register to Vyom Chat</Title>
            <FormInput 
                labelName='Email'
                value = {email}
                autoCapitalize='none'
                onChangeText = {userEmail=>setEmail(userEmail)}
            />

            <FormInput
                labelName='Password'
                value={password}
                secureTextEntry={true}
                onChangeText={userPassword=> setPassword(userPassword)}           
            />

            <FormButton
                title='Sign Up'
                modeValue = 'contained'
                color = '#673ab7'
                labelStyle = {styles.loginButtonLabel}
            />

            <IconButton
                icon='keyboard-backspace'
                size={30}
                style={styles.navButton}
                color='#673ab7'
                onPress={()=>navigation.goBack()}
            />


        </View>
    )

}