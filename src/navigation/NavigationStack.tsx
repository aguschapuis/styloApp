import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import StockScreen from "./screens/StockScreen";
import AddStockScreen from "./screens/AddStockScreen";
export type StackParamList = {
  login: undefined;
  home: undefined;
  stock: undefined;
  addStock: undefined;
  removeStock: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"home"}
      >
        <Stack.Screen name={"login"} component={LoginScreen} />
        <Stack.Screen name={"home"} component={HomeScreen} />
        <Stack.Screen name={"stock"} component={StockScreen} />
        <Stack.Screen name={"addStock"} component={AddStockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
