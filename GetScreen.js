// Exemplo para GetScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GetScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Método GET</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GetScreen;
