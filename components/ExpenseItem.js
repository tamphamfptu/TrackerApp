import { Pressable, StyleSheet } from "react-native";
import { GLobalStyles } from "../constants/styles";

function ExpenseItem({ desciption, amount, date }) {
  return (
    <Pressable>
      <View>
        <View>
          <Text>{desciption}</Text>
          <Text>{amount}</Text>
        </View>
        <View>
          <Text>{date}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GLobalStyles.colors.primary500,
  },
});
