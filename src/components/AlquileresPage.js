// AlquileresPage.js
import React, { useState, useEffect } from 'react';

function AlquileresPage() {
    const [alquileres, setAlquileres] = useState([]);

    useEffect(() => {
        fetch('https://miapi.com/alquileres')
            .then(response => response.json())
            .then(data => setAlquileres(data))
            .catch(error => {
                console.error('Error fetching data: ', error);
                setAlquileres([
                    { id: 1, vehiculo: 'Toyota Corolla', cliente: 'Roberto Quilez', fechaInicio: '2023-01-01', fechaFin: '2023-01-10' },
                    { id: 2, vehiculo: 'Ford Fiesta', cliente: 'Marcos Garcia', fechaInicio: '2023-02-01', fechaFin: '2023-02-10' }
                ]);
            });
    }, []);

    return (
        <div>
            <h2>Alquileres</h2>
            <ul>
                {alquileres.map(alquiler => (
                    <li key={alquiler.id}>{`${alquiler.vehiculo} - ${alquiler.cliente} (${alquiler.fechaInicio} a ${alquiler.fechaFin})`}</li>
                ))}
            </ul>
        </div>
    );
}

