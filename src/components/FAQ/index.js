import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  BackHandler,
  Linking,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
} from 'react-native';
import WebView from 'react-native-webview';

const WebViewComp = ({navigation}) => {
  const webviewRef = useRef(null);
  const [exitApp, setExitApp] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <Pressable
            onPress={() => {
              webviewRef.current.goBack();
            }}>
            <Text>Back</Text>
          </Pressable>
        );
      },
    });
  });

  var uri =
    Platform.OS == 'android'
      ? 'file:///android_asset/faq.html'
      : require('../../libs/faq.html');

  const ExecuteOnlyOnAndroid = () => {
    const backAction = () => {
      // setTimeout(() => {
      //   setExitApp(0);
      // }, 2000); // 2 seconds to tap second-time

      if (exitApp === 0) {
        setExitApp(exitApp + 1);
        webviewRef.current.goBack();
      } else if (exitApp === 1) {
        BackHandler.exitApp();
      }

      return true;
    };
    useEffect(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();
    });
    return <></>;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {Platform.OS === 'android' ? <ExecuteOnlyOnAndroid /> : <></>}
      {Platform.OS === 'android' ? (
        <WebView
          // source={{uri}}
          source={{
            uri: 'https://en.wikipedia.org/wiki/Link',
          }}
          ref={webviewRef}
          originWhitelist={['https://*', 'http://*', 'file://*', 'sms://*']}
          allowFileAccess={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          geolocationEnabled={true}
          startInLoadingState={true}
          saveFormDataDisabled={true}
          allowFileAccessFromFileURLS={true}
          allowUniversalAccessFromFileURLs={true}
          // onNavigationStateChange={event => {
          //   console.log('EVENT-', event);
          //   if (event.navigationType === 'click') {
          //     console.log('you clicked');
          //     webviewRef.current.stopLoading();
          //     Linking.openURL(event.url);
          //   }
          // }}
          onShouldStartLoadWithRequest={event => {
            if (event.lockIdentifier) {
              webviewRef.current.stopLoading();
              Linking.openURL(event.url);
              return true;
            } else {
              return true;
            }
          }}
        />
      ) : (
        <WebView
          // source={require('../../libs/faq.html')}
          source={{
            uri: 'https://en.wikipedia.org/wiki/Link',
          }}
          ref={webviewRef}
          originWhitelist={['https://*', 'http://*', 'file://*', 'sms://*']}
          allowFileAccess={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          geolocationEnabled={true}
          startInLoadingState={true}
          saveFormDataDisabled={true}
          allowFileAccessFromFileURLS={true}
          allowUniversalAccessFromFileURLs={true}
          // onNavigationStateChange={event => {
          //   if (event.navigationType === 'click') {
          //     webviewRef.current.stopLoading();
          //     Linking.openURL(event.url);
          //   }
          // }}
          onNavigationStateChange={event => {
            console.log(event);
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default WebViewComp;
