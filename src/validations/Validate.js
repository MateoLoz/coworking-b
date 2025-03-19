import { Check } from "./Check"

export function validateMembresia  (membresia) {

    if(membresia == 'Taller niños y adolescentes') return
    if(membresia == 'Taller Libre') return 
    if(membresia == 'Espacio de colCoworking') return 
    if(membresia == 'Taller de alfareria') return 
    if(membresia == 'Ciclo formacion') return 
    if(membresia == 'Bono diario') return 
    else throw new Error ('membresia invalida !')
}


export class Validator {
    static async ValidateNombre (nombre) {
        if(nombre.length < 8) return 'El nombre es demasiado corto!'
        if(!Check.checkMayCaracters(nombre)) return 'El nombre debe contener al menos 1 caracter Mayuscula'
        if(!Check.checkNumbers(nombre)) return 'El nombre debe contener al menos 1 numero'
        // if(!Check.checkEspecialCaracteres(nombre)) return 'El nombre debe contener 1 caracter especial'
        else return true
    }
    static async ValidatePassword (password) {
        if(password.length < 8) return 'La contraseña es demasiado corto!'
        if(!Check.checkMayCaracters(password)) return 'La contraseña debe contener al menos 1 caracter Mayuscula'
        if(!Check.checkNumbers(password)) return 'La contraseña debe contener al menos 1 numero'
        if(!Check.checkEspecialCaracteres(password)) return 'La contraseña debe contener 1 caracter especial'
        else return true
    }
    static validatehours (membresia) {
        if(membresia == 'membresia') return ('membresia invalida!')
        if(membresia == 'Taller niños y adolescentes') return 
        if(membresia == 'Espacio de colCoworking') return 
        if(membresia == 'Taller de alfareria') return 
        if(membresia == 'Ciclo formacion') return 
        if(membresia == 'Bono diario') return 
        else  return ('membresia invalida !')
    }
    static validatemembresia (membresia) {
    if(membresia == 'membresia') return {msj:('Por favor eliga una membresia valida'),value:true}
    else return {msj:'',value:false}
    }
}