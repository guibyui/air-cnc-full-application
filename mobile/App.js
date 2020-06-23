import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './src/routes';

// View: Similar to div
// Text: All kinds of text
// Stylesheet: const styles = StyleSheet.create({});
// Flex box and column direction by default


YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return ( <Routes />
  );
}