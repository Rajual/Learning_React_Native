import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props{
    text:string,
    color?:string,
    expanded?:boolean,
    onPress?:() => void
}

export const ButtonCalculator = ({text,color='#2D2D2D',expanded=false,onPress}:Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
                    <View style={{...styles.button, backgroundColor:color, width:(expanded)?180:80}}>
            <Text style={{...styles.textButton, color:(color==='#9B9B9B')?'black':"white"}}>{text}</Text>
        </View>
        </TouchableOpacity>
    )
}
