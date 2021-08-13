import React, { FC, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { images } from "../assets/images/images";
import { Toast } from "react-native-ui-lib";
import { colors } from "../themes/Colors";
import { initSession } from "../db/services";
import { translateError } from "../utils/translateError";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonSstilo } from "./ButtonSstilo";
interface LoginProps {
  goHome: () => void;
}

interface ErrorType {
  error: boolean;
  message: string;
}

const EMPTY_ERROR: ErrorType = { error: false, message: "" };

const Login: FC<LoginProps> = ({ goHome }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<ErrorType>(EMPTY_ERROR);
  const [showPassword, setShowPassword] = useState(false);

  const login = () => {
    if (username === "" || password === "") {
      setError({ error: true, message: "Rellene ambos campos" });
    } else {
      initSession(username, password)
        .then(() => {
          goHome();
        })
        .catch((e) => {
          setError({ error: true, message: translateError(e) });
        });
    }
  };

  return (
    <View style={styles.screenView}>
      <Image source={images.bird} style={styles.image} />
      <View style={styles.loginView}>
        <TextInput
          value={username}
          style={styles.input}
          placeholder="Usuario"
          onChangeText={setUsername}
        />
        <View style={styles.passwordView}>
          <TextInput
            value={password}
            style={styles.passwordInput}
            placeholder="Contraseña"
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCompleteType={"password"}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome
              name={showPassword ? "eye-slash" : "eye"}
              color={colors.grey}
              style={styles.icon}
              size={15}
            />
          </TouchableOpacity>
        </View>
        <ButtonSstilo action={login} text={"Iniciar sesion"} />
      </View>
      <Toast
        visible={error?.error ? true : false}
        color={colors.white}
        position={"bottom"}
        showDismiss={true}
        onDismiss={() => setError(EMPTY_ERROR)}
        message={error.message}
        centerMessage={true}
        backgroundColor={colors.green}
        autoDismiss={2000}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 25,
    backgroundColor: colors.background,
  },
  loginView: {
    justifyContent: "space-between",
    backgroundColor: colors.grey,
    borderRadius: 8,
    padding: 20,
  },
  passwordView: {
    backgroundColor: colors.background,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    borderRadius: 5,
    paddingStart: 10,
    padding: 10,
    alignItems: "center",
  },
  icon: { marginEnd: 10 },
  passwordInput: { width: "90%" },
  input: {
    marginVertical: 5,
    borderRadius: 5,
    paddingStart: 10,
    padding: 10,
    backgroundColor: colors.background,
    color: colors.black,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
  },
});
