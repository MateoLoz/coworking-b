import './form.css'
import { UseCustomForm } from "../hooks/useCustomForm"
import { InputNombre } from './components/InputNombre'
import { InputPassword } from './components/InputPassword'


export function Inicio () {

const {handleinicio} = UseCustomForm()


    return(
        <>
        <div className="form-container">

            <form className="form" action="" onSubmit={(e) => handleinicio(e)}>

                 <InputNombre/>
                <InputPassword/>

             <input className="input-btn-form" type="submit" value={'Enviar'} onClick={(e)=> handleinicio(e)} />
            </form>
        </div>
        </>
    )
}