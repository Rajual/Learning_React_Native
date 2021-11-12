import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Box Object Model</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'red'
    },
    title:{
        fontSize:20,
        //backgroundColor:'red',
        //color:'white'        
    }
})