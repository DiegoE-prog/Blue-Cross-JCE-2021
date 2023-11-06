import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tbodyNew, setTbodyNew] = useState('');
    return (
        <tbody className="tbody">
          <tr>
            <td>Nuevo Contenido 1, Celda 1</td>
            <td>Nuevo Contenido 1, Celda 2</td>
          </tr>,
          <tr>
            <td>Nuevo Contenido 2, Celda 1</td>
            <td>Nuevo Contenido 2, Celda 2</td>
          </tr>
        </tbody>
    );
}

export default App;