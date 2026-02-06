import React, { useContext, useState } from "react";
import { TransactionContext } from "./context/TransactionContext";
import styles from "./Dashboard.module.css";

const INFLOW_CATEGORIES = [
  "Sales",
  "Investment",
  "Refund",
  "Loan",
  "Other Income",
];
const OUTFLOW_CATEGORIES = [
  "Rent",
  "Utilities",
  "Staff",
  "Supplies",
  "Marketing",
  "Travel",
  "Other Expense",
];

const Dashboard = () => {
  const {
    getTodayTransactions,
    calculateDailyBalance,
    calculateTotalBalance,
    walletType,
    setWalletType,
    addTransaction,
  } = useContext(TransactionContext);

  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [transactionType, setTransactionType] = useState("inflow");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const dailyBalance = calculateDailyBalance();
  const totalBalance = calculateTotalBalance();
  const todayTransactions = getTodayTransactions();

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (amount && category) {
      addTransaction(transactionType, amount, category, description);
      setAmount("");
      setCategory("");
      setDescription("");
      setShowAddTransaction(false);
    }
  };

  const categories =
    transactionType === "inflow" ? INFLOW_CATEGORIES : OUTFLOW_CATEGORIES;

  const getNetPositionStatus = () => {
    if (dailyBalance.netPosition > 0) return "positive";
    if (dailyBalance.netPosition < 0) return "negative";
    return "neutral";
  };

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>CashTrack</h1>
        <div className={styles.walletToggle}>
          <button
            className={`${styles.toggleBtn} ${
              walletType === "cash" ? styles.active : ""
            }`}
            onClick={() => setWalletType("cash")}
          >
            💵 Cash
          </button>
          <button
            className={`${styles.toggleBtn} ${
              walletType === "bank" ? styles.active : ""
            }`}
            onClick={() => setWalletType("bank")}
          >
            🏦 Bank
          </button>
        </div>
      </header>

      {/* Daily Health Indicator */}
      <section
        className={`${styles.healthIndicator} ${
          styles[getNetPositionStatus()]
        }`}
      >
        <h2>Today's Cash Flow</h2>
        <div className={styles.healthContent}>
          <div className={styles.indicator}>
            <div className={styles.statusCircle}></div>
            <span>
              {dailyBalance.netPosition >= 0 ? "✓ Positive" : "✗ Negative"}
            </span>
          </div>
          <div className={styles.amounts}>
            <div className={styles.inflow}>
              <span className={styles.label}>Inflows</span>
              <span className={styles.amount}>
                ₦{dailyBalance.inflows.toLocaleString()}
              </span>
            </div>
            <div className={styles.netPosition}>
              <span className={styles.label}>Net Position</span>
              <span className={`${styles.amount} ${styles.net}`}>
                ₦{Math.abs(dailyBalance.netPosition).toLocaleString()}
              </span>
            </div>
            <div className={styles.outflow}>
              <span className={styles.label}>Outflows</span>
              <span className={styles.amount}>
                ₦{dailyBalance.outflows.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Balance */}
      <section className={styles.balanceSection}>
        <h3>Overall Balance</h3>
        <div className={styles.balanceCard}>
          <div className={styles.balanceItem}>
            <span>Total Inflows</span>
            <span className={styles.positive}>
              ₦{totalBalance.inflows.toLocaleString()}
            </span>
          </div>
          <div className={styles.balanceItem}>
            <span>Total Outflows</span>
            <span className={styles.negative}>
              ₦{totalBalance.outflows.toLocaleString()}
            </span>
          </div>
          <div
            className={styles.balanceItem}
            style={{
              borderTop: "1px solid #ddd",
              paddingTop: "10px",
              marginTop: "10px",
            }}
          >
            <span>
              <strong>Cash Balance</strong>
            </span>
            <span className={styles.mainBalance}>
              ₦{totalBalance.balance.toLocaleString()}
            </span>
          </div>
        </div>
      </section>

      {/* Add Transaction Form */}
      {showAddTransaction && (
        <section className={styles.formSection}>
          <h3>Add Transaction</h3>
          <form onSubmit={handleAddTransaction} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Type</label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    value="inflow"
                    checked={transactionType === "inflow"}
                    onChange={(e) => {
                      setTransactionType(e.target.value);
                      setCategory("");
                    }}
                  />
                  Income
                </label>
                <label>
                  <input
                    type="radio"
                    value="outflow"
                    checked={transactionType === "outflow"}
                    onChange={(e) => {
                      setTransactionType(e.target.value);
                      setCategory("");
                    }}
                  />
                  Expense
                </label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                step="0.01"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description">Description (Optional)</label>
              <input
                id="description"
                type="text"
                placeholder="Add notes..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.submitBtn}>
                Add Transaction
              </button>
              <button
                type="button"
                className={styles.cancelBtn}
                onClick={() => setShowAddTransaction(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Add Button */}
      {!showAddTransaction && (
        <button
          className={styles.addBtn}
          onClick={() => setShowAddTransaction(true)}
        >
          + Add Transaction
        </button>
      )}

      {/* Today's Transactions */}
      <section className={styles.transactionsSection}>
        <h3>Today's Transactions ({todayTransactions.length})</h3>
        {todayTransactions.length > 0 ? (
          <div className={styles.transactionsList}>
            {todayTransactions.map((transaction) => (
              <div key={transaction.id} className={styles.transactionItem}>
                <div className={styles.transactionInfo}>
                  <span className={styles.category}>
                    {transaction.category}
                  </span>
                  {transaction.description && (
                    <span className={styles.description}>
                      {transaction.description}
                    </span>
                  )}
                </div>
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
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noTransactions}>No transactions today</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
