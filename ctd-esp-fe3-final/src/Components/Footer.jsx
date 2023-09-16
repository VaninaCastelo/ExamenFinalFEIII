import React from 'react'
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <section><li className="social-icons">
        <a href="URL_DE_FACEBOOK" target="_blank"><img src="../../public/images/ico-facebook.png" alt="Facebook"/></a>
        <a href="URL_DE_INSTAGRAM" target="_blank"><img src="../../public/images/ico-instagram.png" alt="Twitter" /></a>
        <a href="URL_DE_TIKTOK" target="_blank"><img src="../../public/images/ico-tiktok.png" alt="Instagram" /></a>
        <a href="URL_DE_WHATSAPP" target="_blank"><img src="../../public/images/ico-whatsapp.png" alt="Instagram" /></a>
    </li></section>
    <section className="logo"><li><p>Powered by</p>
      <img  src="./images/DH.png" alt='DH-logo' />
    </li></section>
    </footer>
  )
}

export default Footer
