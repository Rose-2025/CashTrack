import React, { useContext } from "react";
import { TransactionContext } from "./context/TransactionContext";
import styles from "./EndOfDay.module.css";

const EndOfDay = () => {
  const { getTodayTransactions, calculateDailyBalance, userData } =
    useContext(TransactionContext);

  const todayTransactions = getTodayTransactions();
  const dailyBalance = calculateDailyBalance();

  const getStatus = () => {
    if (dailyBalance.netPosition > 0) return "positive";
    if (dailyBalance.netPosition < 0) return "negative";
    return "neutral";
  };

  const status = getStatus();
  const statusText =
    status === "positive"
      ? "Profit"
      : status === "negative"
      ? "Loss"
      : "Break Even";
  const statusEmoji =
    status === "positive" ? "✓" : status === "negative" ? "✗" : "⚬";

  return (
    <div className={styles.endOfDay}>
      <header className={styles.header}>
        <h1>End-of-Day Summary</h1>
        <p className={styles.date}>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </header>

      {/* Daily Summary Card */}
      <section className={`${styles.summaryCard} ${styles[status]}`}>
        <div className={styles.statusSection}>
          <span className={styles.statusEmoji}>{statusEmoji}</span>
          <h2>{statusText}</h2>
        </div>

        <div className={styles.summaryContent}>
          <div className={styles.summaryRow}>
            <span className={styles.label}>Total Inflows</span>
            <span className={styles.inflows}>
              ₦{dailyBalance.inflows.toLocaleString()}
            </span>
          </div>
          <div className={styles.summaryRow}>
            <span className={styles.label}>Total Outflows</span>
            <span className={styles.outflows}>
              ₦{dailyBalance.outflows.toLocaleString()}
            </span>
          </div>
          <div className={styles.divider}></div>
          <div className={`${styles.summaryRow} ${styles.netRow}`}>
            <span className={styles.label}>Net Position</span>
            <span className={styles.netAmount}>
              {dailyBalance.netPosition >= 0 ? "+" : "-"}₦
              {Math.abs(dailyBalance.netPosition).toLocaleString()}
            </span>
          </div>
        </div>
      </section>

      {/* Transactions Breakdown */}
      {todayTransactions.length > 0 ? (
        <section className={styles.breakdown}>
          <h3>Today's Transactions ({todayTransactions.length})</h3>

          {/* Inflows */}
          {todayTransactions.filter((t) => t.type === "inflow").length > 0 && (
            <div className={styles.categoryGroup}>
              <h4 className={styles.categoryTitle}>💵 Income</h4>
              <div className={styles.categoryItems}>
                {todayTransactions
                  .filter((t) => t.type === "inflow")
                  .map((t) => (
                    <div key={t.id} className={styles.categoryItem}>
                      <span>{t.category}</span>
                      <span className={styles.amount}>
                        +₦{t.amount.toLocaleString()}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Outflows */}
          {todayTransactions.filter((t) => t.type === "outflow").length > 0 && (
            <div className={styles.categoryGroup}>
              <h4 className={styles.categoryTitle}>💸 Expenses</h4>
              <div className={styles.categoryItems}>
                {todayTransactions
                  .filter((t) => t.type === "outflow")
                  .map((t) => (
                    <div key={t.id} className={styles.categoryItem}>
                      <span>{t.category}</span>
                      <span className={styles.amount}>
                        -₦{t.amount.toLocaleString()}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </section>
      ) : (
        <section className={styles.empty}>
          <p>No transactions recorded today</p>
        </section>
      )}

      {/* Personalized Message */}
      {userData && (
        <section className={styles.messageSection}>
          <div className={styles.message}>
            <p>
              {userData.name ? `Hey ${userData.name}! ` : "Hey there! "}
              You've recorded {todayTransactions.length} transaction
              {todayTransactions.length !== 1 ? "s" : ""} today.
            </p>
            {status === "positive" && (
              <p className={styles.positive}>
                Great job! You're ending the day with a positive cash flow. Keep
                it up! 🎉
              </p>
            )}
            {status === "negative" && (
              <p className={styles.negative}>
                You're running a deficit today. Review your expenses and plan
                for tomorrow.
              </p>
            )}
            {status === "neutral" && (
              <p className={styles.neutral}>
                You're breaking even today. Consider looking for more income
                opportunities.
              </p>
            )}
          </div>
        </section>
      )}

      {/* Tips Section */}
      <section className={styles.tips}>
        <h3>📌 Daily Tips</h3>
        <ul>
          <li>Review all your transactions before closing the day</li>
          <li>Identify your biggest expense category</li>
          <li>Plan tomorrow's budget based on today's cash flow</li>
          <li>Keep receipts for all transactions</li>
          <li>Track irregular or unexpected expenses</li>
        </ul>
      </section>

      {/* Close Day Button */}
      <div className={styles.actions}>
        <button
          className={styles.closeBtn}
          onClick={() =>
            alert("Great job closing out today! See you tomorrow.")
          }
        >
          ✓ Close Day
        </button>
      </div>
    </div>
  );
};

export default EndOfDay;
