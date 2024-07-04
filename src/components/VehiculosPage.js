// VehiculosPage.js
import React, { useState, useEffect } from 'react';

function VehiculosPage() {
    const [vehiculos, setVehiculos] = useState([]);

    useEffect(() => {
        fetch('https://miapi.com/vehiculos')
            .then(response => response.json())
            .then(data => setVehiculos(data))
            .catch(error => {
                // Si hay un error o no se reciben datos, usar datos dummy
                console.error('Error fetching data: ', error);
                setVehiculos([
                    { id: 1, marca: 'Toyota', modelo: 'Corolla', año: 2020 },
                    { id: 2, marca: 'Ford', modelo: 'Fiesta', año: 2018 }
                ]);
            });
    }, []);

    return (
        <div>
            <h2>Vehículos</h2>
            <ul>
                {vehiculos.map(vehiculo => (
                    <li key={vehiculo.id}>{`${vehiculo.marca} ${vehiculo.modelo} - ${vehiculo.año}`}</li>
                ))}
            </ul>
        </div>
    );
}

