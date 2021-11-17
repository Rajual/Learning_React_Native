import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../themes/appTheme';
import { Platform, Text } from 'react-native';
import { TopTapNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const TabsNavigator = () => {
    return Platform.OS == 'ios'
        ? <TabsNavigatorIOS />
        : <TabsNavigatorAndroid />
}



const TabAndroid = createMaterialBottomTabNavigator();

const TabsNavigatorAndroid=()=> {
    return (
        <TabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colors.primary
            }}

            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        let iconName: string = '';
                        switch (route.name) {
                            case 'Tab1Screen':
                                iconName = 'airplane-outline'
                                break;
                            case 'Tab2Screen':
                                iconName = 'aperture-outline'
                                break;
                            case 'StackNavigator':
                                iconName = 'bar-chart-outline'
                                break;
                        }
                        return <Icon name={iconName} size={20} color={color}></Icon>
                    }
                })
            }
        >
            <TabIOS.Screen
                name="Tab1Screen"
                options={{
                    title: 'Tab1',
                    //tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>
                }}
                component={Tab1Screen} />
            <TabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTapNavigator} />
            <TabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />

        </TabAndroid.Navigator>
    );
}


const TabIOS = createBottomTabNavigator();

const TabsNavigatorIOS = () => {
    return (
        <TabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            tabBarOptions={{
                activeTintColor: colors.primary,
                style: {
                    borderRightColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0
                },
                labelStyle: {
                    fontSize: 15
                }
            }}
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ color, focused, size }) => {
                        let iconName: string = '';
                        switch (route.name) {
                            case 'Tab1Screen':
                                iconName = 'airplane-outline'
                                break;
                            case 'Tab2Screen':
                                iconName = 'aperture-outline'
                                break;
                            case 'StackNavigator':
                                iconName = 'bar-chart-outline'
                                break;
                        }
                        return <Icon name={iconName} size={40} color={color}></Icon>
                    }
                })
            }
        >
            <TabIOS.Screen
                name="Tab1Screen"
                options={{
                    title: 'Tab1',
                    //tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>
                }}
                component={Tab1Screen} />
            <TabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTapNavigator} />
            <TabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </TabIOS.Navigator>
    );
}