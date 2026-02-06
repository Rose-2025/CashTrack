# CashTrack - Daily Cash Flow Management App

A modern, responsive React-based web application designed to help small business owners, online vendors, and freelancers track their daily cash flow with ease.

## 📋 Project Overview

CashTrack is built based on the comprehensive Product Requirements Document (PRD) and addresses all recommendations from the PRD Review. It provides a simple yet powerful solution for daily cash tracking, offering visibility into cash inflows, outflows, and net position.

### Key Features

#### ✓ Core Features (MVP - All Implemented)

- **Dashboard** - Real-time cash flow tracking with health indicator
- **Transaction Management** - Add and track income and expenses
- **Daily Summary** - Clear view of today's cash position
- **Transaction History** - Complete transaction log with filtering and sorting
- **End-of-Day Summary** - Detailed daily closure with insights and tips
- **User Settings** - Profile management and preferences
- **Mobile-First Design** - Optimized for all devices including low-end Android

#### ✓ Advanced Features (From Review Recommendations)

- **Wallet Toggle** - Switch between "Cash on Hand" and "Bank/Digital Money"
- **Daily Health Indicator** - Visual status indicator (Positive/Negative/Neutral)
- **Net Cash Position** - Clear net position calculation
- **End-of-Day Notifications** - Automated reminder prompts
- **Personalized Messages** - User-aware daily insights
- **Category-Based Tracking** - Pre-defined categories for inflows/outflows
- **Data Persistence** - LocalStorage-based data persistence
- **Transaction Filtering** - Filter by type (income/expense) and date
- **Smart Sorting** - Sort by date or amount

### User Personas Supported

- **Victoria** (Online Vendor) - Multi-channel sales tracking
- **Samuel** (Brick-and-Mortar Owner) - Daily cash reconciliation
- **Arinze** (Solopreneur/Freelancer) - Irregular income tracking

## 🚀 Quick Start

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. **Clone or Extract the Project**

   ```bash
   cd CashTrack-Complete
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   ```

4. **Access the App**
   - Open your browser and navigate to `http://localhost:5173`
   - The app will open with the Dashboard view

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📱 App Structure

```
src/
├── context/
│   └── TransactionContext.jsx    # Global state management
├── Dashboard.jsx                  # Main dashboard component
├── Dashboard.module.css            # Dashboard styles
├── TransactionHistory.jsx          # Transaction history component
├── TransactionHistory.module.css   # History styles
├── EndOfDay.jsx                   # End-of-day summary
├── EndOfDay.module.css             # End-of-day styles
├── Settings.jsx                   # User settings & profile
├── Settings.module.css             # Settings styles
├── Navigation.jsx                 # Bottom navigation
├── Navigation.module.css           # Navigation styles
├── App.jsx                        # Main app component
├── App.css                        # Global styles
└── main.jsx                       # Entry point
```

## 🎯 Core Pages

### 1. **Dashboard** (Home)

- Quick glance at daily cash flow
- Health indicator showing positive/negative status
- Wallet toggle (Cash vs Bank)
- Quick add transaction button
- Today's transaction list
- Overall balance view

### 2. **Transaction History**

- Complete transaction log
- Filter by transaction type
- Sort by date or amount
- Grouped by date
- Delete transactions with confirmation
- Summary statistics

### 3. **End-of-Day Summary**

- Comprehensive daily closure view
- Status indicator (Profit/Loss/Break Even)
- Transactions breakdown
- Personalized messages based on cash flow
- Daily tips and recommendations
- Close day action

### 4. **Settings**

- Profile management
- Business type selection
- Email and phone
- End-of-day reminder preferences
- Statistics overview
- Data management (clear all option)

## 💾 Data Management

### LocalStorage Schema

**Transactions:**

```javascript
{
  id: timestamp,
  type: 'inflow' | 'outflow',
  amount: number,
  category: string,
  description: string,
  date: ISO string,
  walletType: 'cash' | 'bank'
}
```

**User Data:**

```javascript
{
  name: string,
  businessName: string,
  email: string,
  phone: string,
  businessType: 'vendor' | 'retail' | 'freelancer',
  currency: string,
  enableEndOfDayPrompt: boolean,
  endOfDayTime: time string
}
```

