import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProductComponent } from './components/CardProductComponent';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
    //Datos de prueba
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 2.50, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 2, name: 'Funda de azucar', price: 2.00, stock: 10, pathImage: 'https://tienda.propieta.ec/wp-content/uploads/2021/03/azucar-blanca.jpg' },
        { id: 3, name: 'Funda de papas', price: 3.50, stock: 8, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65701_G.jpg' },
        { id: 4, name: 'Funda de fideos', price: 1.00, stock: 4, pathImage: 'https://mercadomi.com.ec/wp-content/uploads/2024/11/77563_G.jpg' },
        { id: 5, name: 'Funda de sal', price: 0.50, stock: 6, pathImage: 'https://supermaxi-225de.kxcdn.com/wp-content/uploads/2025/07/7861057500096-1-21.jpg' },
        { id: 6, name: 'Funda de papas', price: 3.50, stock: 8, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65701_G.jpg' },
        { id: 7, name: 'Funda de fideos', price: 1.00, stock: 4, pathImage: 'https://mercadomi.com.ec/wp-content/uploads/2024/11/77563_G.jpg' },
        { id: 8, name: 'Funda de sal', price: 0.50, stock: 6, pathImage: 'https://supermaxi-225de.kxcdn.com/wp-content/uploads/2025/07/7861057500096-1-21.jpg' },
    ];

    return (
        <View>
            <TitleComponent title='Productos' />
            <BodyComponent>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <CardProductComponent item={item} />}
                    keyExtractor={item => item.id.toString()} />
            </BodyComponent>
        </View>
    )
}
