import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import React, { FC } from "react";
import Home from "../../components/Home";
import { StackParamList } from "../NavigationStack";

type HomeScreenNavigationType = StackNavigationProp<StackParamList, "home">;

interface HomeScreenProps {
  navigation: HomeScreenNavigationType;
}

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <Home
      goAddStockScreen={() => navigation.navigate("addStock")}
      goRemoveStockScreen={() => console.log("removestock")}
      goStockScreen={() => navigation.navigate("stock")}
    />
  );
};

export default HomeScreen;
