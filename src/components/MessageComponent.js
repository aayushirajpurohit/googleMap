import { View, Text } from "react-native";
import React from "react";
// import { Ionicons } from "@expo/vector-icons";
import { styles } from "../themes/globalStyle";

export default function MessageComponent({ item, user }) {
	const status = item.user !== user;
console.log("item",item);
	return (
		<View>
			<View
				style={
					status
						? styles.mmessageWrapper
						: [styles.mmessageWrapper, { alignItems: "flex-end" }]
				}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					{/* <Ionicons
						name='person-circle-outline'
						size={30}
						color='black'
						style={styles.mavatar}
					/> */}
					<View
						style={
							status
								? styles.mmessage
								: [styles.mmessage, { backgroundColor: "rgb(194, 243, 194)" }]
						}
					>
						<Text>{item.text}</Text>
					</View>
				</View>
				<View style={{flexDirection:'row'}}>
				<Text style={{  }}>{item.user}  {item.time}</Text>
				
				</View>
				
			</View>
		</View>
	);
}