import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../contexts/AuthContext';

/*interface RouterParams {
    id:number;
    name:string;
}*/

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { };

const PersonaScreen = ({ route, navigation }: Props) => {

    const { changeUserName } = useContext(AuthContext)

    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, [])

    useEffect(() => {
        changeUserName(params.name)
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 2)
                }
            </Text>
        </View>
    )
}

export default PersonaScreen;