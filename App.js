import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Métodos HTTP</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('GET')}>
            <Text style={styles.buttonText}>GET</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('POST')}>
            <Text style={styles.buttonText}>POST</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('PUT')}>
            <Text style={styles.buttonText}>PUT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('PATCH')}>
            <Text style={styles.buttonText}>PATCH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('DELETE')}>
            <Text style={styles.buttonText}>DELETE</Text>
          </TouchableOpacity>
        </View>
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
  card: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 7,
    alignItems: 'center',
  },
  title: {
    color: '#333',
    marginBottom: 20,
    fontSize: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    maxWidth: 800,
  },
  button: {
    width: 100,
    padding: 15,
    backgroundColor: '#7E57C2',
    borderRadius: 5,
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
