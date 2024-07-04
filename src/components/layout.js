import React from 'react';
import './backoffice/layout.css';

function BackofficeLayout() {
    return (
        <div className="backoffice-container">
            <div className="menu">
                {/* Contenido del menú aquí */}
                <p>Menú</p>
            </div>
            <div className="content">
                {/* Contenido principal del backoffice aquí */}
                <p>Contenido del Backoffice</p>
            </div>
        </div>
    );
}

