// ClientesPage.js
import React, { useState, useEffect } from 'react';

function ClientesPage() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch('https://miapi.com/clientes')
            .then(response => response.json())
            .then(data => setClientes(data))
            .catch(error => {
                console.error('Error fetching data: ', error);
                setClientes([
                    { id: 1, nombre: 'Roberto Quilez', email: 'robertoqui@ejemplo.com' },
                    { id: 2, nombre: 'Marcos Garcia', email: 'marcosgar@ejemplo.com' }
                ]);
            });
    }, []);

    return (
        <div>
            <h2>Clientes</h2>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.id}>{`${cliente.nombre} - ${cliente.email}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default ClientesPage;