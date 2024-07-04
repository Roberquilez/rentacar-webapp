import React from 'react';
import './backoffice/layout.css';

function BackofficeLayout() {
    return (
        <div className="backoffice-container">
            <div className="menu">
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#vehiculos">Vehículos</a></li>
                    <li><a href="#clientes">Clientes</a></li>
                    <li><a href="#alquileres">Alquileres</a></li>
                    <li><a href="#disponibles">Ver disponibles</a></li>
                </ul>
            </div>
            <div className="content">
                {/* Contenido principal del backoffice aquí */}
                <p>Contenido del Backoffice</p>
            </div>
        </div>
    );
}

export default BackofficeLayout;