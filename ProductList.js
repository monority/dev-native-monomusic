import React ,{useState}from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";


const ProductList = (props)  => {
	const [earbuds, setEarbuds] = useState(props.route.params.earbuds);

  const renderProduct = (item) => {
    return (
      <TouchableOpacity
        style={styles.earbudsItem}
        onPress={() => props.navigation.navigate("ProductDetail", { item })}
      >
        <View style={styles.ImageDiv}>
          <Image style={styles.earbudsImage} source={{ uri: item.image }} />
        </View>
        <View>
          <Text style={styles.FontBold}>{item.name}</Text>
          <Text>{item.price} € au total</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
   <FlatList
  keyExtractor={(item, index) => index.toString()}
  data={earbuds}
  renderItem={({ item }) => renderProduct(item)}
/>
 
    </View>
  );
}

const vh = Dimensions.get("screen").height;
const vm = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  FontBold: {
    fontWeight: "bold",
  },
  ImageDiv: {
    justifyContent: "center",
  },
  earbudsImage: {
    width: 150,
    height: 90,
  },
  earbudsItem: {
    borderRadius: 15,
    flexDirection: "row",
    width: 350,
    height: 150,
    backgroundColor: "#cacbcc",
    margin: 15,
    padding: 5,
  },


});

export default ProductList;