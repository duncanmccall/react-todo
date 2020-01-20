import React from 'react';

function Header() {
    return (
        <header style={header}>
            <h1>To Do App</h1>
        </header>
    )
}

const header = {
    background: '#ff8c00',
    textAlign: 'center',
    padding: '20px',
    fontSize: '20px'
}

export default Header;