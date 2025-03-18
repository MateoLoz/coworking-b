import { useEffect } from "react";
export function useCustomText (id,blink) {

    useEffect(()=>{
        let text = document.getElementById(id)
        let bink = document.getElementById(blink)
       let arr = text.innerHTML
        let leters = arr.split('')
        text.innerHTML = null
        let i = 0

        let intervalId = setInterval(() => {
          if(i < leters.length){
            text.style.opacity = 1
            text.innerHTML = `${text.innerHTML}${leters[i]}`
        
          }
          if(i >= leters.length){
            clearInterval(intervalId)
      
            setTimeout(()=>{
              bink.style.animationIterationCount = 'unset'
              bink.style.opacity = 0
            },1200)
      
          }
         i++
      
      
        }, 150);
      
       return () => clearInterval(intervalId)  
      
        },[document.onload])




}