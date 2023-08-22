import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";

const ProductDetail = (props) => {
  const [item, setItem] = useState(props.route.params.item);

  return (
    <View style={styles.container}>
      <Image style={styles.earbudsImage} source={{ uri: item.image }} />

      <View style={styles.wrappers}>
        <View style={styles.wrapper}>
          <Image
            source={require("./assets/icons/speaker.png")}
            style={styles.icon}
          ></Image>
          <Text>{item.options.bassBoost ? "Oui" : "Non"}</Text>
        </View>
        <View style={styles.wrapper}>
          <Image
            source={require("./assets/icons/bluetooth.png")}
            style={styles.icon}
          ></Image>
          <Text>{item.options.bluetooth} ver.</Text>
        </View>
        <View style={styles.wrapper}>
          <Image
            source={require("./assets/icons/battery.png")}
            style={styles.icon}
          ></Image>
          <Text>{item.options.batterylife} heures</Text>
        </View>
        <View style={styles.wrapper}>
          <Image
            source={require("./assets/icons/power.png")}
            style={styles.icon}
          ></Image>
          <Text>
            {item.options.db} hz
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textfooter}>{item.price}$ au total</Text>
      </View>
    </View>
  );
};

export default ProductDetail;

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  earbudsImage: {
    width: 150,
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
    backgroundColor: "#1f1f1f",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
  },
  textfooter: {
    color: "white",
  },
});
