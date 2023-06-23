/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CloudinaryComponent from './src/components/cloudinary/CloudinaryComponent';

function App(): JSX.Element {
  return (
    <View>
      <Text>
        <CloudinaryComponent />
      </Text>
    </View>
  );
}

// const styles = StyleSheet.create({});

export default App;
