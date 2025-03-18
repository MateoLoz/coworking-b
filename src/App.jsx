
import './App.css'
import { lazy } from 'react'
import { Registro } from './Form/Registro.jsx'
import { Router } from './Router/Router.jsx'

import { HomePage } from './Pages/HomePage.jsx'
import { RegistroPage } from './Pages/RegistroPage.jsx'
import { Footer } from './components/Footer.jsx'
import { Events } from './consts/event.js'
import { HomeVideo } from './videos/HomeVide.jsx'
import { InicioSesionPage } from './Pages/InicoSesionPage.jsx'
const  ProductsPage = lazy(()=> import('./Pages/ProductsPage.jsx'))

 const routes = [
   {
     path:'/',
     Component: HomePage
   },
   {
    path:'/productos',
    Component: ProductsPage
   },
   {
    path:'/registro',
    Component: RegistroPage
   },
   {
    path:'/test',
    Component: HomeVideo
   },
   {
   path:'/test/login',
   Component: InicioSesionPage
   },
  
 ]



function App() {

 
  return (
    <>
    <Router routes={routes}/> 
   
    </>
  )
}

export default App
