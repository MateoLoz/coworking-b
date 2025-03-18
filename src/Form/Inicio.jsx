import './form.css'
import { UseCustomForm } from "../hooks/useCustomForm"
import { InputNombre } from './components/InputNombre'
import { InputPassword } from './components/InputPassword'


export function Inicio () {

const {handlesubmit} = UseCustomForm()


    return(
        <>
        <div className="form-container">

            <form className="form" action="" onSubmit={() => handlesubmit()}>

                 <InputNombre/>
                <InputPassword/>

             <input className="input-btn-form" type="submit" value={'Enviar'} onClick={(e)=> handlesubmit(e)} />
            </form>
        </div>
        </>
    )
}