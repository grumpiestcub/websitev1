import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import Soon from '../components/Soon.jsx'
import TypeInfo from '../components/TypeInfo.jsx'
import ImgCntnrOne from '../components/ImgOne.jsx'
import PageLinks from '../components/PageLinks.jsx'

createRoot(document.getElementById('home')).render(
  <StrictMode>
    <PageLinks />
    <Soon />
    <TypeInfo />
    <ImgCntnrOne />
  </StrictMode>,
) 