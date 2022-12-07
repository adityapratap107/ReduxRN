import {StyleSheet} from 'react-native';

const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    cardContainer: {
      backgroundColor: '#fff',
      width: '90%',
      height: 130,
      marginTop: 40,
      alignSelf: 'center',
      flexDirection: 'row',
      borderRadius: 8,
    },
    imageContainer: {
      marginTop: 20,
    },
    itemImage: {
      height: 100,
      width: 100,
    },
    textContainer: {
      width: '70%',
      marginTop: 15,
      paddingTop: 10,
      paddingLeft: 10,
    },
    brandText: {
      fontWeight: '800',
    },
    price: {
      color: 'green',
    },
    addRemoveView: {
      flexDirection: 'row',
      right: 15,
    },
    addToCart: {
      backgroundColor: 'green',
      width: 80,
      padding: 4,
      borderRadius: 4,
      marginTop: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addRemoveButton: {
      backgroundColor: 'green',
      width: 20,
      padding: 4,
      marginLeft: 16,
      borderRadius: 8,
      marginTop: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addColor: {
      color: '#fff',
    },
    cartCount: {
      justifyContent: 'center',
      left: 8,
    },
    removeView: {
      position: 'absolute',
      left: 180,
      top: 1,
    },
    removeIcon: {
      height: 25,
      width: 25,
    },
    emptyCartView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyCartText: {
      fontSize: 20,
      fontWeight: '600',
    },
  });
};

export default useStyle;
