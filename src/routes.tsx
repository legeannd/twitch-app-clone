import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Following from './pages/Following';
import Profile from './pages/Profile';
import ComingSoon from './pages/ComingSoon';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from './hooks/theme';

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();

const Routes: React.FC = () => { 
  const { theme } = useTheme();

  const HomeNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Following" component={Following} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      { theme.name === 'light' ? <StatusBar style="dark"/> : <StatusBar style="light"/> }

      <Navigator
        tabBarOptions={{
          style: {
            height: 60,
            backgroundColor: theme.colors.primary,
            borderTopWidth: 0,
          },
          tabStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle: {
            fontFamily: 'roboto_400',
            fontSize: 11,
            marginTop: 5,
          },
          inactiveTintColor: theme.colors.black,
          activeTintColor: theme.colors.purple
        }}
      >
        <Screen 
          name="Following" 
          component={HomeNavigator} 
          options={{
            tabBarIcon: ({ size, focused}) => {
              return (
                <Ionicons
                  name="md-heart"
                  size={size}
                  color={focused ? theme.colors.purple : theme.colors.black}
                />
              )
            }
          }} />
        <Screen 
          name="Discover" 
          component={ComingSoon} 
          options={{
            tabBarIcon: ({ size, focused}) => {
              return (
                <MaterialCommunityIcons
                  name="compass-outline"
                  size={size}
                  color={focused ? theme.colors.purple : theme.colors.black}
                />
              )
            }
          }}
        />
        <Screen 
          name="Browse" 
          component={ComingSoon}
          options={{
            tabBarIcon: ({ size, focused}) => {
              return (
                <Ionicons
                  name="md-browsers"
                  size={size}
                  color={focused ? theme.colors.purple : theme.colors.black}
                />
              )
            }
          }}
        />
        <Screen 
          name="Esports" 
          component={ComingSoon} 
          options={{
            tabBarIcon: ({ size, focused}) => {
              return (
                <MaterialCommunityIcons
                  name="trophy-outline"
                  size={size}
                  color={focused ? theme.colors.purple : theme.colors.black}
                />
              )
            }
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
