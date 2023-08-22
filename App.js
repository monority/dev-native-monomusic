import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Home from "./Home";
import {
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
  View,
  Text,
} from "react-native";
import Filter from "./Filter";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

const Stack = createNativeStackNavigator();

const App = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);

  const handleFilterClick = () => {

    setFilterVisible((previousState) => !previousState);
  };

  const handleCloseFilter = () => {
    setFilterVisible(false);
  };

  const filterDisable = (navigation) => {
    setFilterVisible(false);
    navigation.goBack();
  };

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#1f1f1f",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => (
              <View>
                <Image
                  style={styles.icon}
                  source={require("./assets/logo.png")}
                />
              </View>
            ),
          }}
        />
       <Stack.Screen
            name="ProductList"
            component={ProductList}
            options={({ navigation }) => ({
              title: "Nos Ecouteurs",
              headerLeft: () => (
                <TouchableOpacity onPress={() => filterDisable(navigation)}>
                  <Text style={styles.text}>Retour</Text>
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={handleFilterClick}>
                  <Text style={styles.filterButton}>Filtres</Text>
                </TouchableOpacity>
              ),
            })}
          />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={({ route }) => ({ title: route.params.item.name })}
        />
        
      </Stack.Navigator>
      {isFilterVisible && <Filter onClose={handleCloseFilter} />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  icon: {
    width: 50,
    height: 50,
  },
  filterButton: {
    color: "white",
    fontSize: 20,
    marginRight: 10,
  },
  text:{
    color:"white",
  }
});

export default App;
