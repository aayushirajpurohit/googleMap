
import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "../themes/globalStyle";
import socket from "../core/socketService";
// import io from 'socket.io-client';

const Modal = ({ setVisible }) => {
	const closeModal = () => setVisible(false);
	const [groupName, setGroupName] = useState("");

	const handleCreateRoom = () => {
        console.log("group name",groupName);
        if(groupName){
            socket.emit("createRoom", groupName);
        }
	
        
		closeModal();
	};
	return (
		<View style={styles.modalContainer}>
			<Text style={styles.modalsubheading}>Enter Chat room name</Text>
			<TextInput
				style={styles.modalinput}
				placeholder='Group name'
				onChangeText={(value) => setGroupName(value)}
			/>
			<View style={styles.modalbuttonContainer}>
				<Pressable style={styles.modalbutton} onPress={handleCreateRoom}>
					<Text style={styles.modaltext}>CREATE</Text>
				</Pressable>
				<Pressable
					style={[styles.modalbutton, { backgroundColor: "#E14D2A" }]}
					onPress={closeModal}
				>
					<Text style={styles.modaltext}>CANCEL</Text>
				</Pressable>
			</View>
		</View>
	);
};


export default Modal;