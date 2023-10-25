import { StyleSheet, Text } from "react-native"

const Title = (props) => {
  return (
    <Text style={styles.title}>{props.title}</Text>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    margin: 20
  }
});

export default Title