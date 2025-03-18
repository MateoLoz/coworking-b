
import './style/products.css'
import { useCustomText } from '../hooks/useCustomText'



export default function Products () {

useCustomText('product-text','blink')





    return(
        <div className="container">
          {/* Nuestro contenedor de productos !!! */}
            <div  className='products-container'>
            <section className='section-products'>
              <header>
                <div className='header-items'>
                <h2 id='product-text' className='product-title'>Conoce Nuestros productos</h2> <div id='blink' className='blink-element'> </div> 
                </div>
                 <small className='product-description'>Descubre nuestra selección de productos, cursos diseñados para brindarte calidad.</small>
              </header>
              <aside className='btn-container'>
                <button className='btn-more-info'>Mas informacion</button>
              </aside>
            </section>
 
            <section className='section-products'>
             <img loading='lazy' className='product-img' src="https://i.postimg.cc/pV39wbmf/472447665-1663286054569421-6113729388664519280-n.png" alt="" />
             </section>
           </div>
     
        
        </div>
    )
}