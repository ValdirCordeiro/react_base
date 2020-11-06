import React from 'react';

export default function TelaPadrao({ titulo, children }) {
    return (
        <div style={{ width: "100%" }}>
            <h1>{titulo}</h1>
            {children}
        </div>
    )
}
