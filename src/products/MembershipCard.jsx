

import { MembershipRows } from './MembershipRows'
import './style/memberships.css'

export function MembershipCard ({membership}) {

   const {type,id,nombre,price,frecuencia,typefrecuencia,clases,duracion,turnos,guardado} = membership
  const {materiales} = membership
 const {has,info} = materiales







    return(
    <>
   <article key={id} className="card-container">
       <header className='article-header-info'>
         <h3 className='membership-title'>{type}</h3>
         <h3 className='membership-name'>{nombre}</h3>
         <aside className='details-membership'>
            <h2 className='article-price-title'> ${price} </h2>
            <h5 className='artcile-type-membership'>{frecuencia}</h5>
         </aside>
       </header>
       <section className='membership-details'>

         {typefrecuencia.length > 0 ? <MembershipRows prop={typefrecuencia}/> : null}

         {clases.length > 0 ? <MembershipRows prop={clases}/> : null}

         {duracion.length > 0 ? <MembershipRows prop={duracion}/> : null}

         {turnos.length > 0 ? <MembershipRows prop={turnos}/> : null}

         {materiales ? <MembershipRows has={has} info={info} /> : null}

         {guardado.length > 0 ? <MembershipRows prop={guardado}/> : null}
        
       </section>
   </article>
    </>        
    )
}