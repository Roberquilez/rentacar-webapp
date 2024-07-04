// Componente FichaAlquiler.js
import React from 'react';

function FichaAlquiler({ vehiculo, cliente, tiempoAlquiler }) {
    return (
        <div className="fichaAlquiler">
            <table>
                <thead>
                <tr>
                    <th>Vehículo</th>
                    <th>Cliente</th>
                    <th>Tiempo de Alquiler</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{vehiculo}</td>
                    <td>{cliente}</td>
                    <td>{tiempoAlquiler}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
