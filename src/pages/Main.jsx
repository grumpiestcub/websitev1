import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import Soon from '../components/Soon.jsx'
import WrapperProgress from '../components/WrapperProgress.jsx'
import TypeInfo from '../components/TypeInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Soon />
    <WrapperProgress />
    <TypeInfo />
  </StrictMode>,
)