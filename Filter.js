import React, { useState, useEffect } from "react";
import {
  Switch,
  TextInput,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const Filter = (props) => {

  const getEarbuds = async () => {
    try {
      const response = await fetch("http://192.168.0.31:5500/monos");
      if (!response.ok) {
        throw new Error("Erreur récupération données");
      }
      const data = await response.json();
      setEarbuds(data);
    } catch (error) {
      console.error("Error de fetch:", error.message);
    }
  }
  useEffect(() => {
    getEarbuds();

  }, []);
  const [earbuds, setEarbuds] = useState([]);
  const [isEnabled, setEnabled] = useState(true);
  const [priceMin, setMinPrice] = useState(0);
  const [priceMax, setMaxPrice] = useState(300);

  const [isEnabledtwo, setEnabledtwo] = useState(true);

  const toggleSwitch = () => setEnabled((previousState) => !previousState);
  const toggleSwitchtwo = () =>
    setEnabledtwo((previousState) => !previousState);

  const renderFilter = (item, props) => {
    if (item.price > priceMin && item.price < priceMax && isEnabled && item.options.bluetooth || !isEnabled && !item.options.bluetooth) {
      return (
        <View style={styles.reservations}>
          <Image style={styles.reservationImage} source={{ uri: item.image }} />
          <View>
            <Text style={styles.titleEarbuds}> {item.name}</Text>
            <Text>{item.price}€</Text>

          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.containers}>
      <View style={styles.container}>
        <Text style={styles.white}>Prix</Text>
        <TextInput
          style={styles.switch}
          placeholder="0"
          onChangeText={setMinPrice}
        ></TextInput>

        <TextInput
          style={styles.switch}
          placeholder="300"
          onChangeText={setMaxPrice}
        ></TextInput>
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.white}>Bluetooth</Text>
        <Switch
          trackColor={{ false: "#a8a8a8", true: "#a8d0cc" }}
          thumbColor={isEnabled ? "#008275" : "#fff"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

      </View>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={earbuds}
        renderItem={({ item }) => renderFilter(item)}
      />
    </View>
  );
};

const vh = Dimensions.get("screen").height;
const vw = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  titleLink: {
    color: "#28A2DA",
    fontSize: 20,
  },
  containers: {
    backgroundColor: 'black',
    flex: 7,
  },
  white: {
    color: "white",
  },
  titleLink: {
    color: "#28A2DA",
    fontSize: 20,
  },
  titleEarbuds: {
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
    backgroundColor: "white"

  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,

  },
});

export default Filter;
