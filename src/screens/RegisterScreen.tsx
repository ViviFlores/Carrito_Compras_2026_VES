import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { stylesGlobal } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

interface FormRegister {
    name: string;
    email: string;
    password: string;
}

interface Props {
    users: User[];    //arreglo con la lista de usuarios
    handleAddUser: (user: User) => void;   //función para agregar usuarios al arreglo
}

export const RegisterScreen = ({ users, handleAddUser }: Props) => {
    //hook useState: permite gestionar el estado del formulario
    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        email: '',
        password: ''
    });

    //hook useNavigation: permite navegar de una pantalla a otra
    const navigation = useNavigation();

    //función capturar los datos del formulario
    const handleChangeValue = (name: string, value: string): void => {
        //modificar el estado del formulario
        setFormRegister({ ...formRegister, [name]: value });
    }

    //función para verificar si el usuario existe
    const verifyUser = (): User => {
        const existUser = users.filter(user => user.email == formRegister.email)[0];
        return existUser;
    }

    //función para generar los ids de los nuevos usuarios
    const getIdUser = (): number => {
        const getId = users.length + 1;
        return getId;
    }

    //función para registrar
    const handleRegister = (): void => {
        //Validar que los campos se encuentren llenos
        if (formRegister.name == '' || formRegister.email == '' || formRegister.password == '') {
            Alert.alert("Error", "Por favor, completa todos los campos");
            return;
        }
        //Validar si existe el usuario
        if (verifyUser()) {
            Alert.alert("Error", "El usuario ya se encuentra registrado");
            return;
        }
        //Registrar al usuario en el arreglo
        //Crear objeto user
        const newUser: User = {
            id: getIdUser(),
            name: formRegister.name,
            email: formRegister.email,
            password: formRegister.password
        }

        //Añadir en el arreglo
        handleAddUser(newUser);
        Alert.alert("Registro", "Usuario registrado con éxito");
        //Redireccionar al login
        navigation.goBack();
        //console.log(formRegister);
    }

    return (
        <View>
            <TitleComponent title='Regístrate' />
            <BodyComponent>
                <Text style={stylesGlobal.titleWelcome}>
                    Bienvenido de nuevo!
                </Text>
                <Text>Realiza tus compras de manera rápida y segura</Text>
                <View style={stylesGlobal.containerInput}>
                    <InputComponent placeholder='Nombre'
                        keyboardType='default'
                        handleChangeValue={handleChangeValue}
                        name='name' />
                    <InputComponent placeholder='Correo'
                        keyboardType='email-address'
                        handleChangeValue={handleChangeValue}
                        name='email' />
                    <InputComponent placeholder='Contraseña'
                        keyboardType='default'
                        handleChangeValue={handleChangeValue}
                        name='password' />
                </View>
                <ButtonComponent buttonText='Registrar' onPress={handleRegister} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                    <Text style={stylesGlobal.textRedirect}>
                        Ya tienes una cuenta? Iniciar sesión ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
