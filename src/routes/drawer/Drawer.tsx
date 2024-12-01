import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProductListScreen } from '../../screens/products';
import CustomDrawer from '../../components/navigation/CustomDrawer';
// import { ProductList } from '../../screens/products';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}  initialRouteName="Home">
      <Drawer.Screen name="Home" component={ProductListScreen} options={{ title: 'Nuestros productos' }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;