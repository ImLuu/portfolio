import React from 'react'
import '../../CSS/style.css'
import fotito from '../../image/fotito.jpg'


function AboutMe() {
    return (
        <>

            <div className='aboutme-title' id="inicio">Sobre mi</div>

            <div className='aboutme-container'>

                <img src={fotito} className='aboutme-photo' />
                <div className='aboutme-name'>Luis Felipe Molina Cortés</div>
                <div className='aboutme-info'>Algo de referencia</div>

            </div>

        </>
    )
}

export default AboutMe