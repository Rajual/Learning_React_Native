import React, { useContext } from 'react'
import { Text, View,Button } from 'react-native'
import { AuthContext } from '../contexts/AuthContext';
import { styles } from '../themes/appTheme';

export const AlbumsScreen = () => {

    const {authState:{isLoggedIn},logout} = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                AlbumsScreen
            </Text>

            {
                isLoggedIn && <Button title={'Logout'} onPress={()=>logout()}></Button>
            }
        </View>
    )
}
