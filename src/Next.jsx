import React from 'react';

const navStyles = {
    nav: { padding: '12px', },
    navLinks: { listStyle: 'none', display: 'flex', gap: '16px', margin: 0, padding: 0 },
    Link: { textDecoration: 'none', color: '#D4AF37',textAlign:'center', fontWeight:'bold' },
};

const Navbar = () => (
    <nav style={navStyles.nav}>
        <ul style={navStyles.navLinks}>
            <li>
                <a href="/" style={navStyles.Link}>Wallet</a>
            </li>
            <li>
                <a href="/daily-health-indicator" style={navStyles.Link}>Daily Health indicator</a>
            </li>
            <li>
                <a href="/pay-yourself" style={navStyles.Link}>Pay yourself</a>
            </li>
            <li>
                <a href="/end-of-day" style={navStyles.Link}>End-Of-Day</a>
            </li>
            <li>
                <a href="/debit-credit" style={navStyles.Link}>Debit/Credit</a>
            </li>
        </ul>
    </nav>
);

export default function Next() {
    return (
        <div>
            <Navbar />
        </div>
    );
}