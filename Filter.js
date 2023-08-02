import React, { useState } from "react";
import {
  Switch,
  TextInput,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import cars, { AUTOMATIC, MANUAL } from "./cars";

const Filter = () => {


  const [isEnabled, setEnabled] = useState(true);
  const [isEnabledtwo, setEnabledtwo] = useState(true);
  const [priceMin, setMinPrice] = useState(0);
  const [priceMax, setMaxPrice] = useState(1000);



  const toggleSwitch = () => setEnabled((previousState) => !previousState);
  const toggleSwitchtwo = () =>
    setEnabledtwo((previousState) => !previousState);

  const renderFilter = (item, props) => {
    if (item.price > priceMin && item.price < priceMax && isEnabled && item.options.transmission === "automatique" || !isEnabled && item.options.transmission === "manuel" && isEnabledtwo && item.options.aircondition || !isEnabledtwo && !item.options.aircondition) {
      return (
        <View style={styles.reservations}>
          <Image style={styles.reservationImage} source={{ uri: item.image }} />
          <View>
            <Text style={styles.titleCars}> {item.name}</Text>
            <Text>{item.price}€</Text>

          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.containers}>
      <View style={styles.container}>
        <Text>Prix</Text>
        <TextInput
          style={styles.switch}
          placeholder="0"
          onChangeText={setMinPrice}
        ></TextInput>

        <TextInput
          style={styles.switch}
          placeholder="1000"
          onChangeText={setMaxPrice}
        ></TextInput>
      </View>
      <View style={styles.containerInput}>
        <Text>Automatique</Text>
        <Switch
          trackColor={{ false: "#a8a8a8", true: "#a8d0cc" }}
          thumbColor={isEnabled ? "#008275" : "#fff"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text>Climatisation</Text>
        <Switch
          trackColor={{ false: "#a8a8a8", true: "#a8d0cc" }}
          thumbColor={isEnabledtwo ? "#008275" : "#fff"}
          onValueChange={toggleSwitchtwo}
          value={isEnabledtwo}
        />
      </View>

      <FlatList
        keyExtractor={(item) => item.id}
        data={cars}
        renderItem={({ item }) => renderFilter(item)}
        numColumns={1}
      />
    </View>
  );
};

const vh = Dimensions.get("screen").height;
const vm = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  titleLink: {
    color: "#28A2DA",
    fontSize: 20,
  },
  containers: {
    backgroundColor: '#FFFFFF80',
    flex: 7,
  },
  titleLink: {
    color: "#28A2DA",
    fontSize: 20,
  },
  titleCars: {
    fontWeight: "bold",
  },
  titleReserve: {
    color: "#467485",
    fontSize: 20,
  },
  reservations: {
    flexDirection: "row",
    backgroundColor: "#cacbcc",
    margin: 10,
    borderRadius: 15,
    padding: 15,
  },
  reservationImage: {
    width: 120,
    height: 80,
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 15,
  },
  switch: {
    width: 100,
    borderRadius: 15,
    borderColor: "#2d4f6c",
    borderStyle: "solid",
    paddingRight: 30,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,

  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
});

export default Filter;
