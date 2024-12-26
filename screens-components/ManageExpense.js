import { View, StyleSheet } from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpenseContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpenses, storeExpense, updatedExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function ManageExpense({ route, navigation }) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
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

  async function deleteExpenseHandler() {
    setIsLoading(true);
    try {
      await deleteExpenses(editedExpensedId);
      deleteExpense(editedExpensedId);
      navigation.goBack();
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }

  function cancelExpenseHandler() {
    navigation.goBack();
  }

  async function confrimExpenseHandler(expenseData) {
    setIsLoading(true);

    try {
      if (isEditing) {
        updateExpense(editedExpensedId, expenseData);
        await updatedExpenses(editedExpensedId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }

  function errorHandler() {
    setError(null);
  }

  if (error && !isLoading)
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;

  if (isLoading) return <LoadingOverlay />;

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
