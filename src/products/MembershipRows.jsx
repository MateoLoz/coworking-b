import { CheckIcon } from "../icons/CheckIcon"
import { NotIcon } from "../icons/NotIcon"
export function MembershipRows  ({prop,has,info}) {






return(
<article className='membership-rows'>

{has == true 
? <div className='membership-rows'>
    <div className='icons-container'> <CheckIcon/></div>
    <h4 className='membership-details-text'> {info} </h4>
  </div> 
  : has == false 
  ?  <div className='membership-rows'>
    <div className='icon-container-x'> <NotIcon/></div>
    <h4 className='membership-details-text'> {info} </h4>
  </div> 
  : null}

  {has == undefined && info == undefined ? <div className='membership-rows'>
    <div className='icons-container'> <CheckIcon/></div>
    <h4 className='membership-details-text'> {prop} </h4>
  </div> : has == undefined && info == '' ? null : null}




 
</article>
)
}

