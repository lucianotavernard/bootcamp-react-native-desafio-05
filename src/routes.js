import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

export default createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerTransparent: true,
        header: () => <Header />,
        cardStyle: {
          backgroundColor: '#201d25',
        },
      },
    }
  )
);
