import { useContext } from "react"
import { Validator } from "../validations/Validate"
import { validateMembresia } from "../validations/Validate"
import { CustomFormContext } from "../context/CustomForm"
import { routesapi } from "../consts/routesapi"
import { httpcontroller } from "../helpers/httpcontroller"

export function UseCustomForm () {

   const {nombre,setnombre,password,setPassword,rol,membresia,setmembresia,hoursleft,setHoursLeft,hoursEntry,setHoursEntry,msj,setMsj,msjactive,setMsjActive,input,token,log,settoken,setlog} = useContext(CustomFormContext)

    const handleRef = (id) => {
        input.current = document.getElementById(id)

        return input
    }

    const handlepassword = async (e,id) => {
        const res = e.target.value
        validatemsj(res)
        handleRef(id)
       let value = input.current
       handlemsjActive(value)
        setPassword(res)
    }

    const handlename = async (e, id) => {
     const res = e.target.value
     validatemsj(res)
      handleRef(id)
      let value = input.current
      handlemsjActive(value)
      setnombre(res)
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        let res = validateMembresia(membresia)
        setHoursLeft(res)
        setHoursEntry('00:00')
        console.log(nombre,password,rol,membresia,hoursleft,hoursEntry)
    }

    const handlemembership = async (e,id) => {
      let res = e.target.value
      let err = await Validator.validatemembresia(res)
      handleRef(id)
      let value = input.current
      handlemsjActive(value)
       setmembresia(res)
       setMsj({msj:err.msj,err:err.value})
    }

    const handlemsjActive = (value) => {
        setMsjActive({id:value.id,active:true})
    }

    const style = {
       err:{
        outline:'1px solid red',
        },
        pass:{
        outline:'1px solid green',
        },
        default:{
            outiline:'transparent'
        }

    }
const validatemsj = async (res) => {
    let msj =  await Validator.ValidateNombre(res)
    if(msj == true){
     setMsj({err:false,msj:msj})
    }
    if(msj != true){
     setMsj({err:true,msj:msj})
    }
}

const fontstyle = {
    color: 'red',
    fontFamily:'Inter',
    fontWeight:'500'
}

const handleinicio = async (e) => {
e.preventDefault()
if(nombre == undefined)return
if(password == undefined)return
try{
let res = await httpcontroller.postdata(routesapi.login,nombre,password)

localStorage.setItem('user',JSON.stringify(res))
await settoken(res)
await setlog(!log)

 if(log == true && token != null){
 window.location.href='/'
 }


}catch(err){
    throw new Error(err.message)
}

}




return {handlename,handlemembership,handlepassword,handlesubmit,handleinicio,msj,msjactive,style,fontstyle,token,log}


}