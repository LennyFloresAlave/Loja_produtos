import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Métodos HTTP Android</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('GetProducts')}
                >
                    <Text style={styles.buttonText}>GET</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('CreateProduct')}
                >
                    <Text style={styles.buttonText}>POST</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('UpdateProduct')}
                >
                    <Text style={styles.buttonText}>PUT</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('PatchProduct')}
                >
                    <Text style={styles.buttonText}>PATCH</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('DeleteProduct')}
                >
                    <Text style={styles.buttonText}>DELETE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7E57C2',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingVertical: 30,
        paddingHorizontal: 20,
        width: '90%',
        maxWidth: 400,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#7E57C2',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 8,
        marginBottom: 15,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default MainScreen;
