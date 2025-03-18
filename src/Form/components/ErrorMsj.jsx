import { UseCustomForm } from "../../hooks/useCustomForm"

export const ErrorMsj = (props) => {
    const {fontstyle,msjactive,msj} = UseCustomForm()
   return msjactive.id == props.props && msjactive.active == true ? <small style={fontstyle}>{msj.msj}</small> : null
}