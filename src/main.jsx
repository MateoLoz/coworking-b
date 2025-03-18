
import { createRoot } from 'react-dom/client'
import { MenuProvider } from './context/Menu.jsx'
import { CustomFormProvider} from './context/CustomForm.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <MenuProvider>
      <CustomFormProvider>
      <App/>
      </CustomFormProvider>
    </MenuProvider>
)
