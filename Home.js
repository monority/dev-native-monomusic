import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import cars from "./cars";
import { FlatList } from "react-native";
import { Dimensions } from "react-native";

export default function Home(props) {
  const renderResCar = (item) => {
    return (
      <View style={styles.reservations}>
        <Image style={styles.reservationImage} source={{ uri: item.image }} />
        <Text style={styles.titleCars}>{item.name}</Text>
        <Text>{item.price}€</Text>
        <Text
          onPress={() => props.navigation.navigate("CarDetail", { item })}
          style={styles.titleLink}
        >
          Réserver
        </Text>
      </View>
    );
  };

  const sortArray = () => {
    const sortedCars = cars
      .sort((a, b) => b.reservations - a.reservations)
      .slice(0, 4);
    return sortedCars;
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.coffeeItem}
        onPress={() => props.navigation.navigate("CarList")}
      >
        <ImageBackground
          imageStyle={{ borderRadius: 15 }}
          style={styles.image}
          source={require("./assets/hero.jpg")}
        >
          <Text style={styles.text}>{cars.length} Véhicules à découvrir</Text>
        </ImageBackground>
      </TouchableOpacity>
      <Text style={styles.titleReserve}>Les plus réservés</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={sortArray(cars)}
        renderItem={({ item }) => renderResCar(item)}
        numColumns={2}
      />
    </View>
  );
}

const vh = Dimensions.get("screen").height;
const vm = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  titleLink: {
    color: "#28A2DA",
    fontSize: 20,
  },
  titleCars: {
    fontWeight: "bold",
    fontSize:15,
  },
  titleReserve: {
    color: "#467485",
    fontSize: 20,
  },
  reservations: {
    backgroundColor: "#cacbcc",
    borderRadius: 15,
    height: vh / 4.2,
    margin: 5,
    padding: 20,
    width: vm / 2.2,
  },
  reservationImage: {
    width: 120,
    height: 80,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#2d4f6c",
  },
  image: {
    marginTop: 10,
    backgroundColor: "#fff",
    width: 380,
    height: 250,
    borderRadius: 15,
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    margin: 10,
    fontSize: 20,
  },
});
