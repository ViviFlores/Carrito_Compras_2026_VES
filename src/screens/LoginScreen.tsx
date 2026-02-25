import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { stylesGlobal } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from '@expo/vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

interface FormLogin {
    email: string;
    password: string;
}

//interface definir las propiedades del componente
interface Props {
    users: User[];     //arreglo con la lista de usuarios
}

export const LoginScreen = ({ users }: Props) => {
    //hook useState: permite gestionar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    //hook useState: permite gestionar el estado de la contraseña
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //hook useNavigation: permite navegar de una pantalla a otra
    const navigation = useNavigation();

    //función capturar los datos del formulario
    const handleChangeValue = (name: string, value: string): void => {
        //llamar función para actualizar el estado del formulario
        setFormLogin({ ...formLogin, [name]: value });
    }

    //función verificar si existe el usuario
    const verifyUser = (): User => {
        const existUser = users.filter(user => user.email == formLogin.email && user.password == formLogin.password)[0];
        return existUser;
    }

    //función iniciar sesión
    const handleSignIn = (): void => {
        //Validar que los campos se encuentren llenos
        if (formLogin.email == '' || formLogin.password == '') {
            Alert.alert("Error", "Por favor, completa todos los campos");
            return;
        }
        //Validar la existencia del usuario
        if (!verifyUser()) {
            Alert.alert("Error", "Usuario y/o contraseña incorrectos")
            return;
        }
        //Si todo sale bien le enviamos la navegación al Home
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
        //console.log(formLogin);
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Iniciar Sesión' />
            <BodyComponent>
                <Text style={stylesGlobal.titleWelcome}>
                    Bienvenido de nuevo!
                </Text>
                <Text>Realiza tus compras de manera rápida y segura</Text>
                <View style={stylesGlobal.containerInput}>
                    <InputComponent placeholder='Correo'
                        keyboardType='email-address'
                        handleChangeValue={handleChangeValue}
                        name='email' />
                    <InputComponent placeholder='Contraseña'
                        keyboardType='default'
                        handleChangeValue={handleChangeValue}
                        name='password'
                        isPassword={hiddenPassword} />
                    <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'}
                        color={PRIMARY_COLOR}
                        size={20}
                        style={stylesGlobal.iconPassword}
                        onPress={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                <ButtonComponent buttonText='Iniciar' onPress={handleSignIn} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text style={stylesGlobal.textRedirect}>
                        No tienes una cuenta? Regístrate ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
