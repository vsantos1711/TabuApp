import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaInicio from "./src/screens/TelaInicio";
import TelaTabuada from "./src/screens/TelaTabuada";

const Telas = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Telas.Navigator screenOptions={{ headerShown: false }}>
        <Telas.Screen name="TelaTabuada" component={TelaTabuada} />
        <Telas.Screen name="Inicio" component={TelaInicio} />
      </Telas.Navigator>
    </NavigationContainer>
  );
}
