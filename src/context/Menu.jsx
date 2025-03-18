import { createContext, useState } from "react";


export  const MenuContext = createContext()

export function MenuProvider ({children}) {
    const [menu, setmenu] = useState(false)

    return (
        <MenuContext.Provider value={{
            menu,
            setmenu
            }}>
        {children}
        </MenuContext.Provider>
    )

}



