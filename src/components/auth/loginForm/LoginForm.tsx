import React, { useState } from "react";
import { useFormik } from "formik";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { Button, Input, Icon } from "react-native-elements";
import axios from "axios";
import { useAppDispatch } from "../../../store/reduxHooks";
import { login } from "../../../store/slices/auth.slice";
import { initialValues, validationSchema } from "./LoginForm.data";
import { styles } from "./LoginForm.styles";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        setIsLoading(true);
        console.log("Formulario enviado con éxito:", formValues);

        const response = await axios.post("https://fakestoreapi.com/auth/login", {
          username: formValues.username,
          password: formValues.password,
        });

        const token = response.data.token;
        dispatch(login(token));
        console.log("Inicio de sesión exitoso, token:", token);
      } catch (error: any) {
        console.log("Este es el error -> ", error.message);
        Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Error',
            text2: 'Usuario o contraseña incorrectos.',
            visibilityTime: 4000,
          });
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <Input
        placeholder="EJ: mor_2314"
        label="Nombre de usuario"
        value={formik.values.username}
        onChangeText={(value) => formik.setFieldValue("username", value)}
        errorMessage={formik.errors.username}
        containerStyle={styles.inputContainer}
      />

      <Input
        placeholder="Introduce tu contraseña"
        label="Contraseña"
        value={formik.values.password}
        secureTextEntry={!showPassword}
        onChangeText={(value) => formik.setFieldValue("password", value)}
        errorMessage={formik.errors.password}
        containerStyle={styles.inputContainer}
        rightIcon={
          <Icon
            name={showPassword ? "visibility" : "visibility-off"}
            type="material"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />

      <Button
        title="Iniciar Sesión"
        onPress={() => formik.handleSubmit()}
        loading={isLoading}
        buttonStyle={styles.button}
      />
    </View>
  );
};