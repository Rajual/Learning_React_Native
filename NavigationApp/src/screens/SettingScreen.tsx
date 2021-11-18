import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../contexts/AuthContext';
import { styles } from '../themes/appTheme';

export const SettingScreen = () => {

    const insets=useSafeAreaInsets();

    const {authState}= useContext(AuthContext);

    console.log(authState);

    return (
        <View style={{...styles.globalMargin,
            marginTop: insets.top
        }}>
            <Text style={styles.title}>
                Setting Screen
            </Text>
            <Text style={styles.title}>
                {JSON.stringify(authState,null,4)}
            </Text>
        </View>
    )
}
