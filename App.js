import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaInicio from "./src/screens/TelaInicio";
import TelaTabuada from "./src/screens/TelaTabuada";
import TelaRespostaCorreta from "./src/screens/TelaRespostaCorreta";

const Telas = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Telas.Navigator screenOptions={{ headerShown: false }}>
        <Telas.Screen name="Inicio" component={TelaInicio} />
        <Telas.Screen
          name="TelaRespostaCorreta"
          component={TelaRespostaCorreta}
        />
        <Telas.Screen name="TelaTabuada" component={TelaTabuada} />
      </Telas.Navigator>
    </NavigationContainer>
  );
}
