import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();
    return (
        <><div>
            <p>
                If you have any questions or concerns, feel free to contact us at{' '}
                <a href="mailto:hello@betechified.com">hello@betechified.com</a>.
            </p>
                </div>
        <button
            onClick={() => navigate('/dashboard')}
            style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius:'8px', border:'2px solid black', cursor:'pointer'}}>
                
                    Start tracking for free
                    <span style={{ marginLeft: 8 }}>→</span>
                </button>
            </>
    
    );

}

export default Contact;