
import React from 'react';
import { StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar

} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() {
  return (
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    justifyContent: 'center',
    alignItems:'center'
  },
});
