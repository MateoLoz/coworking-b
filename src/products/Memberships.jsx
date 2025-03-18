import { MembershipCard } from './MembershipCard'
import './style/memberships.css'
import { memberships } from './const/membership'


export function Memberships () {
    return(
    <>
    <div className='container'>
    <h2 className='memberships-title'>Nuestros Productos</h2>
   <div className="articles-container">
    { memberships.length > 0 
    ? memberships.map( mem=>( <MembershipCard membership={mem}/>)  ) 
    : null
    }
   </div>
    </div>
  
    </>
    )
}