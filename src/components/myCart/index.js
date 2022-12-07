import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyle from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  decreaseItem,
  increaseItem,
  removeItemFromCart,
} from '../../redux/actions/actions';
import {REMOVE_FROM_CART} from '../../redux/ActionTypes';

const CartScreen = () => {
  const styles = useStyle();
  const dispatch = useDispatch();
  const {numberCart} = useSelector(state => state);
  const use = useSelector(state => state.cartItems);
  return (
    <View style={{flex:1}}>
      {numberCart === 0 ? (
        <View style={styles.emptyCartView}>
          <Text style={styles.emptyCartText}>No items added in cart....</Text>
        </View>
      ) : (
        <FlatList
          data={use}
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
                      {/* <TouchableOpacity
                        style={styles.addToCart}
                        onPress={() => {
                          dispatch(addItemToCart(item));
                        }}>
                        <Text style={styles.addColor}>Add to cart</Text>
                      </TouchableOpacity> */}
                      {item.quantity === 0 ? null : (
                        <>
                          <TouchableOpacity
                            style={styles.addRemoveButton}
                            onPress={() => {
                              dispatch(addItemToCart(item));
                            }}>
                            <Text style={styles.addColor}>+</Text>
                          </TouchableOpacity>
                          <View style={styles.cartCount}>
                            <Text>{item.quantity}</Text>
                          </View>
                          <TouchableOpacity
                            style={styles.addRemoveButton}
                            onPress={() => {
                              dispatch(decreaseItem(item));
                            }}>
                            <Text style={styles.addColor}>-</Text>
                          </TouchableOpacity>
                        </>
                      )}
                      <TouchableOpacity
                        style={styles.removeView}
                        onPress={() => dispatch(removeItemFromCart(item))}>
                        <Image
                          source={require('../../assets/images/bin.png')}
                          style={styles.removeIcon}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default CartScreen;
