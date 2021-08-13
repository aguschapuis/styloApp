import React, { FC } from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import { ButtonSstilo } from "./ButtonSstilo";

interface HomeProps {
  goStockScreen: () => void;
  goAddStockScreen: () => void;
  goRemoveStockScreen: () => void;
}

const Home: FC<HomeProps> = ({
  goAddStockScreen,
  goRemoveStockScreen,
  goStockScreen,
}) => {
  return (
    <View style={styles.homeView}>
      <ButtonSstilo
        text={"Stock"}
        action={goStockScreen}
        containerStyle={styles.buttonContainer}
        icon={"boxOpen"}
      />
      <ButtonSstilo
        text={"Ingresos"}
        action={goAddStockScreen}
        containerStyle={styles.buttonContainer}
        icon={"addCircle"}
      />
      <ButtonSstilo
        text={"Retiros"}
        action={goRemoveStockScreen}
        containerStyle={styles.buttonContainer}
        icon={"paperPlane"}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 35,
  },
  buttonContainer: {
    marginTop: 25,
    height: 50,
  } as ViewProps,
});
