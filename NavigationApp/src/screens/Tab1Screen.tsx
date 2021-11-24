import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View } from 'react-native'
import { styles } from '../themes/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';



export const Tab1Screen = () => {
    useEffect(() => {

    }, [])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Icons</Text>
            <Text>
                <TouchableIcon iconName="rocket"/>
                <TouchableIcon iconName="rocket"/>
                <TouchableIcon iconName="rocket"/>
            </Text>
        </View>
    )
}
