import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import BandcampInfo from '../components/BandcampInfo'
import PageLinks from '../components/PageLinks'
import SoundInfo from '../components/SoundInfo'

createRoot(document.getElementById('music')).render(
  <StrictMode>
    <PageLinks />
    <BandcampInfo />
    <SoundInfo />
  </StrictMode>
) 