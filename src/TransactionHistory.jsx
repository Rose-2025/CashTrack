import React, { useContext, useState } from "react";
import { TransactionContext } from "./context/TransactionContext";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(TransactionContext);
  const [filterType, setFilterType] = useState("all"); // 'all', 'inflow', 'outflow'
  const [sortBy, setSortBy] = useState("newest"); // 'newest', 'oldest', 'highest'

  const getFilteredTransactions = () => {
    let filtered = transactions;

    if (filterType !== "all") {
      filtered = filtered.filter((t) => t.type === filterType);
    }

    // Sort
    switch (sortBy) {
      case "oldest":
        return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
      case "highest":
        return filtered.sort((a, b) => b.amount - a.amount);
      case "newest":
      default:
        return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  };

  const groupTransactionsByDate = (txns) => {
    const grouped = {};
    txns.forEach((t) => {
      const date = new Date(t.date).toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      });
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(t);
    });
    return grouped;
  };

  const filteredTransactions = getFilteredTransactions();
  const groupedTransactions = groupTransactionsByDate(filteredTransactions);

  const totalInflows = filteredTransactions
    .filter((t) => t.type === "inflow")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalOutflows = filteredTransactions
    .filter((t) => t.type === "outflow")
    .reduce((sum, t) => sum + t.amount, 0);

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      deleteTransaction(id);
    }
  };

  return (
    <div className={styles.history}>
      <header className={styles.header}>
        <h1>Transaction History</h1>
      </header>

      {/* Summary */}
      <section className={styles.summary}>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Total Inflows</span>
          <span className={styles.positive}>
            ₦{totalInflows.toLocaleString()}
          </span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Total Outflows</span>
          <span className={styles.negative}>
            ₦{totalOutflows.toLocaleString()}
          </span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Net</span>
          <span className={styles.amount}>
            ₦{(totalInflows - totalOutflows).toLocaleString()}
          </span>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className={styles.controls}>
        <div className={styles.filterGroup}>
          <label htmlFor="filter">Filter:</label>
          <select
            id="filter"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Transactions</option>
            <option value="inflow">Income Only</option>
            <option value="outflow">Expenses Only</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="sort">Sort:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest">Highest Amount</option>
          </select>
        </div>
      </section>

      {/* Transactions List */}
      {filteredTransactions.length > 0 ? (
        <div className={styles.transactionsList}>
          {Object.entries(groupedTransactions).map(([date, txns]) => (
            <div key={date} className={styles.dateGroup}>
              <h3 className={styles.dateHeader}>{date}</h3>
              {txns.map((transaction) => (
                <div
                  key={transaction.id}
                  className={`${styles.transactionItem} ${
                    styles[transaction.type]
                  }`}
                >
                  <div className={styles.transactionDetails}>
                    <div className={styles.categoryInfo}>
                      <span className={styles.category}>
                        {transaction.category}
                      </span>
                      {transaction.description && (
                        <span className={styles.description}>
                          {transaction.description}
                        </span>
                      )}
                    </div>
                    <span className={styles.time}>
                      {new Date(transaction.date).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className={styles.transactionActions}>
                    <span
                      className={`${styles.amount} ${
                        transaction.type === "inflow"
                          ? styles.inflow
                          : styles.outflow
                      }`}
                    >
                      {transaction.type === "inflow" ? "+" : "-"}₦
                      {transaction.amount.toLocaleString()}
                    </span>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleDeleteClick(transaction.id)}
                      title="Delete transaction"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noTransactions}>
          <p>No transactions yet</p>
          <small>Start tracking your cash flow by adding a transaction</small>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
