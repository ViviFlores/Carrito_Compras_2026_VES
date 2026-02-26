import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Product } from '../HomeScreen';
import { stylesGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../commons/constants';

interface Props {
    isVisible: boolean;     //mostrar u ocultar el modal
    item: Product;
    hiddenModal: () => void;   //función para actualizar el estado del modal
    changeStockProduct: (id: number, quantity: number) => void;  //función para actualizar el stock
}

export const ModalProductComponent = ({ isVisible, item, hiddenModal, changeStockProduct }: Props) => {
    const { width } = useWindowDimensions();
    //hook useState: permite gestionar el valor de la cantidad
    const [quantity, setQuantity] = useState<number>(1);

    //función para agregar al carrito
    const handleAddCart = () => {
        //llamar la función para actualizar el stock
        changeStockProduct(item.id, quantity);
        //cerrar modal
        hiddenModal();
        //reiniciar la cantidad
        setQuantity(1);
    }

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={stylesGlobal.containerModal}>
                <View style={{
                    ...stylesGlobal.bodyModal,
                    width: width * 0.80
                }}>
                    <View style={stylesGlobal.headerModal}>
                        <Text style={stylesGlobal.titleModal}>{item.name} - ${item.price.toFixed(2)}</Text>
                        <View style={stylesGlobal.iconCart}>
                            <Icon name='cancel'
                                size={23}
                                color={TERTIARY_COLOR}
                                onPress={hiddenModal} />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{
                            uri: item.pathImage
                        }}
                            style={stylesGlobal.imageModal} />
                    </View>
                    {
                        (item.stock == 0)
                            ? <Text style={stylesGlobal.textStock}>
                                Producto agotado
                            </Text>
                            :
                            <>
                                <View style={stylesGlobal.containerQuantity}>
                                    <TouchableOpacity style={stylesGlobal.buttonQuantity}
                                        onPress={() => setQuantity(quantity - 1)}
                                        disabled={quantity == 1}>
                                        <Text style={stylesGlobal.buttonQuantityText}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 17 }}>{quantity}</Text>
                                    <TouchableOpacity style={stylesGlobal.buttonQuantity}
                                        onPress={() => setQuantity(quantity + 1)}
                                        disabled={quantity == item.stock}>
                                        <Text style={stylesGlobal.buttonQuantityText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={stylesGlobal.textTotalPrice}>
                                        Total: ${(item.price * quantity).toFixed(2)}
                                    </Text>
                                </View>
                                <TouchableOpacity style={stylesGlobal.button}
                                    onPress={handleAddCart}>
                                    <Text style={stylesGlobal.buttonText}>Agregar Carrito</Text>
                                </TouchableOpacity>
                            </>
                    }
                </View>
            </View>
        </Modal>
    )
}
