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
  Platform,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import stockData from "../mocks/stockMock.json";
import { colors } from "../themes/Colors";

export const AddStock = () => {
  const [filtredList, setFiltredList] = useState(stockData.ingresos);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    // const updateData = stockData.ingresos.filter((product) => {
    //   return Object.keys(product)[0] === date.getTime();
    // });
    // setFiltredList(updateData);
  };

  const getItem = (data: Object[], index: number) => {
    return {
      id: Object.keys(data[index])[0],
      date: Object.values(data[index])[0].date,
    };
  };
  const getItemCount = (data: Object[]) => data.length;

  const Item = ({ date }) => (
    <TouchableOpacity style={styles.row} key={date}>
      <Text>{date}</Text>
    </TouchableOpacity>
  );
  console.log(date.toString());

  return (
    <SafeAreaView style={styles.stockView}>
      <View style={styles.iconView}>
        <FontAwesome5 name={"plus-circle"} size={50} color={colors.green} />
        <Text style={styles.title}>Ingresos</Text>
      </View>
      <View style={styles.listView}>
        {Platform.OS === "android" ? (
          <View style={styles.dateViewAndroid}>
            <Button
              title={"Fecha"}
              onPress={() => {
                setShow(true);
              }}
              color={colors.green}
            />
            <Text style={styles.title}>
              {date.getDate() +
                "-" +
                date.getMonth() +
                "-" +
                date.getFullYear()}
            </Text>
            {show && (
              <DateTimePicker
                value={date}
                display="default"
                onChange={onChange}
                textColor={colors.green}
                onTouchCancel={() => setShow(false)}
              />
            )}
          </View>
        ) : (
          <View style={{ marginStart: 25, marginBottom: 20 }}>
            <DateTimePicker
              value={date}
              display="default"
              onChange={onChange}
              textColor={colors.green}
            />
          </View>
        )}
        <VirtualizedList
          style={styles.list}
          data={filtredList}
          initialNumToRender={10}
          renderItem={({ item }) => <Item date={item.id} />}
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
  dateViewAndroid: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
    marginHorizontal: 30,
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
    flex: 5,
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
