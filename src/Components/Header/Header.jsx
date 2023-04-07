import React from 'react';

const Header = () => {
    return (
        <div>
            <div>
                <ul style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', listStyleType: 'none' }}>
                    <li style={{ marginRight: '10px', cursor: 'pointer' }}>Home</li>
                    <li style={{ marginRight: '10px', cursor: 'pointer' }}>About</li>
                    <li style={{ marginRight: '10px', cursor: 'pointer' }}>Product</li>
                    <li style={{ marginRight: '10px', cursor: 'pointer' }}>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;