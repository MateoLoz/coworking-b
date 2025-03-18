import {  useRef } from 'react'
import cursoMap from './consts/cursos'
import './styles/carruselcurso.css'
import { useCarrusel } from '../hooks/useCarrusel'
import { MappedCarruselItems } from './ItemsCarrusel'


export function Carrusel () {

const cursos = cursoMap.get("cursos")
const carruselRef = useRef()

const {popUp,PopDown} = useCarrusel(cursos,carruselRef)



    return(
        <>
           
        <div className="carrusel-container" >
            <div ref={carruselRef} id="carrusel" className="carrusel" >
            {cursos.length > 0 ? cursos.map( curso =>( 
              <MappedCarruselItems curso={curso} popUp={popUp} PopDown={PopDown} />
            ) ) : null}  
           </div>
        </div>
     
        </>
    )
}