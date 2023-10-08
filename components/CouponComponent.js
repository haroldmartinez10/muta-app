import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

const CouponComponent = () => {
  return (
    <>
      <Text style={styles.couponNew}>Lo nuevo</Text>

      <View style={styles.couponContainer}>
        <Text style={styles.couponTitle}>$15.000 EN TOM NOODLESHOP</Text>
        <Text style={styles.couponSubtitle}>
          Muestra este cupón y obtén tu beneficio
        </Text>
        <Text style={styles.couponSubtitleCode}>
          25D1-WLCU-EX9F - UTILIZADO
        </Text>
        <Text style={styles.couponSubtitleValid}>
          * Tendrás 60 días para redimirlo - Válido solo presencial
        </Text>
      </View>
    </>
  );
};

export default CouponComponent;
