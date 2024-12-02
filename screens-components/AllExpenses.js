import { View, StyleSheet } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod="Total" />
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
