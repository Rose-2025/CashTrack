import React, { useState, useEffect } from 'react'; 

const Wallet = () => {
    // 1. State Hooks - Logic MUST be inside the component
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [profile, setProfile] = useState(() => JSON.parse(localStorage.getItem('cashtrack_profile')) || null);
    const [transactions, setTransactions] = useState(() => JSON.parse(localStorage.getItem('cashtrack_data')) || []);

    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');
    const [type, setType] = useState('expense');

    // 2. Persistent Storage
    useEffect(() => {
        localStorage.setItem('cashtrack_data', JSON.stringify(transactions));
    }, [transactions]);

    // 3. Logic: Calculate Total Balance
    const totalBalance = transactions.reduce((acc, curr) => {
        return curr.type === 'income' ? acc + curr.amount : acc - curr.amount;
    }, 0);

    // 4. Logic: Add Transaction
    const addTransaction = (e) => {
        e.preventDefault();
        const newEntry = {
            id: Date.now(),
            amount: Number(amount),
            note: note || '',
            type,
            date: new Date().toISOString(),
        };
        setTransactions((prev) => [...prev, newEntry]);
        setAmount('');
        setNote('');
        setType('expense');
    };

    // 5. Render
    return (
        <div style={{ padding: 20, maxWidth: '600px', margin: '0 auto' }}>
            {/* Display the Business Name from the Profile State */}
            <h2>{profile?.businessName || "My"} CashTrack Wallet 💳</h2>
            
            <div style={{ 
                padding: '20px', 
                backgroundColor: '#022C22', 
                color: '#D4AF37', 
                borderRadius: '10px',
                marginBottom: '20px' 
            }}>
                <h3>Current Balance</h3>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    ${totalBalance.toFixed(2)}
                </p>
                {profile && <small>Business: {profile.businessType}</small>}
            </div>

            <form onSubmit={addTransaction} style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 16 }}>
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    style={{ padding: '8px' }}
                />
                <input
                    type="text"
                    placeholder="Note (optional)"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    style={{ padding: '8px' }}
                />
                <select value={type} onChange={(e) => setType(e.target.value)} style={{ padding: '8px' }}>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>
                <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#D4AF37', border: 'none', fontWeight: 'bold' }}>
                    Add
                </button>
            </form>

            <hr />

            <h3>History</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {transactions.length === 0 ? <p>No transactions yet.</p> : 
                transactions.map((t) => (
                    <li key={t.id} style={{ 
                        padding: '10px', 
                        borderBottom: '1px solid #ddd',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <span>
                            <strong>{new Date(t.date).toLocaleDateString()}</strong>: {t.note || t.type}
                        </span>
                        <span style={{ color: t.type === 'income' ? 'green' : 'red', fontWeight: 'bold' }}>
                            {t.type === 'income' ? '+' : '-'} ${t.amount.toFixed(2)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Wallet;