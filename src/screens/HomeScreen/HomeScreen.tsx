import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProductComponent } from './components/CardProductComponent';
import Icon from '@expo/vector-icons/MaterialIcons';
import { SECONDARY_COLOR } from '../../commons/constants';
import { stylesGlobal } from '../../theme/appTheme';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

//interface de los objetos de mi carrito de compras
interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {
    //Datos de prueba
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 2.50, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 2, name: 'Funda de azucar', price: 2.00, stock: 10, pathImage: 'https://tienda.propieta.ec/wp-content/uploads/2021/03/azucar-blanca.jpg' },
        { id: 3, name: 'Funda de papas', price: 3.50, stock: 0, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65701_G.jpg' },
        { id: 4, name: 'Funda de fideos', price: 1.00, stock: 4, pathImage: 'https://mercadomi.com.ec/wp-content/uploads/2024/11/77563_G.jpg' },
        { id: 5, name: 'Funda de sal', price: 0.50, stock: 6, pathImage: 'https://supermaxi-225de.kxcdn.com/wp-content/uploads/2025/07/7861057500096-1-21.jpg' },
        { id: 6, name: 'Funda de papas', price: 3.50, stock: 8, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65701_G.jpg' },
        { id: 7, name: 'Funda de fideos', price: 1.00, stock: 4, pathImage: 'https://mercadomi.com.ec/wp-content/uploads/2024/11/77563_G.jpg' },
        { id: 8, name: 'Funda de sal', price: 0.50, stock: 6, pathImage: 'https://supermaxi-225de.kxcdn.com/wp-content/uploads/2025/07/7861057500096-1-21.jpg' },
    ];

    //hook useState: permite gestionar la información de los productos
    const [productsState, setProductsState] = useState<Product[]>(products);  //arreglo de productos

    //hook useState: permite gestionar el estado de mi carrito de compras
    const [cart, setCart] = useState<Cart[]>([]);

    //función para modificar el valor del stock
    const changeStockProduct = (id: number, quantity: number): void => {
        const updateProducts = productsState.map(product => product.id == id
            ? { ...product, stock: product.stock - quantity }
            : product);
        //Modificar mi arreglo de productos
        setProductsState(updateProducts);
        //llamar función para añadir producto al carrito
        addProduct(id, quantity);
    }

    //función para agregar productos al arreglo del carrito
    const addProduct = (id: number, quantity: number): void => {
        const product = productsState.find(product => product.id == id);

        //si no existe el producto
        if (!product) {
            return;
        }

        //crear objeto para agregar al carrito
        const newCart: Cart = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price * quantity
        }

        //agregar al arreglo del carrito
        setCart([...cart, newCart]);
        console.log(cart);

    }

    return (
        <View>
            <View style={stylesGlobal.headerHome}>
                <TitleComponent title='Productos' />
                <View style={stylesGlobal.iconHome}>
                    <Text style={stylesGlobal.textIconCart}>{cart.length}</Text>
                    <Icon name='shopping-cart'
                        size={30}
                        color={SECONDARY_COLOR} />
                </View>
            </View>
            <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({ item }) => <CardProductComponent item={item} changeStockProduct={changeStockProduct} />}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-around' }} />
            </BodyComponent>
        </View>
    )
}
