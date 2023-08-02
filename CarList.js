import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import cars from "./cars";


export default function CarList(props) {

  const renderCarList = (item) => {
    return (
      <TouchableOpacity
        style={styles.carItem}
        onPress={() => props.navigation.navigate("CarDetail", { item })}
      >
        <View style={styles.ImageDiv}>
          <Image style={styles.carImage} source={{ uri: item.image }} />
        </View>
        <View>
          <Text style={styles.FontBold}>{item.name}</Text>
          <Text>{item.price} $ par jour</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={cars}
        renderItem={({ item }) => renderCarList(item)}
      />
    </View>
  );
}

const vh = Dimensions.get("screen").height;
const vm = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  FontBold: {
    fontWeight: "bold",
  },
  ImageDiv: {
    justifyContent: "center",
  },
  carImage: {
    width: 150,
    height: 90,
  },
  carItem: {
    borderRadius: 15,
    flexDirection: "row",
    width: 350,
    height: 150,
    backgroundColor: "#cacbcc",
    margin: 15,
    padding: 5,
  },


});
