import { useContext } from 'react'
import { MenuContext } from '../context/Menu.jsx'

export function useMenu () {
    const {menu,setmenu} = useContext(MenuContext)
 
    function updatemenu () {
        setmenu(!menu)
    }


   
    return {menu,updatemenu}

}