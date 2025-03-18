import { Check } from "./Check"

export function validateMembresia  (membresia) {

    if(membresia == 'membresia') throw new Error('membresia invalida!')
    if(membresia == 'bicho-feo') return 27
    if(membresia == 'basic') return 12
    if(membresia == 'gold') return 16
    if(membresia == 'plus') return 10
    else throw new Error ('membresia invalida !')
}


export class Validator {
    static async ValidateNombre (nombre) {
        if(nombre.length < 8) return 'El nombre es demasiado corto!'
        if(!Check.checkMayCaracters(nombre)) return 'El nombre debe contener al menos 1 caracter Mayuscula'
        if(!Check.checkNumbers(nombre)) return 'El nombre debe contener al menos 1 numero'
        if(!Check.checkEspecialCaracteres(nombre)) return 'El nombre debe contener 1 caracter especial'
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
        if(membresia == 'bicho-feo') return 27
        if(membresia == 'basic') return 12
        if(membresia == 'gold') return 16
        if(membresia == 'plus') return 10
        else  return ('membresia invalida !')
    }
    static validatemembresia (membresia) {
    if(membresia == 'membresia') return {msj:('Por favor eliga una membresia valida'),value:true}
    else return {msj:'',value:false}
    }
}