import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mensagem from "../paginas/mensagem";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mensagem">
        <Stack.Screen
          name="Mensagem"
          component={Mensagem}
          options={{ title: "Enviar mensagem" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
