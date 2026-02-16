import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ background: 'var(--navy-deep)', padding: '40px 0', borderTop: '1px solid var(--navy-light)', textAlign: 'center' }}>
            <div className="container">
                <h3 style={{ color: 'var(--gold)', letterSpacing: '2px', marginBottom: '10px' }}>CHRISTLINESS</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                    Nurturing Hearts, Inspiring Minds.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
                    <a href="#" style={{ color: 'var(--white)' }}>Facebook</a>
                    <a href="#" style={{ color: 'var(--white)' }}>Twitter</a>
                    <a href="#" style={{ color: 'var(--white)' }}>Instagram</a>
                </div>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                    &copy; {currentYear} Christliness International School. Kirinya, Uganda. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
