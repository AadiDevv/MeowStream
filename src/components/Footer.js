import React from 'react'
import '../styles/styles.css'
import '../styles/outils.css'


export default function Footer (){

    const curentYear = new Date().getFullYear()
  return (
    <footer className='footer'>
      <p className='footer-text'>© {curentYear} Moviedux, All rights reserved</p>
    </footer>
  )
}

