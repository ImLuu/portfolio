import React from 'react'
import "./Bar.css"
import { Inicio , Titulo } from './Bar.js';

function Bar() {
  return (
    <>
        <div className='bar-container'>
            <div className='section'>
                <div className='info'> Portafolio </div>
                <div className='btn-container'>
                    <button className='btn-funtion' onClick={() => Inicio()} > Inicio</button>
                    <button className='btn-funtion' onClick={() => Titulo()}> Titulo</button>
                    <button className='btn-funtion' > Experiencia</button>
                    <button className='btn-funtion' > Contacto</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Bar