import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks'
import { logout as logoutAction } from "../../store/slices/auth.slice";
import { Image } from 'react-native-elements';

const imagekiMorado = require('../../assets/images/nuevo_logo_ki_morado.jpeg');

export default function CustomDrawer(props:any) {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const logout = () => {
    console.log('Estoy cerrando sesión', isLoggedIn);
    dispatch(logoutAction());
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <Image
          source={imagekiMorado}
          style={styles.imageDrawer}
        />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity onPress={logout} style={styles.logout}>
        <View style={styles.row}>
            <MaterialIcons name="logout" size={24} color="black" />
            <Text style={styles.textLogout}>Cerrar Sesión</Text>
        </View>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageDrawer: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius:100,
    marginBottom:10
  },
  logout: {
    padding: 20,
    backgroundColor: '#ed8d8d',
    paddingRight: 30,
    alignItems: 'flex-start', 
  },
  row: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  textLogout: {
    marginLeft: 10, 
    fontSize: 16, 
    color: 'black', 
  },
});