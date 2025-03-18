import { createContext, useState, useRef } from "react";

export const CustomFormContext = createContext()

export function CustomFormProvider({children}) {

    const [nombre,setnombre] = useState()
        const [password,setPassword] = useState()
        const [rol,setrol] = useState("")
        const [membresia,setmembresia] = useState()
        const [hoursleft,setHoursLeft] = useState()
        const [hoursEntry,setHoursEntry] = useState()
        const [msj,setMsj] = useState({ err:false,msj:null})
        const [msjactive,setMsjActive] = useState({id:null,active:false})
        const input = useRef(null)
        
      return(
        <CustomFormContext.Provider value={{
            nombre,
            setnombre,
            password,
            setPassword,
            rol,
            setrol,
            membresia,
            setmembresia,
            hoursleft,
            setHoursLeft,
            hoursEntry,
            setHoursEntry,
            msj,
            setMsj,
            msjactive,
            setMsjActive,
            input
        }}>
           {children}
        </CustomFormContext.Provider>
    )
}