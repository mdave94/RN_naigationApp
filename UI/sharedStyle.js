import { Platform } from "react-native";

export const elevation = {
  backgroundColor: "white",
  elevation: 4,
  shadowColor: "black",
  shadowOpacity: 0.35,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 12,
  overflow: Platform.OS === "android" ? "hidden" : "visible",
};

export const buttonPressed = {
  opacity: 0.5,
};
