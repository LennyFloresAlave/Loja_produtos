import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import GetProduct from './screens/GetProduct'; // Tela para exibir produtos
import CreateProduct from './screens/CreateProduct'; // Tela para adicionar produtos
import UpdateProduct from './screens/UpdateProduct'; // Tela para atualizar produtos
import DeleteProduct from './screens/DeleteProduct'; // Tela para deletar produtos
import PatchProduct from './screens/PatchProduct';


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen">
                <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Loja de Produtos' }} />
                <Stack.Screen name="GetProducts" component={GetProduct} options={{ title: 'Mostrar Produtos' }} />
                <Stack.Screen name="CreateProduct" component={CreateProduct} options={{ title: 'Adicionar Produto' }} />
                <Stack.Screen name="UpdateProduct" component={UpdateProduct} options={{ title: 'Atualizar Produto' }} />
                <Stack.Screen name="PatchProduct" component={PatchProduct} options={{ title: 'Atualizar Parcialmente Produto' }} />
                <Stack.Screen name="DeleteProduct" component={DeleteProduct} options={{ title: 'Deletar Produto' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
