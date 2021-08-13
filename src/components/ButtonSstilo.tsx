import { FontAwesome5 } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, ViewProps } from "react-native";
import { colors } from "../themes/Colors";
import { iconNames } from "../utils/iconsNames";

interface ButtonProps {
  action: () => void;
  text: string;
  containerStyle?: ViewProps;
  icon?: keyof typeof iconNames;
}

export const ButtonSstilo: FC<ButtonProps> = ({
  action,
  text,
  containerStyle = {},
  icon,
}) => {
  console.log(icon);
  return (
    <TouchableOpacity style={[styles.button, containerStyle]} onPress={action}>
      {icon && (
        <FontAwesome5 name={iconNames[icon]} size={20} color={colors.white} />
      )}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    borderRadius: 5,
    shadowColor: colors.black,
    justifyContent: "center",
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
  },
});
