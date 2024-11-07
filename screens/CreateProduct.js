import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function CreateProduct() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [marca, setMarca] = useState('');
  const [preco, setPreco] = useState('');
  const [validade, setValidade] = useState('');
  const [message, setMessage] = useState(null);
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    const productData = {
      nome,
      descricao,
      quantidade,
      marca,
      preco,
      validade
    };

    fetch('http://localhost/Loja-produtos/controller/produto.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro na criação do produto.');
        }
      })
      .then(data => {
        showMessage('Produto criado com sucesso!', 'success');
        addProductToList(productData);
      })
      .catch(error => {
        showMessage('Erro ao criar o produto: ' + error.message, 'error');
      });
  };

  const showMessage = (message, type) => {
    setMessage({ text: message, type });
    setTimeout(() => setMessage(null), 5000);
  };

  const addProductToList = (product) => {
    setProducts([...products, product]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Criar Produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={marca}
        onChangeText={setMarca}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Validade"
        value={validade}
        onChangeText={setValidade}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Criar Produto</Text>
      </TouchableOpacity>

      {message && (
        <View style={[styles.message, message.type === 'success' ? styles.success : styles.error]}>
          <Text>{message.text}</Text>
        </View>
      )}

      {products.length > 0 && (
        <View style={styles.productList}>
          <Text style={styles.listHeader}>Produtos Adicionados:</Text>
          {products.map((product, index) => (
            <View key={index} style={styles.productItem}>
              <Text style={styles.productName}>{product.nome}</Text>
              <Text><Text style={styles.bold}>Descrição:</Text> {product.descricao}</Text>
              <Text><Text style={styles.bold}>Marca:</Text> {product.marca}</Text>
              <Text><Text style={styles.bold}>Preço:</Text> R$ {product.preco}</Text>
              <Text><Text style={styles.bold}>Quantidade:</Text> {product.quantidade}</Text>
              <Text><Text style={styles.bold}>Validade:</Text> {product.validade}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#7E57C2',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    borderColor: '#7E57C2',
    borderWidth: 1,
  },
  buttonText: {
    color: '#7E57C2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    textAlign: 'center',
  },
  success: {
    backgroundColor: '#d4edda',
    color: '#155724',
    borderColor: '#c3e6cb',
  },
  error: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    borderColor: '#f5c6cb',
  },
  productList: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  listHeader: {
    fontSize: 18,
    color: '#7E57C2',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  productItem: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
  },
  productName: {
    fontSize: 16,
    color: '#7E57C2',
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});
