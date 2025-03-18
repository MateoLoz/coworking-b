import './styles/notfound.css'
export function NotFoundPage () {
    return (
        <>
        <div className="not-found-container">
        <h1 className='not-found-title'>404</h1>
        <p className='not-found-text'>La pagina que deseas buscar no existe o fue removida. Por favor regrese a la pagina principal</p>
        <a className='btn-go-home' href='/'>Volver Inicio</a>
        </div>
        </>
    )
}