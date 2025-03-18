import { Registro } from "../Form/Registro";
import Navbar from "../Navbar/components/Navbar";
import './styles/registropage.css'
export function RegistroPage () {

    return <>
    <section className="registro-page">
    <header>
        <Navbar/>
    </header>
    <main className="main-content">
        <Registro/>
    </main>
    </section>
   
    </>
}