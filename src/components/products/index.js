import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import useStyle from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  decreaseItem,
  increaseItem,
} from '../../redux/actions/actions';

const DATA = [
  {
    id: 0,
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQGCGibS3Fk2hgA8Z3QOvZOqkUheCnnFvWTZhLatM3G1QT3kO82WjhEyaHCOB72kkVlY3KGU5ddXAZ9XLkC1PG6bqFu&usqp=CAc',
    name: "PUMA x 1DER Supertec Men's Shoes",
    brand: 'PUMA',
    price: 6999,
    quantity: 0,
  },
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/71ISIssoVFL._AC_UY218_.jpg',
    name: 'boAt NIRVANAA 751ANC Hybrid Active Noise Cancelling Bluetooth Wireless',
    brand: 'boAt',
    price: 3999,
    quantity: 0,
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/61a9RqyKwtS._UX625_.jpg',
    name: 'Nike mens Nike Dunk Low Photon Dust Sneaker',
    brand: 'Nike',
    price: 6000,
    quantity: 0,
  },
];

const ProductScreen = ({navigation}) => {
  const styles = useStyle();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            style={styles.myCartButton}
            onPress={() => {
              navigation.navigate('CartScreen');
            }}>
            <Text>My Cart</Text>
            <View style={styles.cartNumberView}>
              <Text style={styles.cartNumberText}>{numberCart}</Text>
            </View>
          </Pressable>
        );
      },
    });
  });

  const dispatch = useDispatch();

  const {numberCart} = useSelector(state => state);
  const use = useSelector(state => state);
  console.log('##', use);

  // console.log(items);
  return (
    <View>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}, index) => {
          return (
            <View style={styles.container}>
              <View style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{uri: item.img}}
                    style={styles.itemImage}
                    resizeMode={'contain'}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.brandText}>{item.brand}</Text>
                  <Text>
                    {item.name.substring(0, 30)} {'...'}
                  </Text>
                  <Text style={styles.price}>
                    {'\u20B9'}
                    {item.price}
                  </Text>
                  <View style={styles.addRemoveView}>
                    <TouchableOpacity
                      style={styles.addToCart}
                      onPress={() => {
                        dispatch(addItemToCart(item));
                        item.quantity++;
                      }}>
                      <Text style={styles.addColor}>Add to cart</Text>
                    </TouchableOpacity>
                    {/* {item.quantity === 0 ? null : (
                      <>
                        <TouchableOpacity
                          style={styles.addRemoveButton}
                          onPress={() => {
                            dispatch(addItemToCart(item));
                            item.quantity++;
                          }}>
                          <Text style={styles.addColor}>+</Text>
                        </TouchableOpacity>
                        <View style={styles.cartCount}>
                          <Text>{use.cartItems.quantity}</Text>
                        </View>
                        <TouchableOpacity
                          style={styles.addRemoveButton}
                          onPress={() => {
                            dispatch(decreaseItem(item));
                            item.quantity--;
                          }}>
                          <Text style={styles.addColor}>-</Text>
                        </TouchableOpacity>
                      </>
                    )} */}
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ProductScreen;
