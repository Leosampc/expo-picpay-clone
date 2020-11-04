import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '#/screens/Home';
import WalletScreen from '#/screens/Wallet';
import PayScreen from '#/screens/Pay';

const BottomTab = createBottomTabNavigator();

const Navigation = () => (
  <NavigationContainer>
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Wallet" component={WalletScreen} />
      <BottomTab.Screen name="Pay" component={PayScreen} />
    </BottomTab.Navigator>
  </NavigationContainer>
);

export default Navigation;
