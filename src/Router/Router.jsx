import { useState, useEffect} from 'react'
import { Events } from '../consts/event'
import { NotFoundPage } from '../Pages/NotFoundPage'


export function Router ({routes = [], defualtComponent : DefualtComponent = () => <NotFoundPage/> })
{
  const [ currentPath,setCurrentPath ] = useState(window.location.pathname)

  useEffect(()=> {
  const onlocationChange = () => {
    setCurrentPath(window.location.pathname)
  }
  window.addEventListener(Events.PUSHSTATE, onlocationChange)
  window.addEventListener(Events.POPSTATE, onlocationChange)

  return () => {
   window.removeEventListener(Events.PUSHSTATE,onlocationChange)
   window.removeEventListener(Events.POPSTATE,onlocationChange)
  }
  },[])
  const Page = routes.find(({path})=> path == currentPath)?.Component
  return Page ? <Page/> : <DefualtComponent/>
}