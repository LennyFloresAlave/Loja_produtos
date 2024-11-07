import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function GetProduct() {
  const [products, setProducts] = useState([]);

  // Função para buscar produtos da API
  const fetchProducts = () => {
    console.log("Requisitando produtos...");
    fetch('http://localhost/Loja-produtos/controller/produto.php')
      .then(response => response.json())
      .then(data => {
        // Atualiza o estado com os dados da API
        setProducts(data);
      })
      .catch(error => console.log('Erro na requisição:', error));
  };

  // Renderiza cada item da lista de produtos
  const renderProduct = ({ item }) => (
    <View style={styles.product}>
      <Text style={styles.productTitle}>{item.nome}</Text>
      <Text style={styles.productText}>Descrição: {item.descricao}</Text>
      <Text style={styles.productText}>Quantidade: {item.quantidade}</Text>
      <Text style={styles.productText}>Preço: R$ {item.preco}</Text>
      <Text style={styles.productText}>Marca: {item.marca}</Text>
      <Text style={styles.productText}>Validade: {item.validade}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={fetchProducts}>
          <Text style={styles.buttonText}>Mostrar Produtos</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderProduct}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7E57C2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: 'rgb(45, 3, 70)',
  },
  buttonText: {
    color: '#7E57C2',
    fontSize: 16,
  },
  productList: {
    justifyContent: 'center',
  },
  product: {
    backgroundColor: '#ffffff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 5,
    width: '45%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  productTitle: {
    color: '#7E57C2',
    fontSize: 18,
    marginBottom: 10,
  },
  productText: {
    color: '#555',
    fontSize: 14,
    marginBottom: 5,
  },
});
