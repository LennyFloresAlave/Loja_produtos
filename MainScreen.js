import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Métodos HTTP</Text>
      <View style={styles.buttonContainer}>
        {['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map((method) => (
          <TouchableOpacity
            key={method}
            style={styles.button}
            onPress={() => navigation.navigate(method)}
          >
            <Text style={styles.buttonText}>{method}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7E57C2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#7E57C2',
    fontSize: 16,
  },
});

export default MainScreen;
