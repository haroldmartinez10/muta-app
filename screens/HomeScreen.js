import { StatusBar } from "expo-status-bar";

import { View, Text } from "react-native";
import GreetingComponent from "../components/GreetingComponent";
import styles from "../styles/styles";
import { useState } from "react";
import VideoComponent from "../components/VideoComponent";
import CouponComponent from "../components/CouponComponent";
import RequestButtonComponent from "../components/RequestButtonComponent";

const HomeScreen = () => {
  const [user, setUser] = useState("Jeffrey Saavedra");

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <GreetingComponent user={user} />
        <VideoComponent />
        <CouponComponent />
        <RequestButtonComponent />
      </View>
    </View>
  );
};

export default HomeScreen;
