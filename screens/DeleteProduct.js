import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function DeleteProduct() {
  const [deleteId, setDeleteId] = useState('');
  const [message, setMessage] = useState(null);

  const handleDelete = () => {
    const deleteData = {
      tabela: 'Produtos',
      id: deleteId,
    };

    fetch('http://localhost/Loja-produtos/controller/produto.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deleteData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição: ' + response.statusText);
        }
        return response.json();
      })
      .then(jsonData => {
        if (jsonData.status === '204') {
          showMessage('Produto deletado com sucesso!', 'success');
        } else if (jsonData.error) {
          showMessage('Erro: ' + jsonData.error, 'error');
        } else {
          showMessage('Erro inesperado.', 'error');
        }
      })
      .catch(error => {
        showMessage('Erro na requisição: ' + error.message, 'error');
      });
  };

  const showMessage = (message, type) => {
    setMessage({ text: message, type });
    setTimeout(() => setMessage(null), 7000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Deletar Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="ID do Produto"
        value={deleteId}
        onChangeText={setDeleteId}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <Text style={styles.buttonText}>Deletar Produto</Text>
      </TouchableOpacity>

      {message && (
        <View style={[styles.message, message.type === 'success' ? styles.success : styles.error]}>
          <Text>{message.text}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7E57C2',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
