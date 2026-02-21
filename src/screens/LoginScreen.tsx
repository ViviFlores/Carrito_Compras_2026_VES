import React, { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { stylesGlobal } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

interface FormLogin {
    email: string;
    password: string;
}

export const LoginScreen = () => {
    //hook useState: permite gestionar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    //función capturar los datos del formulario
    const handleChangeValue = (name: string, value: string): void => {
        //llamar función para actualizar el estado del formulario
        setFormLogin({ ...formLogin, [name]: value });
    }

    //función iniciar sesión
    const handleSignIn = (): void => {
        console.log(formLogin);
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
                        isPassword={true} />
                </View>
                <ButtonComponent buttonText='Iniciar' onPress={handleSignIn} />
            </BodyComponent>
        </View>
    )
}
