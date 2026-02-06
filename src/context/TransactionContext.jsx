import React, { createContext, useState, useEffect } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [walletType, setWalletType] = useState("cash"); // 'cash' or 'bank'
  const [userData, setUserData] = useState(null);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedTransactions = localStorage.getItem("cashtrack_transactions");
    const savedWallet = localStorage.getItem("cashtrack_wallet");
    const savedUser = localStorage.getItem("cashtrack_user");

    if (savedTransactions) setTransactions(JSON.parse(savedTransactions));
    if (savedWallet) setWalletType(savedWallet);
    if (savedUser) setUserData(JSON.parse(savedUser));
  }, []);

  // Save transactions to localStorage
  useEffect(() => {
    localStorage.setItem(
      "cashtrack_transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  // Save wallet type to localStorage
  useEffect(() => {
    localStorage.setItem("cashtrack_wallet", walletType);
  }, [walletType]);

  // Save user data to localStorage
  useEffect(() => {
    if (userData) {
      localStorage.setItem("cashtrack_user", JSON.stringify(userData));
    }
  }, [userData]);

  const addTransaction = (type, amount, category, description = "") => {
    const transaction = {
      id: Date.now(),
      type, // 'inflow' or 'outflow'
      amount: parseFloat(amount),
      category,
      description,
      date: new Date().toISOString(),
      walletType,
    };
    setTransactions([transaction, ...transactions]);
    return transaction;
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const getTodayTransactions = () => {
    const today = new Date();
    return transactions.filter((t) => {
      const transDate = new Date(t.date);
      return (
        transDate.getDate() === today.getDate() &&
        transDate.getMonth() === today.getMonth() &&
        transDate.getFullYear() === today.getFullYear()
      );
    });
  };

  const calculateDailyBalance = () => {
    const todayTransactions = getTodayTransactions();
    const inflows = todayTransactions
      .filter((t) => t.type === "inflow")
      .reduce((sum, t) => sum + t.amount, 0);
    const outflows = todayTransactions
      .filter((t) => t.type === "outflow")
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      inflows,
      outflows,
      netPosition: inflows - outflows,
    };
  };

  const calculateTotalBalance = () => {
    const inflows = transactions.reduce(
      (sum, t) => (t.type === "inflow" ? sum + t.amount : sum),
      0
    );
    const outflows = transactions.reduce(
      (sum, t) => (t.type === "outflow" ? sum + t.amount : sum),
      0
    );
    return {
      inflows,
      outflows,
      balance: inflows - outflows,
    };
  };

  const updateUserData = (data) => {
    setUserData(data);
  };

  const value = {
    transactions,
    walletType,
    setWalletType,
    userData,
    updateUserData,
    addTransaction,
    deleteTransaction,
    getTodayTransactions,
    calculateDailyBalance,
    calculateTotalBalance,
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};
