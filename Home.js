import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
	Image,
} from "react-native";

import { FlatList } from "react-native";
import { Dimensions } from "react-native";

const Home = (props) => {

	const [earbuds, setEarbuds] = useState([]);

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
	const renderEarbuds = (item) => {
		return (
			<View style={styles.reservations}>
				<Image style={styles.reservationImage} source={{ uri: item.image }} />
				<Text style={styles.titleEarbuds}>{item.name}</Text>
				<Text>{item.price}€</Text>
				<Text
					onPress={() => props.navigation.navigate("ProductDetail", { item })}
					style={styles.titleLink}
				>
					Acheter
				</Text>
			</View>
		);
	};

	const sortArray = () => {
		const sortedList = earbuds
			.sort((a, b) => b.reservations - a.reservations)
			.slice(0, 4);
		return sortedList;
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.coffeeItem}
				onPress={() => props.navigation.navigate("ProductList", { earbuds })}
			>
				<ImageBackground
					imageStyle={{ borderRadius: 15 }}
					style={styles.image}
					source={require("./assets/cover.jpeg")}
				>
					<Text style={styles.text}>{earbuds.length} set d'écouteurs en vente</Text>

				</ImageBackground>
			</TouchableOpacity>
			<Text style={styles.titleReserve}>Les plus vendus</Text>
			<FlatList
				keyExtractor={(item) => item.id}
				data={sortArray(earbuds)}
				renderItem={({ item }) => renderEarbuds(item)}
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
	titleEarbuds: {
		fontWeight: "bold",
		fontSize: 15,
	},
	titleReserve: {
		color: "#28A2DA",
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
		backgroundColor: "#000",
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
		color: "black",
		margin: 4,
		fontSize: 20,
	},
});

export default Home;