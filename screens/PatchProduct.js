import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function PatchProduct() {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [marca, setMarca] = useState('');
    const [preco, setPreco] = useState('');
    const [validade, setValidade] = useState('');
    const [message, setMessage] = useState(null);
    const [productDetails, setProductDetails] = useState(null);

    const handleUpdateProduct = () => {
        if (!id) {
            Alert.alert("ID é obrigatório para atualização");
            return;
        }

        const productData = {
            tabela: 'Produtos',
            id,
            ...(nome && { nome }),
            ...(descricao && { descricao }),
            ...(quantidade && { quantidade }),
            ...(marca && { marca }),
            ...(preco && { preco }),
            ...(validade && { validade })
        };

        fetch('http://localhost/Loja-produtos/controller/produto.php', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                showMessage('Produto atualizado com sucesso!', 'success');
                setProductDetails(data.produto || productData);
            } else {
                showMessage('Erro: ' + data.error, 'error');
            }
        })
        .catch(error => {
            showMessage('Erro na requisição: ' + error.message, 'error');
        });
    };

    const showMessage = (msg, type) => {
        setMessage({ text: msg, type });
        setTimeout(() => setMessage(null), 5000);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Atualizar Produto</Text>
            <TextInput
                style={styles.input}
                placeholder="ID do Produto (obrigatório)"
                keyboardType="numeric"
                value={id}
                onChangeText={setId}
            />
            <TextInput
                style={styles.input}
                placeholder="Nome (opcional)"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="Descrição (opcional)"
                value={descricao}
                onChangeText={setDescricao}
            />
            <TextInput
                style={styles.input}
                placeholder="Quantidade (opcional)"
                keyboardType="numeric"
                value={quantidade}
                onChangeText={setQuantidade}
            />
            <TextInput
                style={styles.input}
                placeholder="Marca (opcional)"
                value={marca}
                onChangeText={setMarca}
            />
            <TextInput
                style={styles.input}
                placeholder="Preço (opcional)"
                keyboardType="numeric"
                value={preco}
                onChangeText={setPreco}
            />
            <TextInput
                style={styles.input}
                placeholder="Validade (AAAA-MM-DD)"
                value={validade}
                onChangeText={setValidade}
            />
            <TouchableOpacity style={styles.button} onPress={handleUpdateProduct}>
                <Text style={styles.buttonText}>Atualizar Produto</Text>
            </TouchableOpacity>

            {message && (
                <View style={[styles.message, message.type === 'success' ? styles.success : styles.error]}>
                    <Text>{message.text}</Text>
                </View>
            )}

            {productDetails && (
                <View style={styles.productDetails}>
                    <Text style={styles.productTitle}>Detalhes do Produto Atualizado</Text>
                    <Text><Text style={styles.label}>ID:</Text> {productDetails.id}</Text>
                    {productDetails.nome && <Text><Text style={styles.label}>Nome:</Text> {productDetails.nome}</Text>}
                    {productDetails.descricao && <Text><Text style={styles.label}>Descrição:</Text> {productDetails.descricao}</Text>}
                    {productDetails.quantidade && <Text><Text style={styles.label}>Quantidade:</Text> {productDetails.quantidade}</Text>}
                    {productDetails.marca && <Text><Text style={styles.label}>Marca:</Text> {productDetails.marca}</Text>}
                    {productDetails.preco && <Text><Text style={styles.label}>Preço:</Text> R$ {parseFloat(productDetails.preco).toFixed(2)}</Text>}
                    {productDetails.validade && <Text><Text style={styles.label}>Validade:</Text> {new Date(productDetails.validade).toLocaleDateString('pt-BR')}</Text>}
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#7E57C2',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: '#333',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 12,
        marginVertical: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    button: {
        backgroundColor: '#7E57C2',
        padding: 12,
        borderRadius: 4,
        marginVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    message: {
        padding: 12,
        marginVertical: 10,
        borderRadius: 4,
    },
    success: {
        backgroundColor: '#d4edda',
        borderColor: '#c3e6cb',
    },
    error: {
        backgroundColor: '#f8d7da',
        borderColor: '#f5c6cb',
    },
    productDetails: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginVertical: 20,
        width: '100%',
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
        textAlign: 'center'
    },
    label: {
        fontWeight: 'bold',
        color: 'lightskyblue',
    }
});
