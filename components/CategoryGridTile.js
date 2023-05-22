import { Pressable, View, Text, StyleSheet } from "react-native";
import { buttonPressed, elevation } from "../UI/sharedStyle";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={[styles.gridItem, elevation]}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed ? buttonPressed : null]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  button: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
