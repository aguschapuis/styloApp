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
  TextInput,
  Button,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import stockData from "../mocks/stockMock.json";
import { colors } from "../themes/Colors";

export const AddStock = () => {
  const [filtredList, setFiltredList] = useState(stockData.ingresos);
  const [pickedDate, setPickedDate] = useState(null);
  const [show, setShow] = useState(false);
  const getCustomInputValue = (value) => {
    if (!value) {
      return "Default";
    }
    return value.includes(new Date().getFullYear() + 1) ? "Next Year" : value;
  };

  const renderCustomInput = (props, toggle) => {
    const { value } = props;
    return (
      <TouchableOpacity
        flex
        row
        spread
        onPress={() => {
          toggle(true);
        }}
      >
        <Text>Valid from</Text>
        <Text style={{ color: colors.green }}>
          {getCustomInputValue(value)}
        </Text>
      </TouchableOpacity>
    );
  };

  const getItem = (data: Object[], index: number) => {
    return {
      date: Object.keys(data[index])[0],
      quantity: Object.values(data[index])[0],
    };
  };
  const getItemCount = (data: Object[]) => data.length;

  const Item = ({ date }) => (
    <TouchableOpacity style={styles.row} key={date}>
      <Text>{date}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.stockView}>
      <View style={styles.iconView}>
        <FontAwesome5 name={"plus-circle"} size={50} color={colors.green} />
        <Text style={styles.title}>Ingresos</Text>
        <Button onPress={() => setShow(true)} title="Elegir Fecha" />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(1598051730000)}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={(e, date) => console.log(e, date)}
          />
        )}
      </View>
      <View style={styles.listView}>
        <VirtualizedList
          style={styles.list}
          data={filtredList}
          initialNumToRender={10}
          renderItem={({ item }) => <Item date={item.date} />}
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
