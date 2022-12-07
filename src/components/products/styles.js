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
    myCartButton: {
      flexDirection: 'row',
    },
    cartNumberView: {
      backgroundColor: 'tomato',
      borderRadius: 12,
      marginRight: 5,
      width: 18,
      height: 18,
      marginLeft: 6,
    },
    cartNumberText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '600',
    },
  });
};

export default useStyle;
