import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  VirtualizedList,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import stockData from "../mocks/stockMock.json";
import { colors } from "../themes/Colors";

export const Stock = () => {
  const [filtredList, setFiltredList] = useState(stockData.stock);

  const apllyFilter = (text) => {
    const updateList = stockData.stock.filter((product) => {
      return Object.keys(product)[0]
        .toLocaleLowerCase()
        .includes(text.toLocaleLowerCase());
    });
    setFiltredList(updateList);
  };

  const getItem = (data: Object[], index: number) => {
    return {
      id: index,
      product: Object.keys(data[index])[0],
      quantity: Object.values(data[index])[0],
      key: index,
    };
  };
  const getItemCount = (data: Object[]) => data.length;

  const Item = ({ product, quantity, id }) => (
    <TouchableOpacity style={styles.row} key={id}>
      <Text>{product}</Text>
      <Text>{quantity}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.stockView}>
      <View style={styles.iconView}>
        <FontAwesome5 name={"box-open"} size={50} color={colors.green} />
        <Text style={styles.title}>Stock</Text>
        <View style={styles.inputView}>
          <FontAwesome5 name={"search"} color={colors.grey} />
          <TextInput
            style={styles.input}
            placeholder={"Producto"}
            onChangeText={(text) => apllyFilter(text)}
          />
        </View>
      </View>
      <View style={styles.listView}>
        <VirtualizedList
          style={styles.list}
          data={filtredList}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <Item
              product={item.product}
              quantity={item.quantity}
              id={item.id}
            />
          )}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  stockView: {
    flex: 1,
    justifyContent: "center",
    margin: StatusBar.currentHeight,
  },
  iconView: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    flex: 1,
  },
  title: {
    color: colors.green,
    fontWeight: "bold",
    fontSize: 20,
  },
  inputView: {
    backgroundColor: colors.white,
    width: "80%",
    borderRadius: 5,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  input: {
    width: "100%",
    marginStart: 10,
  },
  listView: {
    flex: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.darkGrey,
    backgroundColor: colors.white,
    padding: 10,
  },
  selectedRow: {
    backgroundColor: colors.green,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.darkGrey,
    padding: 5,
  },
  list: {
    marginHorizontal: 20,
  },
});
