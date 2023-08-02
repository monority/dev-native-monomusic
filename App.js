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
import CarList from "./CarList";
import CarDetail from "./CarDetail";

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
            backgroundColor: "#0d5978",
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
                  source={require("./assets/logo-transparent.png")}
                />
              </View>
            ),
          }}
        />
       <Stack.Screen
            name="CarList"
            component={CarList}
            options={({ navigation }) => ({
              title: "Nos Véhicules",
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
          name="CarDetail"
          component={CarDetail}
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
