import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'


interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}


export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    return (
        <View 
        style={(position === 'bl'
            ? styles.fabLOcationBL : styles.fabLOcationBR
        )}>
            <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple('black',false,30)}
        >
            <View style={styles.fab}>
                <Text style={styles.fabText}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
        </View>
    )
}


const styles = StyleSheet.create({

    fabLOcationBL: {
        position: 'absolute',
        bottom: 30,
        right: 30
    }
    ,
    fabLOcationBR: {
        position: 'absolute',
        bottom: 30,
        left: 30
    }
    ,
    fab: {
        backgroundColor: '#5856D6',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:4
        },
        shadowOpacity:0.30,
        shadowRadius:4.65,
        elevation:8
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
