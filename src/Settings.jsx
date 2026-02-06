import React, { useContext, useState } from "react";
import { TransactionContext } from "./context/TransactionContext";
import styles from "./Settings.module.css";

const Settings = () => {
  const { userData, updateUserData, transactions } =
    useContext(TransactionContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(
    userData || {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      businessType: "vendor",
      currency: "₦",
      enableEndOfDayPrompt: true,
      endOfDayTime: "20:00",
    }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateUserData(formData);
    setIsEditing(false);
  };

  const handleClearData = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all data? This cannot be undone."
      )
    ) {
      localStorage.removeItem("cashtrack_transactions");
      localStorage.removeItem("cashtrack_user");
      window.location.reload();
    }
  };

  const totalTransactions = transactions.length;
  const totalInflows = transactions
    .filter((t) => t.type === "inflow")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalOutflows = transactions
    .filter((t) => t.type === "outflow")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className={styles.settings}>
      <header className={styles.header}>
        <h1>Settings</h1>
      </header>

      {/* Statistics */}
      <section className={styles.statsSection}>
        <h2>Your Statistics</h2>
        <div className={styles.statsList}>
          <div className={styles.statItem}>
            <span className={styles.label}>Total Transactions</span>
            <span className={styles.value}>{totalTransactions}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.label}>Total Inflows</span>
            <span className={`${styles.value} ${styles.positive}`}>
              ₦{totalInflows.toLocaleString()}
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.label}>Total Outflows</span>
            <span className={`${styles.value} ${styles.negative}`}>
              ₦{totalOutflows.toLocaleString()}
            </span>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className={styles.profileSection}>
        <div className={styles.sectionHeader}>
          <h2>Profile</h2>
          {!isEditing && (
            <button
              className={styles.editBtn}
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>

        {isEditing ? (
          <form onSubmit={handleSave} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="businessName">Business Name</label>
              <input
                id="businessName"
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Your business name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="businessType">Business Type</label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
              >
                <option value="vendor">Online Vendor</option>
                <option value="retail">Brick & Mortar</option>
                <option value="freelancer">Freelancer/Solopreneur</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                <input
                  type="checkbox"
                  name="enableEndOfDayPrompt"
                  checked={formData.enableEndOfDayPrompt}
                  onChange={handleChange}
                />
                Enable End-of-Day Reminder
              </label>
            </div>

            {formData.enableEndOfDayPrompt && (
              <div className={styles.formGroup}>
                <label htmlFor="endOfDayTime">Reminder Time</label>
                <input
                  id="endOfDayTime"
                  type="time"
                  name="endOfDayTime"
                  value={formData.endOfDayTime}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className={styles.formActions}>
              <button type="submit" className={styles.saveBtn}>
                Save Changes
              </button>
              <button
                type="button"
                className={styles.cancelBtn}
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className={styles.profileInfo}>
            {userData?.name && (
              <p>
                <strong>Name:</strong> {userData.name}
              </p>
            )}
            {userData?.businessName && (
              <p>
                <strong>Business:</strong> {userData.businessName}
              </p>
            )}
            {userData?.businessType && (
              <p>
                <strong>Type:</strong>{" "}
                {userData.businessType.charAt(0).toUpperCase() +
                  userData.businessType.slice(1)}
              </p>
            )}
            {userData?.email && (
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
            )}
            {userData?.phone && (
              <p>
                <strong>Phone:</strong> {userData.phone}
              </p>
            )}
            {userData?.enableEndOfDayPrompt && (
              <p>
                <strong>Daily Reminder:</strong> {userData.endOfDayTime}
              </p>
            )}
            {!userData && (
              <p className={styles.noData}>No profile set up yet</p>
            )}
          </div>
        )}
      </section>

      {/* Danger Zone */}
      <section className={styles.dangerZone}>
        <h2>Data Management</h2>
        <button className={styles.dangerBtn} onClick={handleClearData}>
          🗑️ Clear All Data
        </button>
        <p className={styles.warning}>
          Warning: This will permanently delete all transactions and settings.
          This action cannot be undone.
        </p>
      </section>
    </div>
  );
};

export default Settings;
