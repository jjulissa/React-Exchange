import React from 'react';
import "../../../src/App.css"

export default function Footer () { 

    const fecha = new Date().toLocaleDateString();
    
    return ( 
        <div className='Footer'> 
            <p> {fecha}, JJulissa</p>
        </div>
    )
}