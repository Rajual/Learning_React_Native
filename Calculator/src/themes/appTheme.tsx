
import React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',

    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom:10
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'black',
        justifyContent: 'flex-end'
    },
    smallResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:20,
        paddingHorizontal:10
    }
    ,
    button:{
        height:80,
        width:80,
        
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10
    },
    textButton:{
        textAlign:'center',
        padding:10,
        color:'black',
        fontWeight:'400',
        fontSize:30
    }
})