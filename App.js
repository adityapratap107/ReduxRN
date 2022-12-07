import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Root from './src/navigation';
import {myStore} from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={myStore}>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <Root />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
