import React, { useState } from 'react';
import appleLogo from './appleLogo.png';
import social from './social.png';
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';

const navStyles = {
  nav: {
    backgroundColor: '#022C22',
    padding: '1rem',
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#D4AF37',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

const Navbar = () => {
  const [logoHover, setLogoHover] = useState(false);
  return (
    <nav style={navStyles.nav}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Link to="/" style={{ display: 'inline-block' }}>
          <img
            src={logo}
            alt="CashTrack Logo"
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
            style={{
              width: '100px',
              height: '100px',
              transition: 'transform 150ms ease',
              transform: logoHover ? 'scale(1.08)' : 'scale(1)',
              cursor: 'pointer',
            }}
          />
        </Link>
      </div>
      <ul style={navStyles.navLinks}>
        <li><Link to="/" style={navStyles.link}>Home</Link></li>
        <li><Link to="/about" style={navStyles.link}>About us</Link></li>
        <li><Link to="/contact" style={navStyles.link}>Contact us</Link></li>
        <li><Link to="/faqs" style={navStyles.link}>FAQs</Link></li>
      </ul>
    </nav>
  );
};

function Welcome() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // 1. Save the data so Wallet.jsx can read it
    const profileData = { email, businessName, businessType };
    localStorage.setItem('cashtrack_profile', JSON.stringify(profileData));
    
    // 2. Log and Redirect
    console.log('Profile Saved:', profileData);
    navigate('/dashboard'); 
  };

  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Welcome to CashTrack 💸</h1>
        <h3>Take control of your financial story.</h3>
        
        {showForm ? (
          <div>
            <h3>Log In</h3>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto', gap: '15px' }}>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <input type="text" placeholder="Business Name" value={businessName} onChange={(e)=> setBusinessName(e.target.value)} required/>
              <input type="text" placeholder="Business Type" value={businessType} onChange={(e)=> setBusinessType(e.target.value)} required/>
              <button type="submit" style={{ backgroundColor: '#D4AF37', color: '#022C22', border: 'none', padding: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
                Continue
              </button>
            </form>
            <button onClick={() => setShowForm(false)} style={{ marginTop: '20px', background: 'none', border: 'none', color: '#D4AF37', cursor: 'pointer', textDecoration: 'underline' }}>
              Back to options
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginTop: '30px' }}>
            <button onClick={() => setShowForm(true)} style={{ padding: '10px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <img src={social} alt="Google" style={{ width: '20px', marginRight: '8px' }} />
              Continue with Google
            </button>
            <button onClick={() => setShowForm(true)} style={{ padding: '10px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <img src={appleLogo} alt="Apple" style={{ width: '20px', marginRight: '8px' }} />
              Continue with Apple
            </button>
            <p>or</p>
            <button onClick={() => setShowForm(true)} style={{ backgroundColor: '#D4AF37', color: '#022C22', border: 'none', padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold' }}>
              Log in with Email
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Welcome;