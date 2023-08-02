import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";

const CarDetail = (props) => {
  const [item, setItem] = useState(props.route.params.item);

  return (
    <View style={styles.container}>
      <Image style={styles.carImage} source={{ uri: item.image }} />

      <View style={styles.wrappers}>
        <View style={styles.wrapper}>
          <Image
            source={require("./assets/icons/compass.png")}
            style={styles.icon}
          ></Image>
          <Text>{item.options.transmission}</Text>
        </View>
        <View style={styles.wrapper}>
          <Image
            source={require("./assets/icons/doors.png")}
            style={styles.icon}
          ></Image>
          <Text>{item.options.person} personnes</Text>
        </View>
        <View style={styles.wrapper}>
          <Image
            source={require("./assets/icons/engine.png")}
            style={styles.icon}
          ></Image>
          <Text>{item.options.navigation ? "GPS intégré" : "Pas de GPS"}</Text>
        </View>
        <View style={styles.wrapper}>
          <Image
            source={require("./assets/icons/snow.png")}
            style={styles.icon}
          ></Image>
          <Text>
            {item.options.aircondition ? "Véhicule Climatisé" : "Pas de Clim"}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textfooter}>{item.price}$ par jour</Text>
      </View>
    </View>
  );
};

export default CarDetail;

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  carImage: {
    width: 250,
    height: 160,
  },
  wrappers: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 2,
  },
  wrapper: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    backgroundColor: "#2c7896",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
  },
  textfooter: {
    color: "white",
  },
});
