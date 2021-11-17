import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

/*interface RouterParams {
    id:number;
    name:string;
}*/

interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{};

const PersonaScreen = ({route,navigation}:Props) => {
    const params=route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params,null,2)
                }
            </Text>
        </View>
    )
}

export default PersonaScreen;