import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/Login';
import Tareas from '../screen/Tareas';

const Stack = createNativeStackNavigator();

const MainStackNavigator =() =>{
    return (
<Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Buenas' }}
    />
        <Stack.Screen
        name="Tareas"
        component={Tareas}
        options={{ title: 'Tareas' }}
    />
</Stack.Navigator>
    )}
export default MainStackNavigator

