import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
    marginTop: 16,
  },
  nameContainer: {
    flex: 1,
    borderRadius: 8,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#1F1E25",
    minHeight: 56,
    padding: 16,
  },
  name: {
    color: "#FDFCFE",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
