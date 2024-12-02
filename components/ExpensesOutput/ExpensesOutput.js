import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trouser",
    amount: 79.99,
    date: new Date("2022-01-01"),
  },
  {
    id: "e3",
    description: "Banana",
    amount: 19.99,
    date: new Date("2023-10-29"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 29.99,
    date: new Date("2024-03-19"),
  },
  {
    id: "e5",
    description: "Coomputer",
    amount: 519.99,
    date: new Date("2024-03-03"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container} x>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        periodSummary={expensesPeriod}
      />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
