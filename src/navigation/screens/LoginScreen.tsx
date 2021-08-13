import React, { FC } from "react";
import Login from "../../components/Login";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../NavigationStack";

type LoginScreenNavigationType = StackNavigationProp<StackParamList, "login">;

interface LoginScreenProps {
  navigation: LoginScreenNavigationType;
}

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
  return <Login goHome={() => navigation.navigate("home")} />;
};

export default LoginScreen;
