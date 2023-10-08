import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    width: "100%",
    height: "100%",
    display: "flex",
  },
  content: {
    marginTop: Constants.statusBarHeight + 20,
    marginLeft: 15,
    marginRight: 15,
  },
  titleGreeting: {
    color: "#6C6C6C",
    lineHeight: 30,
    fontSize: 18,
  },
  usernameGreeting: {
    color: "#CECECE",
    fontSize: 22,
  },
  containerVideo: {
    marginTop: 25,
    height: 170,
    borderRadius: 20,
    backgroundColor: "transparent",
  },
  contentVideo: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleVideo: {
    fontSize: 20,
    color: "#CECECE",
    lineHeight: 30,
    fontWeight: "bold",
    marginRight: 80,
    marginTop: 20,
  },
  buttonVideo: {
    color: "#CECECE",
    marginTop: 20,
  },
  background: {
    flex: 1,
  },
  overlayVideo: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  couponNew: {
    color: "#CECECE",
    marginTop: 5,
  },
  couponSubtitle: {
    color: "#CECECE",
    lineHeight: 18,
  },
  couponSubtitleCode: {
    color: "#CECECE",
    fontSize: 18.8,
    lineHeight: 35,
  },
  couponSubtitleValid: {
    color: "#CECECE",
    fontSize: 12,
    lineHeight: 20,
  },
  couponContainer: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "#171717",
    padding: 20,
    lineHeight: 20,
    borderRadius: 10,
  },
  couponTitle: {
    lineHeight: 20,
    color: "#D5ED64",
    fontSize: 17,
    fontWeight: "bold",
  },
  containerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonRequest: {
    backgroundColor: "#D5ED64",
    marginTop: 145,
    borderRadius: 50,
    padding: 15,
    width: 250,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "bold",
    padding: 5,
    fontSize: 14,
  },
});

export default styles;
