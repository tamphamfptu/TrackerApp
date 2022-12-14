import { StyleSheet, View } from "react-native";
import { GLobalStyles } from "../../constants/styles";
import ExpensesList from "../ExpensesOutput/ExpensesList";
import ExpensesSummary from "../ExpensesOutput/ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-12-13"),
  },
  {
    id: "e2",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2022-12-13"),
  },
  {
    id: "e3",
    description: "A luxury car",
    amount: 500.99,
    date: new Date("2022-12-13"),
  },
  {
    id: "e4",
    description: "A laptop",
    amount: 20.99,
    date: new Date("2022-12-13"),
  },
  {
    id: "e5",
    description: "A book",
    amount: 14.59,
    date: new Date("2022-12-13"),
  },
  {
    id: "e6",
    description: "A book",
    amount: 14.59,
    date: new Date("2022-12-13"),
  },
  {
    id: "e7",
    description: "A book",
    amount: 14.59,
    date: new Date("2022-12-13"),
  },
  {
    id: "e8",
    description: "A book",
    amount: 14.59,
    date: new Date("2022-12-13"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 14.59,
    date: new Date("2022-12-13"),
  },
  {
    id: "e10",
    description: "A book",
    amount: 14.59,
    date: new Date("2022-12-13"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GLobalStyles.colors.primary700,
  },
});
