import React from 'react';
import './style.css'


import Cards from '../Cards/index'

export default function Homepage() {
    return (
        <div id='container-homepage'>
            <h3>Cursos em alta no Senai</h3>
            <Cards />

        </div>

    );
}