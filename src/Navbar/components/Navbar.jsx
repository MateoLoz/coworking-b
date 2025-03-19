import '../styles/navbar.css'
import { useWidth } from '../../hooks/useWidth'
import { useMenu } from '../../hooks/useMenu.js'
import { UseCustomForm } from '../../hooks/useCustomForm.js'


export default function Navbar () {
   
    return <>
    <aside className="Navbar">
    <NavbarContent/>
    </aside>
    </>

}

export const NavbarContent = () => {

    const {width} = useWidth()

    return<>
      <section className='section-list'>
        <NavbarSection/>
        {width < 500 
        ? <NavbarHamburgerMenu/>
        :  <NavbarList/>
        }   
      </section>
    </>
}

export const NavbarList = () => {
    const {log,token} = UseCustomForm()
const {width} = useWidth()

    return(
        <div className='items-list'>
        <nav className='ul-items'>
            {width > 500 ? 
            <div className='items-list'>
                {
                    log == true ? <>
                      <li className='li-items'> <h4>{token.user[0].nombre}</h4> </li>
                    </>
                    :   <>
                       <li className='li-items'>  <h4>Registrase</h4> </li>
                       <li className='li-items'>  <h4>Inicio Sesion</h4> </li>
                    </>
                }
            {width < 900 
            ? null :  <>
                <li  className='li-items'><h4>Sobre Nosotros</h4></li>
                <li className='li-items'><h4>Soporte</h4></li>
            </>
            }  
            </div>
            : null}
           
        </nav>
    </div>
    )
}

export const NavbarSection = () => {
    return(
        <div className='img-container'>
        <img  src="https://i.postimg.cc/rySF3Xct/483957068-18035248328549728-4759686537203516683-n.png" alt="" width={'64px'} height={'64px'} />
        <h2 className='logo-text'>ColCoworking</h2>
        </div>
    )
}


export  const NavbarHamburgerMenu = () => {
 const  { menu }  = useMenu()

 return (
    <section className='items-list'>
     <HamburgerMenu/>
     {menu ? 
       <Modal Children={<ListItems/>}/>
      : null }
    </section>
      
) 
  
}

export const HamburgerMenu = () => {
   const { menu, updatemenu } = useMenu()
    return (
        <div onClick={()=> updatemenu()} className='hamburger-icon'>
            <span className={menu ? 'open-menu-line-1' : 'line-1'}></span>
            <span className={menu ? 'open-menu-line-2' : 'line-2'}></span>
        </div>
    )
}


export const ListItems = () => {
    const {token,log} = UseCustomForm()

    return(
        <ul className='ul-items-hamburger'>
            {
                log == true ?
                <>
                  <li className='li-items'>
                <h4 >{token.user[0].nombre}</h4>
                </li>
                </>
                : <>
            <li className='li-items'>
                <h4 >Registrase</h4>
                </li>
            <li className='li-items'>
                <h4 >Iniciar Sesion</h4>
                </li>
                </>
            }
            <li className='li-items'>
                <h4 >Sobre nosotros</h4>
                </li>
            <li className='li-items'>
                <h4 >Soporte</h4>
                </li>
        </ul>
    )
}

export const Modal = ({Children}) => {
    const { menu } = useMenu()
    return (
        <div className={menu ? 'modal open' : 'modal'}>
          {Children}
        </div>
    )
}

export const NavbarModalLog = () => {
return(
    <div>
    
    </div>
)
}