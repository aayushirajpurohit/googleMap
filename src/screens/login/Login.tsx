import React, { useState, useLayoutEffect, useEffect } from "react";
import {
	Text,
	SafeAreaView,
	View,
	TextInput,
	Pressable,
	Alert,
	Platform,
} from "react-native";
import { styles } from "../../themes/globalStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';

  

const Login = ({ navigation }:any) => {
	const [username, setUsername] = useState("");
	useEffect(() => {
		const requestLocationPermission = async () => {
		  try {
			const result = await check(
			  Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
			);
	
			if (result === RESULTS.DENIED) {
			  const permissionResult = await request(
				Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
			  );
	
			  if (permissionResult === RESULTS.GRANTED) {
				console.log('Location permission granted');
			  } else {
				console.log('Location permission denied');
			  }
			}
		  } catch (error) {
			console.error('Error checking or requesting location permission:', error);
		  }
		};
	
		requestLocationPermission();
	  }, []);
	
	const storeUsername = async () => {
		try {
			await AsyncStorage.setItem("username", username);
			navigation.navigate("Chat");
		} catch (e) {
			Alert.alert("Error! While saving username");
		}
	};

	const handleSignIn = () => {
		if (username.trim()) {
			storeUsername();
		} else {
			Alert.alert("Username is required.");
		}
	};

	useLayoutEffect(() => {
		const getUsername = async () => {
			try {
				const value = await AsyncStorage.getItem("username");
				if (value !== null) {
					navigation.navigate("Chat");
				}
			} catch (e) {
				console.error("Error while loading username!");
			}
		};
		getUsername();
	}, []);

	return (
		<SafeAreaView style={styles.loginscreen}>
			<View style={styles.loginscreen}>
				{/* <Text style={styles.loginheading}>Sign in</Text>
				<View style={styles.logininputContainer}>
					<TextInput
						autoCorrect={false}
						placeholder='Enter your username'
						style={styles.logininput}
						onChangeText={(value) => setUsername(value)}
					/>
				</View> */}

{/* <Pressable onPress={()=>{navigation.navigate("Map")}} style={[styles.loginbutton,{backgroundColor:'red'}]}>
					<View>
						<Text style={[styles.loginbuttonText]}>Video call integration</Text>
					</View>
				</Pressable> */}
				
				<Pressable onPress={()=>{navigation.navigate("Map")}} style={[styles.loginbutton,{backgroundColor:'red'}]}>
					<View>
						<Text style={[styles.loginbuttonText]}>Map integration</Text>
					</View>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

export default Login;

// import { View, Text, SafeAreaView } from "react-native";
// import React from "react";

// const Login = () => {
// 	return (
// 		<SafeAreaView>
// 			<Text>Hello World</Text>
// 		</SafeAreaView>
// 	);
// };

// export default Login;