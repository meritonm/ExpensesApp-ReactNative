import { View, StyleSheet } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpenseContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense } from "../util/http";

function ManageExpense({ route, navigation }) {
  const { deleteExpense, updateExpense, addExpense } =
    useContext(ExpenseContext);
  const expensesCTX = useContext(ExpenseContext);

  const editedExpensedId = route.params?.expenseId;

  const isEditing = !!editedExpensedId;

  const selectedExpense = expensesCTX.expenses.find(
    (expense) => expense.id === editedExpensedId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    deleteExpense(editedExpensedId);
    navigation.goBack();
  }

  function cancelExpenseHandler() {
    navigation.goBack();
  }

  async function confrimExpenseHandler(expenseData) {
    if (isEditing) {
      updateExpense(editedExpensedId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelExpenseHandler}
        onSubmit={confrimExpenseHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
