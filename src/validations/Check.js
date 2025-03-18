export class Check {
    static checkMayCaracters (param) {
     return /[A-Z]/.test(param)
  
    }
    static checkEspecialCaracteres (param) {
       return /["#_+@%-]/.test(param)
        
    }
    static checkNumbers (param) {
         return /[0-9]/.test(param)
       
    }
}