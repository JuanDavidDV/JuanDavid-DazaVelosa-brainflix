import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/partials/_global.scss'

import UploadPage from './pages/UploadPage/UploadPage.jsx' //{/*REMEMBER TO REMOVE*/}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UploadPage /> {/*REMEMBER TO CHANGE BACK TO APP*/}
  </StrictMode>,
)
