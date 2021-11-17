import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View } from 'react-native'
import { styles } from '../themes/appTheme';



export const Tab1Screen = () => {
    useEffect(() => {

    }, [])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Icons</Text>
            <Text>
                <Icon name="rocket" size={40} color="#900" />
                <Icon name="accessibility-outline" size={40} color="#900"></Icon>
            </Text>
        </View>
    )
}
