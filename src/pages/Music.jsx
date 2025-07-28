import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import MusicInfo from '../components/MusicInfo'

createRoot(document.getElementById('music')).render(
  <StrictMode>
    <MusicInfo />
  </StrictMode>,
) 