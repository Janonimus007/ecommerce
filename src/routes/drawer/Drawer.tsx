import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProductList } from '../../screens/home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator  initialRouteName="Home">
      <Drawer.Screen name="Home" component={ProductList} options={{ title: 'Nuestros productos' }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;