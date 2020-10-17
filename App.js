import React, { Component,useState,useRef,useEffect } from 'react';
import { View,ActivityIndicator,Linking,BackHandler,PermissionsAndroid } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {

  const [currentUrl, setCurrentUrl] = useState()
  const webviewRef = useRef(null)

console.log(currentUrl)
  useEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (webviewRef.current) webviewRef.current.goBack()
        return true;
      };
  
      BackHandler.addEventListener(
        'hardwareBackPress', onBackPress
      );
  
      return () =>
        BackHandler.removeEventListener(
          'hardwareBackPress', onBackPress
        );
    }, [])
  );

//  const renderLoadingView = () => {
//     return (
//       <ActivityIndicator 
//       color="black"
//       size="large"
//       style={{marginBottom:20}}
//       />
//     );
// }


const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Request Camera Permission",
        message:
          "Give access to your camera " +
          "To use QR code scanner.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

  const visit = (url) => {
    Linking.openURL(url)
  }
  

    return (
      <View style={{ flex: 1 }}>
      
        <WebView
          source={{
            uri:
              'https://d3eirljyzihdnw.cloudfront.net/',
          }}
          startInLoadingState={true}
          renderLoading={()=>(
            <ActivityIndicator 
            color="black"
            size="large"
            style={{marginBottom:20}}
            />
          )}

          ref={webviewRef}
          onNavigationStateChange={navState => {
         
          setCurrentUrl(navState.url)
            if(navState.url==="https://utkarsh-bharat.herokuapp.com/qrcode_scanner"){
              requestCameraPermission()
            }
            if(navState.url==="https://utkarsh-bharat.herokuapp.com/homepage"){
              webviewRef.current.clearHistory()
            }
          }}

        />
        
      </View>
    );
  
}


export default App;
