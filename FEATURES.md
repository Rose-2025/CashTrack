# CashTrack - Feature Documentation

## 1. Dashboard (Home Page)

### Purpose

The main interface for daily cash tracking. Provides a quick snapshot of today's cash position with easy transaction entry.

### Key Components

#### Daily Health Indicator

- **Visual Status**: Shows green/red/yellow border based on cash flow
- **Status Display**: Shows "Positive", "Negative", or "Neutral"
- **Metrics Shown**:
  - Inflows (Income)
  - Net Position (Balance)
  - Outflows (Expenses)

#### Wallet Toggle

- **Cash Button**: Track physical cash on hand
- **Bank Button**: Track digital/bank money
- **Visual Feedback**: Active wallet is highlighted

#### Overall Balance Section

- **Total Inflows**: Sum of all income transactions
- **Total Outflows**: Sum of all expense transactions
- **Cash Balance**: Total inflows minus total outflows

#### Add Transaction Form

- **Type Selection**: Income or Expense
- **Amount Input**: Numerical amount
- **Category Selection**: Pre-defined categories
- **Optional Description**: Additional notes
- **Submit/Cancel Actions**: Form control buttons

#### Today's Transactions List

- **Count Badge**: Number of transactions today
- **Transaction Display**: Category, amount, and status
- **Real-time Updates**: Transactions update immediately upon addition
- **Empty State**: "No transactions today" message

### User Flow

1. User opens the app
2. Sees today's cash position at a glance
3. Toggles wallet type if needed
4. Clicks "Add Transaction" button
5. Fills in transaction details
6. Transaction appears in the list immediately
7. Can view overall balance below

---

## 2. Transaction History

### Purpose

Complete audit trail of all transactions with search, filter, and sort capabilities.

### Key Components

#### Summary Statistics

- **Total Inflows**: Filtered total of all income
- **Total Outflows**: Filtered total of all expenses
- **Net Balance**: Filtered net position

#### Filter Controls

- **All Transactions**: Show everything
- **Income Only**: Show inflows only
- **Expenses Only**: Show outflows only

#### Sort Controls

- **Newest First**: Most recent at top (default)
- **Oldest First**: Earliest at top
- **Highest Amount**: Largest amounts first

#### Transaction Groups

- **Date Headers**: Transactions grouped by date
- **Time Stamps**: Shows transaction time
- **Category & Description**: Transaction details
- **Delete Button**: Remove individual transactions

### User Flow

1. User navigates to History tab
2. Sees summary of filtered transactions
3. Adjusts filters or sort order as needed
4. Views grouped and sorted transactions
5. Can delete transactions with confirmation
6. Filters update summary in real-time

---

## 3. End-of-Day Summary

### Purpose

Comprehensive daily closure and reflection tool with insights and recommendations.

### Key Components

#### Status Card

- **Color Coded**: Green for profit, red for loss, yellow for break-even
- **Emoji Indicator**: ✓ (positive), ✗ (negative), ⚬ (neutral)
- **Status Label**: "Profit", "Loss", or "Break Even"
- **Summary Numbers**: Inflows, outflows, net position

#### Transactions Breakdown

- **Income Section**: All inflows grouped
- **Expenses Section**: All outflows grouped
- **Category Details**: Each transaction listed with amount
- **Transaction Count**: Total transactions for the day

#### Personalized Message

- **User Greeting**: Uses user's name if available
- **Transaction Count**: "You've recorded X transactions"
- **Status-Specific Message**:
  - Positive: Encouragement and celebration
  - Negative: Reflection and planning
  - Neutral: Suggestions for growth

#### Daily Tips

- **5 Action Items**: Tips for better cash management
- **Contextual**: Generic but relevant to all users

#### Close Day Button

- **Action**: Confirms end-of-day closure
- **Feedback**: Shows congratulatory message

### User Flow

1. User opens End-of-Day view (typically in evening)
2. Sees colored status card indicating day's performance
3. Reviews all transactions from the day
4. Reads personalized message
5. Sees tips for improvement
6. Reviews statistics for decision-making
7. Clicks "Close Day" to confirm

---

## 4. Settings & Profile

### Purpose

User profile management, preferences, and account statistics.

### Key Components

#### Statistics Section

- **Total Transactions**: Count of all transactions
- **Total Inflows**: Sum of all income
- **Total Outflows**: Sum of all expenses
- **Visual Cards**: Color-coded for clarity

#### Profile Section

**Display Mode** (Default):

- Shows user's saved information
- Edit button to enter edit mode
- Clear display of all settings

**Edit Mode**:

- **Full Name**: User's name
- **Business Name**: Name of the business
- **Business Type**:
  - Online Vendor (multi-channel seller)
  - Brick & Mortar (physical store)
  - Freelancer/Solopreneur (solo operator)
