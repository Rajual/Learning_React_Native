import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingScreen } from '../screens/SettingScreen';

import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../themes/appTheme';
import { TabsNavigator } from './TabsNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={
        (props) => <InternalMenu{...props} />
      }
    >
      <Drawer.Screen name="Tabs" component={TabsNavigator} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}


const InternalMenu = ({navigation}:DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView
    
    >
      <View
      style={styles.avatarContainer}
      >
        <Image 
        source={ {
          uri:'https://img.vixdata.io/pd/webp-large/es/sites/default/files/a/avatar_la_leyenda_de_aang_es_un_anime.jpg'
        } }
        style={styles.avatar}
        ></Image>
      </View>

      <View style={styles.menuContainer}>

        <TouchableOpacity 
        style={styles.menuButton}
        onPress={()=>navigation.navigate('Tabs')}
        >
          <Text style={styles.textMenu}>Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.menuButton}
        onPress={()=>navigation.navigate('SettingScreen')}
        >
          <Text style={styles.textMenu}>Setting</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
  
}