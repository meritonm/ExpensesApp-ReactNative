import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
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
    description: "Computer",
    amount: 519.99,
    date: new Date("2024-12-02"), // Brënda 7 ditëve
  },
  {
    id: "e6",
    description: "Headphones",
    amount: 89.99,
    date: new Date("2023-06-10"),
  },
  {
    id: "e7",
    description: "Coffee mug",
    amount: 12.49,
    date: new Date("2023-08-15"),
  },
  {
    id: "e8",
    description: "Gaming chair",
    amount: 229.99,
    date: new Date("2023-05-01"),
  },
  {
    id: "e9",
    description: "Keyboard",
    amount: 45.99,
    date: new Date("2023-09-18"),
  },
  {
    id: "e10",
    description: "Mouse",
    amount: 25.99,
    date: new Date("2024-12-05"), // Brënda 7 ditëve
  },
  {
    id: "e11",
    description: "Desk lamp",
    amount: 39.99,
    date: new Date("2023-04-12"),
  },
  {
    id: "e12",
    description: "Notebook",
    amount: 5.99,
    date: new Date("2022-11-04"),
  },
  {
    id: "e13",
    description: "Gym membership",
    amount: 299.99,
    date: new Date("2023-02-01"),
  },
  {
    id: "e14",
    description: "Backpack",
    amount: 49.99,
    date: new Date("2023-03-21"),
  },
  {
    id: "e15",
    description: "Sunglasses",
    amount: 69.99,
    date: new Date("2023-07-13"),
  },
  {
    id: "e16",
    description: "Phone case",
    amount: 19.99,
    date: new Date("2023-09-09"),
  },
  {
    id: "e17",
    description: "Air purifier",
    amount: 159.99,
    date: new Date("2023-01-27"),
  },
  {
    id: "e18",
    description: "Yoga mat",
    amount: 35.99,
    date: new Date("2023-10-10"),
  },
  {
    id: "e19",
    description: "Wireless earbuds",
    amount: 129.99,
    date: new Date("2024-12-06"), // Brënda 7 ditëve
  },
  {
    id: "e20",
    description: "Cookware set",
    amount: 189.99,
    date: new Date("2024-06-22"),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: ({ id }) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

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
  const [expensesSate, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
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
