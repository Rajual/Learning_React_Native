import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../themes/appTheme';

//interface Props extends StackScreenProps<any,any>{};
interface Props extends DrawerScreenProps<any,any>{};

export const Pagina1Screen = ({navigation}:Props) => {

    
useEffect(() => {
    navigation.setOptions({
        headerLeft:()=>(
            <Button
            title='Menu'
            onPress={()=>navigation.toggleDrawer()}
            />
        )
    })
    
}, [])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title} >Pagina1Screen</Text>

            <Button
                title="Ir a pagina 2"
                onPress={()=>navigation.navigate('Pagina2Screen')}
            />

            <Text>Navegar con argumentos</Text>

            <TouchableOpacity
            style={
                {...styles.bigButton, backgroundColor:'#5856D6'}
            }
                onPress={()=>navigation.navigate('PersonaScreen',{
                    id:1,
                    name:'Julio'
                })}
            >
                <Text
                style={styles.textBigButton}
                >Julio
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={
                styles.bigButton
            }
                onPress={()=>navigation.navigate('PersonaScreen',{
                    id:2,
                    name:'Alfonso'
                })}
            >
                <Text
                style={styles.textBigButton}
                >
                    Alfonso
                    </Text>
            </TouchableOpacity>
        </View>
    )
}
