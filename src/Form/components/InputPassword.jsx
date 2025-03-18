import { UseCustomForm } from "../../hooks/useCustomForm"
import { ErrorMsj } from "./ErrorMsj"
import { StyleEvaluation } from "./styleEvaluation"

export function InputPassword () {

const {handlepassword} = UseCustomForm()
const style = StyleEvaluation('password')

    return(
        <>
         <label className="input-label" htmlFor="password">Contraseña</label> <ErrorMsj props={'password'}/>
         <input className="input-form" style={style} id="password" type="text" placeholder="contraseña" onChange={(e)=> handlepassword(e, 'password')}/>
        </>
   
    )
}

