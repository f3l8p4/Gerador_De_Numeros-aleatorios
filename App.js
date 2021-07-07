import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gerador from './components/Gerador';
export default function App() {
  return (
    <View style={styles.fundo}>
      <Gerador/>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor:'rgb(64,224,208)',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:25
  },
});
