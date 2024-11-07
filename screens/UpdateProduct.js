import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function UpdateProduct() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [marca, setMarca] = useState('');
  const [preco, setPreco] = useState('');
  const [validade, setValidade] = useState('');
  const [message, setMessage] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState(null);

  const handleSubmit = () => {
    const productData = {
      id,
      nome,
      descricao,
      quantidade,
      marca,
      preco,
      validade
    };

    fetch('http://localhost/Loja-produtos/controller/produto.php', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro na atualização do produto.');
        }
      })
      .then(data => {
        showMessage('Produto atualizado com sucesso!', 'success');
        setUpdatedProduct(productData);
      })
      .catch(error => {
        showMessage('Erro ao atualizar o produto: ' + error.message, 'error');
      });
  };

  const showMessage = (message, type) => {
    setMessage({ text: message, type });
    setTimeout(() => setMessage(null), 5000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Atualizar Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="ID do Produto"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />
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
        placeholder="Validade (YYYY-MM-DD)"
        value={validade}
        onChangeText={setValidade}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Atualizar Produto</Text>
      </TouchableOpacity>

      {message && (
        <View style={[styles.message, message.type === 'success' ? styles.success : styles.error]}>
          <Text>{message.text}</Text>
        </View>
      )}

      {updatedProduct && (
        <View style={styles.productDetails}>
          <Text style={styles.detailsHeader}>Produto Atualizado:</Text>
          <Text><Text style={styles.bold}>ID:</Text> {updatedProduct.id}</Text>
          <Text><Text style={styles.bold}>Nome:</Text> {updatedProduct.nome}</Text>
          <Text><Text style={styles.bold}>Descrição:</Text> {updatedProduct.descricao}</Text>
          <Text><Text style={styles.bold}>Quantidade:</Text> {updatedProduct.quantidade}</Text>
          <Text><Text style={styles.bold}>Marca:</Text> {updatedProduct.marca}</Text>
          <Text><Text style={styles.bold}>Preço:</Text> R$ {parseFloat(updatedProduct.preco).toFixed(2)}</Text>
          <Text><Text style={styles.bold}>Validade:</Text> {new Date(updatedProduct.validade).toLocaleDateString('pt-BR')}</Text>
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
  productDetails: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  detailsHeader: {
    fontSize: 18,
    color: '#7E57C2',
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
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
});
