import React from 'react'
import "./Bar.css"
import { Perfil , Titulo ,Experiencia } from './../../code/Functions';
function Bar() {
  return (
    <>
        <div className='bar-container'>
            <div className='section'>
                <div className='info'> Portafolio </div>
                <div className='btn-container'>
                    <button className='btn-funtion' onClick={() => Perfil()} > Perfil</button>
                    <button className='btn-funtion' onClick={() => Titulo()}> Titulo</button>
                    <button className='btn-funtion' onClick={() => Experiencia()}> Experiencia</button>
                    <button className='btn-funtion' > Contacto</button>
                </div>
            </div>
        </div>
    </>
  )
}
export default Bar