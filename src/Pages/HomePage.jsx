import Navbar from "../Navbar/components/Navbar"
import { Carrusel } from "../Carrusel/Carrusel"
import './styles/homepage.css'

export function HomePage  ()  {

    return(
      <>
      <header>
      <Navbar/> 
      </header>
       <main className="main-section">
        <Carrusel/>
       </main>
     

        </>
    )
}