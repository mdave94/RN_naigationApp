import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

function MealDetailsScreen({ id }) {
  const route = useRoute();

  console.log(route.params);
  return (
    <View>
      <Text> {route.params.mealId}</Text>
    </View>
  );
}

export default MealDetailsScreen;
