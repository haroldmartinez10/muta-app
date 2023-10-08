import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../styles/styles";
import { Icon } from "react-native-elements";

const RequestButtonComponent = () => {
  return (
    <View style={styles.containerButton}>
      <TouchableOpacity style={styles.buttonRequest}>
        <View style={styles.containerButton}>
          <Icon name="recycle" type="font-awesome" color="black" size={20} />
          <Text style={styles.buttonText}>Solicitar recolección</Text>
          <Icon
            name="arrow-right"
            type="font-awesome"
            color="black"
            size={13.5}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RequestButtonComponent;
