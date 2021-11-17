import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen ';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colors } from '../themes/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TopTab = createMaterialTopTabNavigator();

export const TopTapNavigator=()=> {

  const  {top:t}=  useSafeAreaInsets();
  return (
    <TopTab.Navigator
    style={{
        paddingTop:t
    }}
    sceneContainerStyle={{
        backgroundColor:'white'
    }}
    tabBarOptions={{
        pressColor:colors.primary,
        showIcon:true,
        indicatorStyle:{
            backgroundColor:colors.primary,
        },
        style:{
            borderTopColor:colors.primary,
            shadowColor:'transparent',
            elevation:0
        }
    }}
    screenOptions={
        ({ route }) => ({
            tabBarIcon: ({ color, focused }) => {
                let iconName: string = '';
                switch (route.name) {
                    case 'ChatScreen':
                        iconName = 'business-outline'
                        break;
                    case 'ContactsScreen':
                        iconName = 'boat-outline'
                        break;
                    case 'AlbumsScreen':
                        iconName = 'barbell-outline'
                        break;
                }
                return <Icon name={iconName} size={20} color={color}></Icon>
            }
        })
    }
    >
      <TopTab.Screen name="ChatScreen" component={ChatScreen} />
      <TopTab.Screen name="ContactsScreen" component={ContactsScreen} />
      <TopTab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </TopTab.Navigator>
  );
}