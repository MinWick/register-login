import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const Tareas = () => {

    const [tareas, setTareas] = useState('')


    const Ctareas = ()=>{
    }
 

    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <View style={styles.constainer}>
            <TextInput
                style={styles.Tinputs}
                placeholder="Escriba la tarea por hacer"
                onChangeText={setTareas}
            />
            <Button
                title="Agregar"
                onPress={() => Ctareas()}
            />
            </View>

        </View>
    )
  }


export default Tareas

const styles = StyleSheet.create({
    Tinputs: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 15,
        fontSize: 22,
        color: '#034C50',
    },
    constainer:{
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#C4C4C4',
        marginBottom: 2,
        paddingVertical: 2,
        paddingHorizontal: 2,
        borderRadius: 2,
        marginTop:2
    }
})
