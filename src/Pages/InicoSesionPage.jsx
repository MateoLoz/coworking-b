import { Inicio } from "../Form/Inicio";
import Navbar from "../Navbar/components/Navbar";

export function InicioSesionPage () {
    return(
        <>
         <header>
            <Navbar/>
         </header>
         <main>
            <Inicio/>
         </main>
        </>
    )
}