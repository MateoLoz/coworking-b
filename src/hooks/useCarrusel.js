import { useRef , useEffect} from "react"

export function useCarrusel (carrusel,carruselRef) {


const carruselref = carruselRef
const cursos = carrusel.length
let cursoslength = cursos


const indexref = useRef(cursoslength)
const stepRef = useRef(1)

 useEffect(()=> {

    let intervalId = setInterval(() => {

        if(indexref.current < cursoslength){
        carruselref.current.style.transform = `translateX(-${stepRef.current * 300}px)`
       indexref.current = indexref.current + 1
       stepRef.current = stepRef.current + 1
    
        }
        if(indexref.current == cursoslength){
            carruselref.current.style.transform = `translateX(0px)`
            indexref.current =  0
            stepRef.current =  1
    
         }
    
    }, 2500);


    return ()=> clearInterval(intervalId);


 },[])


  const popUp = (firstclassname,secondclassname) => {
   let i = 0;

    let sections = getelements(firstclassname)
    let btn = getelements(secondclassname)
   

     while(i < sections.length && btn.length){
       sections[i].style.opacity = 1
       sections[i].style.top = "55px"
       btn[i].style.top = "0px"
       btn[i].style.opacity = 1
       i++
     }
 
   

    
  }

  const PopDown = (firstclassname,secondclassname) => {
      let i = 0;
    let sections = getelements(firstclassname)
    let btn = getelements(secondclassname)

   

    while(i < sections.length && btn.length){
      sections[i].style.top = "110px"
      sections[i].style.opacity = 0
      btn[i].style.top = "20px"
    
      i++
    }
    
  }


  function getelements (param1){
    let element = document.getElementsByClassName(param1)
   
  
    return element
  }


return {popUp,PopDown,carruselRef}



}