- **Email**: Contact email
- **Phone**: Contact phone number
- **End-of-Day Reminder**: Toggle enable/disable
- **Reminder Time**: Time picker (if enabled)

#### Data Management

- **Clear All Data**: Dangerous action with confirmation
- **Warning**: Explains data loss is permanent
- **Red Theme**: Indicates danger/caution

### User Flow

1. User navigates to Settings
2. Views current profile and statistics
3. Clicks "Edit" to modify profile
4. Updates desired information
5. Clicks "Save Changes" to persist
6. Can review statistics at any time
7. Can optionally clear all data with warning

---

## 5. Navigation (Bottom Bar)

### Purpose

Easy mobile-first navigation between all major sections.

### Navigation Items

1. **Dashboard** (📊)

   - Default landing page
   - Daily transaction entry and overview

2. **History** (📋)

   - Complete transaction log
   - Filtering and sorting tools

3. **End-of-Day** (🌙)

   - Daily summary and insights
   - Performance indicators

4. **Settings** (⚙️)
   - User profile
   - Preferences
   - Statistics

### Visual Feedback

- **Active State**: Blue color and top border
- **Hover State**: Light background
- **Icons & Labels**: Clear identification
- **Fixed Position**: Always accessible at bottom

### User Flow

- Tap any navigation item to switch views
- Visual indication shows current view
- Navigation is always available

---

## Feature Specifications by Category

### Income Categories

Used in "Inflows" transactions:

- **Sales**: Revenue from business operations
- **Investment**: Capital or investor funding
- **Refund**: Money returned from previous expenses
- **Loan**: Borrowed money
- **Other Income**: Any other income source

### Expense Categories

Used in "Outflows" transactions:

- **Rent**: Office or shop rental
- **Utilities**: Electricity, water, internet
- **Staff**: Wages and salaries
- **Supplies**: Business supplies
- **Marketing**: Marketing and advertising
- **Travel**: Transportation and trips
- **Other Expense**: Any other expenses

### Wallet Types

**Cash**:

- Physical money on hand
- Immediate spending power
- Manual tracking

**Bank**:

- Digital money
- Bank account balance
- Planned expenses

---

## Data Flow Architecture

### State Management

```
TransactionContext (Global State)
├── transactions[] (All transactions)
├── walletType (cash/bank)
├── userData (User profile)
├── Methods:
│   ├── addTransaction()
│   ├── deleteTransaction()
│   ├── getTodayTransactions()
│   ├── calculateDailyBalance()
│   ├── calculateTotalBalance()
│   └── updateUserData()
```

### Component Hierarchy

```
App
├── TransactionProvider (Context)
├── Routes
│   ├── Dashboard
│   ├── TransactionHistory
│   ├── EndOfDay
│   └── Settings
└── Navigation
```

### Data Persistence

- **Storage**: Browser LocalStorage
- **Keys**:
  - `cashtrack_transactions`
  - `cashtrack_wallet`
  - `cashtrack_user`
- **Automatic**: Data saves on every change
- **Automatic Load**: Data loads on app start

---

## User Personas & Features Map

### Victoria (Online Vendor)

- ✅ Needs multi-channel sales tracking
- ✅ Uses Sales category for various channels
- ✅ Benefits from daily summary
- ✅ Tracks bank deposits

### Samuel (Brick-and-Mortar Owner)

- ✅ High cash volume handling
- ✅ Uses Cash wallet type
- ✅ Daily reconciliation via End-of-Day
- ✅ Category breakdown by expense type

### Arinze (Solopreneur/Freelancer)

- ✅ Irregular income tracking
- ✅ Personal drawing feature (future)
- ✅ Burn rate monitoring via balance
- ✅ Simple categorization

---

## Success Metrics Integration

### Primary Metrics

1. **Daily Tracking Adoption**

   - Track: Daily transactions recorded
   - Display: Count badge on Dashboard

2. **Cash Visibility Confidence**

   - Track: User reviews Net Position
   - Display: Health indicator, balances

3. **Weekly Active Users**
   - Track: App usage frequency
   - Display: Implicit through transaction history

### Secondary Metrics

1. **7-Day/14-Day Retention**

   - Encouraging return visits
   - Reminder system aids this

2. **Time to First Transaction**

   - Prominent Add button
   - Simple form with 3 required fields

3. **Decision Impact Feedback**
   - End-of-Day insights
   - Personalized messages

---

## Accessibility & Inclusivity

- **Mobile-First**: Designed for low-end Android devices
- **Simple Language**: Clear, non-technical terminology
- **Visual Feedback**: Color + symbols (not color alone)
- **Touch-Friendly**: Larger buttons, adequate spacing
- **Fast Loading**: Optimized for slow connections
- **Offline Support**: Works without internet (LocalStorage)

---

**Document Version**: 1.0  
**Last Updated**: February 2026
