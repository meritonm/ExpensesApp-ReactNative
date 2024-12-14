import { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: ({ id }) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      
      return [action.payload, ...state];

    case "SET":
      const inverted = action.payload.reverse();
      return inverted;

    case "UPDATE":
      const updatableExpneseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpnese = state[updatableExpneseIndex];
      const updateItem = { ...updatableExpnese, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpneseIndex] = updateItem;
      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [expensesSate, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    setExpenses: setExpenses,
    expenses: expensesSate,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
