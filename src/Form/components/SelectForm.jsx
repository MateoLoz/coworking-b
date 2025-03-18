import { UseCustomForm } from "../../hooks/useCustomForm";
import { ErrorMsj } from "./ErrorMsj";
import { StyleEvaluation } from "./styleEvaluation";
export const SelectForm =() => {

const {handlemembership} = UseCustomForm()
const style = StyleEvaluation('select')

    return (
        <>
         <label className="input-label" htmlFor="select">Membresia</label> <ErrorMsj props={'select'}/>
                 <select id="select" style={style} className="select-form"  onChange={(e)=> handlemembership(e,'select')}>
                    <option value="membresia">Seleccionar..</option>
                    <option value="bicho-feo">bicho-feo</option>
                    <option value="gold">gold</option>
                    <option value="plus">plus</option>
                 </select>
        </>
    )
}
