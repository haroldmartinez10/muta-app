import React from "react";
import { Text } from "react-native";
import styles from "../styles/styles";

const GreetingComponent = ({ user }) => {
  return (
    <>
      <Text style={styles.titleGreeting}>
        Buenas tardes mutante,{"\n"}
        <Text style={styles.usernameGreeting}>{user}</Text>
      </Text>
    </>
  );
};

export default GreetingComponent;
