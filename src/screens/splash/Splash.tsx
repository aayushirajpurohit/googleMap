import React, { useEffect } from "react";
import { ImageBackground, ImageBackgroundBase, StyleSheet, Text, View } from "react-native";

import Scale, { height, width } from "../../core/Scale";



const Splash = ({ navigation }: any) => {
  useEffect(() => {

    async function checkLogin() {
    
      setTimeout(() => {

            navigation.navigate('Login');
         
          
       
      }, 2000);
    }
    checkLogin();
  }, []);

  return (
    <View style={styles.container}>
     
     
        <Text style={styles.BackgroundImageText}>
      Chats App
        </Text>
     
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BackgroundImageStyle: {
    flex: 1,
  },
  BackgroundImage: {
    marginTop: height * 0.335,
    alignSelf: "center",
 
  },
  BackgroundImageText: {
  
    justifyContent: "center",
    alignSelf: "center",
    fontSize: Scale(42),

    top: 10,
  },
});
