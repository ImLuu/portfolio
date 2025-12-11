import React from 'react'
import fotito from '../../image/fotito.jpg'

function Estudio() {
    return (
        <>  <div className=''>
            <div className='study-title' id="estudio">Estudios</div>

            <div className='study-container'>

                <img src={fotito} className='study-photo' />
                <div className='study-name'>Luis Felipe Molina Cortés</div>
                <div className='study-info'>Algo de referencia</div>

            </div>
        </div>
        </>

    )
}

export default Estudio