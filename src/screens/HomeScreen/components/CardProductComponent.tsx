import React from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../HomeScreen';
import { stylesGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../commons/constants';

interface Props {
    item: Product;
}

export const CardProductComponent = ({ item }: Props) => {
    return (
        <View style={stylesGlobal.containerCard}>
            <Image source={{
                uri: item.pathImage
            }}
                style={stylesGlobal.imageCard} />
            <View>
                <Text style={stylesGlobal.titleCard}>{item.name}</Text>
                <Text>Precio: ${item.price.toFixed(2)}</Text>
            </View>
            <View style={stylesGlobal.iconCart}>
                <Icon name='add-shopping-cart' size={35} color={TERTIARY_COLOR} />
            </View>
        </View>
    )
}
