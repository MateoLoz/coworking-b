import { useEffect, useState } from 'react'

export function useWidth () {
    
    const [width,setWidth] = useState(0)

    function updatesize () {
        setWidth(window.innerWidth)
    }

    useEffect(()=> {
        window.addEventListener('resize', updatesize) 
        updatesize()
        
        return () => window.removeEventListener('resize', updatesize)
    },[])

  return  {width}
}