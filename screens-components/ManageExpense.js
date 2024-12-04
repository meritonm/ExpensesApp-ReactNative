import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";

function ManageExpense({ route, navigation }) {
  const editedExpensedId = route.params?.expenseId;

  const isEditing = !!editedExpensedId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <Text>Manage Expense</Text>
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    
  },
});
