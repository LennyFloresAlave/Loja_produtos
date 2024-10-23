import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fundo}>
        <Text style={styles.title}>Métodos HTTP</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ProdutoGet')}
          >
            <Text style={styles.buttonText}>GET</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ProdutoPost')}
          >
            <Text style={styles.buttonText}>POST</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ProdutoPut')}
          >
            <Text style={styles.buttonText}>PUT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ProdutoPatch')}
          >
            <Text style={styles.buttonText}>PATCH</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ProdutoDelete')}
          >
            <Text style={styles.buttonText}>DELETE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ProdutoGetScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Produto GET</Text>
    <Text>Aqui você pode obter detalhes do produto.</Text>
  </View>
);

const ProdutoPostScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Produto POST</Text>
    <Text>Aqui você pode adicionar um novo produto.</Text>
  </View>
);

const ProdutoPutScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Produto PUT</Text>
    <Text>Aqui você pode atualizar um produto existente.</Text>
  </View>
);

const ProdutoPatchScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Produto PATCH</Text>
    <Text>Aqui você pode modificar partes de um produto existente.</Text>
  </View>
);

const ProdutoDeleteScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Produto DELETE</Text>
    <Text>Aqui você pode excluir um produto.</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProdutoGet" component={ProdutoGetScreen} />
        <Stack.Screen name="ProdutoPost" component={ProdutoPostScreen} />
        <Stack.Screen name="ProdutoPut" component={ProdutoPutScreen} />
        <Stack.Screen name="ProdutoPatch" component={ProdutoPatchScreen} />
        <Stack.Screen name="ProdutoDelete" component={ProdutoDeleteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7E57C2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fundo: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 7,
  },
  title: {
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    width: 100,
    padding: 15,
    backgroundColor: '#7E57C2',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  screenText: {
    fontSize: 24,
    marginBottom: 10,
  },
});
