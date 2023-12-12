/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import React, { type PropsWithChildren, useEffect } from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import NavigationStack from "./src/navigation/NavigationStack";
import {enableLatestRenderer} from 'react-native-maps';




const App = () => {
  enableLatestRenderer();
  const isDarkMode = useColorScheme() === "dark";




  const { height, width } = Dimensions.get("window");

  return (
    <View style={[{ flex: 1 }]}>
     
      <View style={styles.container}>
     
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

export default App;
