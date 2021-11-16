import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any,any>{};

export const Pagina1Screen = ({navigation}:Props) => {

    

    return (
        <View style={styles.globalMargin}>
            <Text>Pagina1Screen</Text>

            <Button
                title="Ir a pagina 2"
                onPress={()=>navigation.navigate('Pagina2Screen')}
            />
        </View>
    )
}
