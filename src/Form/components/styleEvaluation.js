import { UseCustomForm } from "../../hooks/useCustomForm"

export const StyleEvaluation = (props) => {
    const {msjactive,style,msj} = UseCustomForm()
      let value = msjactive.id == props ? msj.err == true ? style.err : style.pass : style.default
    return value
}
