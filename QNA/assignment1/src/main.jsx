import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from "./Card.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card name="Harry Potter" imgSrc="https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" />
    <Card name="Transformer" imgSrc="https://cdn.mos.cms.futurecdn.net/dPo92zYeAz7Joxh7HWooJ3.jpg" />
 
  </React.StrictMode>,
)
