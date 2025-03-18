

export function MappedCarruselItems ({curso,popUp,PopDown})  {
const {id,img,title} = curso

    return(
        <>
          <div id="div" key={id}  onMouseEnter={()=>popUp('carrusel-info','btn-section-popover')} onMouseLeave={()=>PopDown('carrusel-info','btn-section-popover')}> 
              <li className="listed-item" >
               <img src={img} alt=""/>
                 <section className="carrusel-info"  onMouseEnter={()=>popUp('carrusel-info','btn-section-popover')} onMouseLeave={()=>PopDown('carrusel-info','btn-section-popover')}>
                     <h3 className="info-cursos-text">{title}</h3>
                     <button  className="btn-section-popover">Mas informacion</button>
                  </section>
                  </li>
        </div> 
        </>
    )
}