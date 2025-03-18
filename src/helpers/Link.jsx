import { Events } from "../consts/event"

export function navigate(href) {
   window.history.pushState({}, '', href)
   const navigationEvent = new Event (Events.PUSHSTATE)
   window.dispatchEvent(navigationEvent)
}

export function Link ({target, to ,...props}) {
const handleclick = (event) => {
 
 const isMainEvent = event.button == 0
 const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
 const isManageableEvent = target == undefined || target == '_self'

 if(isMainEvent && isManageableEvent && !isModifiedEvent){
    event.preventDefault()
    navigate(to) 
 }

 
}
return <a onClick={handleclick} href={to} target={target} {...props} />
}