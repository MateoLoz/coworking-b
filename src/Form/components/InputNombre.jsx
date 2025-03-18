import { UseCustomForm } from "../../hooks/useCustomForm"
import { ErrorMsj } from "./ErrorMsj"
import { StyleEvaluation } from "./styleEvaluation"
export function InputNombre () {

 const {handlename} = UseCustomForm()
 const style = StyleEvaluation('nombre')

    return(
        <>
         <label className="input-label" htmlFor="nombre" >Nombre</label> <ErrorMsj props={'nombre'}/>
         <input  className="input-form" style={style}  id="nombre"  type="text" placeholder="nombre" onChange={(e)=> handlename(e ,'nombre')} />
        </>
       
    )
}




