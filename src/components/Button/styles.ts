import { StyleSheet } from "react-native";
import { ButtonStyles } from "./types";

const buttonStyles = (props: ButtonStyles) => {
  const { backgroundColor } = props;

  return StyleSheet.create({
  button: {
    minHeight: 56,
    minWidth: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor,
  },
  buttonText: {
    color: "#FDFCFE",
    fontSize: 32,
    fontWeight: "bold",
  },
});
}

export default buttonStyles;