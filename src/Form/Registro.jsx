import './form.css'
import { UseCustomForm } from "../hooks/useCustomForm"
import { InputNombre } from './components/InputNombre'
import { InputPassword } from './components/InputPassword'
import { SelectForm } from './components/SelectForm'

export function Registro () {

const {handlesubmit} = UseCustomForm()


    return(
        <>
        <div className="form-container">

            <form className="form" action="" onSubmit={() => handlesubmit()}>

                 <InputNombre/>
                <InputPassword/>
                <SelectForm/>

                 <input className="input-btn-form" type="submit" value={'Enviar'} onClick={(e)=> handlesubmit(e)} />
            </form>
        </div>
        </>
    )
}