import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import Soon from '../components/Soon.jsx'
import TypeInfo from '../components/TypeInfo.jsx'
import ImgCntnrOne from '../components/ImgOne.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Soon />
    <TypeInfo />
    <ImgCntnrOne />
  </StrictMode>,
) 