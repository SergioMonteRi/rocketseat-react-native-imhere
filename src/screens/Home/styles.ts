import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 24,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#1F1E25",
    minHeight: 56,
    color: "#FDFCFE",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
  form: {
    flexDirection: "row",
    width: "100%",
    columnGap: 12,
    marginVertical: 24,
  },
  emptyList: {
    color: "#FDFCFE",
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;
