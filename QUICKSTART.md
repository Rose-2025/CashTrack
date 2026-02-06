# CashTrack - Quick Start Guide

Welcome to CashTrack! This guide will get you up and running in 5 minutes.

## 📦 Installation (2 minutes)

### Step 1: Navigate to Project

```bash
cd "c:\Users\emman\Desktop\Rossy Project\CashTrack-Complete"
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs React, React Router, and Vite.

### Step 3: Start Development Server

```bash
npm run dev
```

You should see:

```
  VITE v7.2.4  ready in XXX ms

  ➜  Local:   http://localhost:5173/
```

### Step 4: Open in Browser

Click the link or open: **http://localhost:5173/**

## 🎯 Using CashTrack (3 minutes)

### First Time Setup

1. **Go to Settings** (⚙️ icon at bottom)
2. Click **Edit** button
3. Fill in your information:
   - Your name
   - Business name
   - Business type (pick one: Vendor, Retail, or Freelancer)
   - Email and phone (optional)
4. Click **Save Changes**

### Adding Your First Transaction

1. **On Dashboard** (📊 icon at bottom)
2. Click **+ Add Transaction** button
3. Select **Income** or **Expense**
4. Enter amount (e.g., 1500)
5. Pick a category (e.g., "Sales" for income or "Rent" for expense)
6. Add optional description (e.g., "Morning sales")
7. Click **Add Transaction**
8. ✅ Transaction appears in "Today's Transactions" list!

### Viewing Your Progress

#### Dashboard (📊)

- See today's cash flow at a glance
- Toggle between Cash and Bank wallet
- Quick add transactions
- View today's transactions

#### History (📋)

- See all your transactions
- Filter by Income/Expense
- Sort by newest, oldest, or highest amount
- Delete transactions if needed

#### End-of-Day (🌙)

- Review daily performance
- See how much you earned/spent
- Get personalized insights
- Tips for better cash management

#### Settings (⚙️)

- Manage your profile
- View statistics
- Set up daily reminders
- Clear data if needed

## 💡 Tips & Tricks

### Quick Facts

- **All data stays on your device** - Nothing is sent to the cloud
- **Works offline** - Add transactions even without internet
- **Mobile-friendly** - Works great on phones and tablets
- **No account needed** - Just start using it!

### Income Categories

- Sales (from selling products/services)
- Investment (money invested in business)
- Refund (money returned to you)
- Loan (borrowed money)
- Other Income (anything else)

### Expense Categories

- Rent (office/shop space)
- Utilities (electricity, water, internet)
- Staff (employee salaries)
- Supplies (business supplies)
- Marketing (ads, promotions)
- Travel (transportation, trips)
- Other Expense (anything else)

### Wallet Types

- **Cash** 💵 - Physical money on hand
- **Bank** 🏦 - Money in your bank account
- Switch anytime to track different accounts!

### Best Practices

1. **Add transactions daily** - Enter data same day for accuracy
2. **Use descriptions** - Add notes for clarity (e.g., "Sale to John")
3. **Check end-of-day** - Review before bed, helps with planning
4. **Review history monthly** - Spot trends and patterns
5. **Toggle wallets** - Keep cash and bank separate

## ⚡ Common Tasks

### I want to delete a transaction

1. Go to **History** (📋)
2. Find the transaction
3. Click the **✕** button
4. Confirm deletion

### I want to change my profile info

1. Go to **Settings** (⚙️)
2. Click **Edit**
3. Make changes
4. Click **Save Changes**

### I want to see my total earnings

1. Go to **History** (📋)
2. Filter by "Income Only"
3. See total at the top

### I want to see my total expenses

1. Go to **History** (📋)
2. Filter by "Expenses Only"
3. See total at the top

### I want to see today's net income

1. Go to **Dashboard** (📊)
2. Look at the Health Indicator box
3. See "Net Position" in the middle

### I cleared my browser data and lost everything!

- **Backup tip**: Take screenshots of your History page
- Export to spreadsheet manually
- Use cloud storage in future versions

## 🆘 Troubleshooting

### "The app won't start"

```bash
# Try these commands:
npm install                  # Reinstall dependencies
npm run dev                 # Start again
```

### "Transactions aren't saving"

- Check your browser's storage:
  - Open DevTools (F12)
  - Go to Application → LocalStorage
  - Look for cashtrack_transactions
- Try clearing browser cache and reload
- Check if localStorage is enabled in settings

### "Navigation buttons don't work"

- Refresh the page (F5 or Cmd+R)
- Clear browser cache
- Try different browser if issue persists

### "App is too slow"

- Close other browser tabs
- Refresh the page
- Check internet connection (though app works offline)

## 🚀 What's Next?

### Learn More

- Read `README_COMPLETE.md` for full documentation
- Check `FEATURES.md` for detailed feature explanations
- See `PRD_ALIGNMENT.md` to understand how requirements were met

### Advanced Usage

- Keep a daily ritual: Check dashboard in morning, close day at night
- Use descriptions creatively for notes
- Watch for spending trends in History
- Use End-of-Day insights for next-day planning

### Future Features (Coming Soon)

- Export data to Excel/PDF
- Charts and analytics
- Bank account integration
- Mobile app
- Cloud backup

## 📞 Need Help?

1. **Check the docs**:

   - README_COMPLETE.md - Full feature guide
   - FEATURES.md - Detailed feature docs
   - PRD_ALIGNMENT.md - How requirements map to code

2. **Review the PRD documents**:

   - CASHTRACK PRD.docx - Original requirements
   - Review of the CASHTRACK PRD.docx - Design recommendations

3. **Browser console** (F12):
   - Check for error messages
   - Share error details for debugging

## 🎉 You're All Set!

You're ready to start tracking your cash flow. Here's your next steps:

1. ✅ App is running
2. ➡️ Go to Settings and add your info
3. ➡️ Add a transaction on Dashboard
4. ➡️ Check History to see your transaction
5. ➡️ Review End-of-Day for insights
6. ➡️ Keep it up daily for best results!

---

**Happy tracking!** 💰

For more details, see the full README or check out the documentation files.
