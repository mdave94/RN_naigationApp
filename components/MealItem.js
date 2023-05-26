import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { elevation, buttonPressed } from "../UI/sharedStyle";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem({
  id,
  title,
  imageUrl,
  complexity,
  duration,
  affordability,
}) {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("MealDetailsScreen", {
      mealId: id,
    });
  }

  return (
    <View style={[styles.mealItem, elevation]}>
      <Pressable
        style={({ pressed }) => (pressed ? buttonPressed : null)}
        android_ripple={{ color: "#ccc" }}
        onPress={onPressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            complexity={complexity}
            duration={duration}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
});
