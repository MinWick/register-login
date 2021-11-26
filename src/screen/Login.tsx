import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

    

const Login = ({ navigation }) => {
    
    const [postuser, setPostUser] = React.useState<string>('');
    const [postpass, setPostPass] = React.useState<number>();

    const validar = () => {

        if (postuser === 'hacker@gmail.com' && postpass === 12345678) {
            navigation.navigate('HomeWorksList')
        } else {
            alert('Contraseña Incorrecta')
        }
    }

    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Usuario</Text>
            <TextInput
                multiline
                placeholder="ingrese su usuario"
                style={{ height: 50, padding: 10, backgroundColor: 'white' }}
            />
            <Text>Contraseña</Text>
            <TextInput
                multiline
                placeholder="ingrese su Contraseña"
                style={{ height: 50, padding: 10, backgroundColor: 'white' }}
            />

            <Button
                title="regis"
                onPress={() => navigation.push('Tareas',({postuser, postpass}))}
                
                   
            />
        </View>
    )
}

export default Login

