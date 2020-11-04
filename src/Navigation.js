import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '#/constants';
import { PayButton, Icon } from '#/components';

import HomeScreen from '#/screens/Home';
import WalletScreen from '#/screens/Wallet';
import PayScreen from '#/screens/Pay';
import NotificationsScreen from '#/screens/Notifications';
import SettingsScreen from '#/screens/Settings';

const BottomTab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home',
  },
  Wallet: {
    name: 'creditcard',
  },
  Notifications: {
    name: 'ios-notifications-outline',
  },
  Settings: {
    name: 'setting',
  },
};

const Navigation = () => (
  <NavigationContainer>
    <BottomTab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Pay')
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );

          const { name } = icons[route.name];
          const iconSet = route.name === 'Notifications' ? 'ion' : 'antd';

          return (
            <Icon iconSet={iconSet} name={name} color={color} size={size} />
          );
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: Colors.fourtyGrayColor,
          borderTopColor: 'rbga(255, 255, 255, 0.2)',
        },
        activeTintColor: Colors.whiteColor,
        inactiveTintColor: Colors.secondaryGrayColor,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Início' }}
      />
      <BottomTab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ title: 'Carteira' }}
      />
      <BottomTab.Screen
        name="Pay"
        component={PayScreen}
        options={{ title: '' }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ title: 'Notificações' }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Ajustes' }}
      />
    </BottomTab.Navigator>
  </NavigationContainer>
);

export default Navigation;
