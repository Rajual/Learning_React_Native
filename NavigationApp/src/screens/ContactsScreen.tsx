import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { AuthContext } from '../contexts/AuthContext';
import { styles } from '../themes/appTheme';

export const ContactsScreen = () => {
    const {authState,signIn} = useContext(AuthContext)
    console.log(authState);
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                ContactsScreen
            </Text>

            {!authState.isLoggedIn&&<Button
            title='SignIn'
            onPress={signIn}
            ></Button>}
        </View>
    )
}
