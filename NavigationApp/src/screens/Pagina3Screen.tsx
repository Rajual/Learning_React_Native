import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{};

export const Pagina3Screen = ({navigation}:Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text>Pagina3Screen</Text>


            <Button
            title="Regresar"
            onPress={()=>navigation.pop()}
            />

<Button
            title="Ir a la pagina 1"
            onPress={()=>navigation.popToTop()}
            />
        </View>
    )
}