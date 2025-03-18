import { useCustomText } from '../hooks/useCustomText'
import './styles/homevideo.css'

export function HomeVideo () {

    useCustomText('title')
  

    return (
        <>
        <div className='video-container'>
            <section className='title-container'> 
            <h1 id='title' className='title'>Bienvenido</h1> 
            </section>
         <video  autoPlay loop  className='video'  >
            <source  src="./src/videos/vids/homevid3.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
         </video>

        </div> 
        </>
    )
}


