import { Pressable, View, Text, StyleSheet } from "react-native";
import { GLobalStyles } from "../../constants/styles";

const Button = ({ children, onPress, mode, customStyle }) => {
  return (
    <View style={customStyle}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GLobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GLobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GLobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
