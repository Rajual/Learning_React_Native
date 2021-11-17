import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, styles } from '../themes/appTheme';

//interface Props extends StackScreenProps<any,any>{};
interface Props extends DrawerScreenProps<any,any>{};

export const Pagina1Screen = ({navigation}:Props) => {

    
useEffect(() => {
    navigation.setOptions({
        headerLeft:()=>(
            <TouchableOpacity 
             onPress={()=>navigation.toggleDrawer()}
             style={{
                 paddingLeft:10
             }}
            >
                <Icon name='grid-outline' size={30} color={colors.primary}></Icon>
            </TouchableOpacity>
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
                <Icon name='bicycle-outline' size={40}></Icon>
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
                <Icon name="car-sport-outline" size={40}></Icon>
                <Text
                style={styles.textBigButton}
                >
                    Alfonso
                    </Text>
            </TouchableOpacity>
        </View>
    )
}
