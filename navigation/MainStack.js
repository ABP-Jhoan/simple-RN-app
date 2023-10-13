import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from "../LoginForm/Login";
import { DataList } from "../ProductsList/CardsList";
import { Home } from "../principal/Home";

//? Creando la pila de direcciones.
const Stack = createStackNavigator();

export function MainStack() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {/* 
                    //? Ternaria para evaluar si la sesión está iniciada o cerrada.
                    //? Caso 1. La sesión está iniciada y la página principal será el home.
                    //? Caso 2. La sesión está cerrada y mostrará el formulario de login. 
                */}
                {isLoggedIn ? (
                    <Stack.Screen name="Home">
                        {props => <Home {...props} setIsLoggedIn={setIsLoggedIn} />}
                    </Stack.Screen>
                    ) : (
                    <Stack.Screen name="Login">
                        {props => <LoginForm {...props} setIsLoggedIn={setIsLoggedIn} />}
                    </Stack.Screen>
                )}
                {/* //? Otras rutas. */}
                <Stack.Screen name="Products" component={DataList}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}