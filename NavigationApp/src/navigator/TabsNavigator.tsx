import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../themes/appTheme';
import { Platform, Text } from 'react-native';

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
                                iconName = 'T1'
                                break;
                            case 'Tab2Screen':
                                iconName = 'T2'
                                break;
                            case 'StackNavigator':
                                iconName = 'St'
                                break;
                        }
                        return <Text style={{ color: color }}>{iconName}</Text>
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
            <TabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={Tab2Screen} />
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
                                iconName = 'T1'
                                break;
                            case 'Tab2Screen':
                                iconName = 'T2'
                                break;
                            case 'StackNavigator':
                                iconName = 'Stack'
                                break;
                        }
                        return <Text style={{ color: color }}>{iconName}</Text>
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
            <TabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={Tab2Screen} />
            <TabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </TabIOS.Navigator>
    );
}