**Wallet Type:**

- Currently selected: 'cash' | 'bank'

## 🎨 Design System

### Color Palette

- **Primary Blue**: #1a73e8
- **Success Green**: #34a853
- **Error Red**: #ea4335
- **Warning Yellow**: #fbbc04
- **Neutral Gray**: #5f6368

### Typography

- Font Family: System fonts (Apple/Google fonts fallback)
- Responsive sizing across all devices

### Mobile Optimization

- Fully responsive design
- Touch-friendly interface
- Optimized for low-end Android devices
- Bottom navigation for easy thumb access

## 📊 Features in Detail

### Inflow Categories

- Sales
- Investment
- Refund
- Loan
- Other Income

### Outflow Categories

- Rent
- Utilities
- Staff
- Supplies
- Marketing
- Travel
- Other Expense

### Wallet Types

1. **Cash** - Physical cash on hand
2. **Bank** - Digital/bank money

### Health Indicator Status

- **Positive** ✓ - Net inflows > outflows (Green)
- **Negative** ✗ - Net outflows > inflows (Red)
- **Neutral** ⚬ - Equal inflows and outflows (Yellow)

## ⚡ Performance

### Non-Functional Requirements Met

- **Dashboard Load Time**: <3 seconds
- **Availability**: Optimized for 8 AM - 10 PM usage
- **Responsive Design**: Mobile-first approach
- **Data Security**: LocalStorage with no external API calls
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

## 🔐 Security & Privacy

- **Local-Only Storage**: All data stored in browser's LocalStorage
- **No Server Communication**: No data sent to external servers
- **User Control**: Easy data deletion with confirmation
- **Encrypted Transit**: Not applicable (local storage)
- **GDPR Compliant**: No data collection or sharing

## 🛠 Development Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## 📦 Dependencies

- **React**: ^19.2.0 - UI library
- **React Router DOM**: ^7.13.0 - Client-side routing
- **Vite**: ^7.2.4 - Build tool

### Dev Dependencies

- ESLint + React plugins for code quality
- Vite React plugin for optimizations

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Low-end Android browsers

## 📋 Feature Checklist

### Implemented Features

- ✅ Daily transaction tracking
- ✅ Cash inflows management
- ✅ Cash outflows management
- ✅ Daily cash summary
- ✅ Health indicator (positive/negative/neutral)
- ✅ Net position calculation
- ✅ Wallet toggle (cash vs bank)
- ✅ Transaction history with filtering
- ✅ End-of-day summary
- ✅ User profile management
- ✅ Statistics dashboard
- ✅ Mobile-first responsive design
- ✅ LocalStorage persistence
- ✅ Category-based tracking
- ✅ Date-grouped transactions
- ✅ End-of-day reminders (configurable)

### Future Enhancements (Out of Scope for MVP)

- Bank/payment platform integrations
- Advanced analytics and charts
- Inventory management
- Tax features
- Multi-user access
- Cloud backup
- CSV export
- PDF reports

## 🚨 Troubleshooting

### App not loading?

- Clear browser cache and localStorage
- Check browser console for errors
- Ensure you're using a modern browser

### Transactions not saving?

- Check that localStorage is enabled in your browser
- Clear browser data and reload
- Check browser's storage limit

### Navigation not working?

- Refresh the page
- Check that Router is properly initialized
- Clear browser cache

## 📞 Support & Contact

For issues or feature requests, please review:

- CASHTRACK PRD.docx - Product specifications
- Review of the CASHTRACK PRD.docx - Design recommendations

## 📝 Notes

This is a **frontend-only application**. All data is stored locally in the browser using LocalStorage. For production deployment:

1. Consider adding backend API integration
2. Implement authentication
3. Add cloud storage for data persistence
4. Set up analytics tracking
5. Configure CDN for assets

## 🎓 Learning Resources

This project demonstrates:

- React Hooks (useState, useContext, useEffect)
- Context API for state management
- React Router for navigation
- CSS Modules for styling
- LocalStorage API
- Responsive design patterns
- Component composition

## 📄 License

This project is provided as-is for business use.

---

**Version**: 1.0.0  
**Last Updated**: February 2026  
**Status**: Production Ready MVP
