import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link href="/qna" className={styles.footer__qna}>Вопросы-ответы</Link>
      <Link href="/about" className={styles.footer__about}>О нас</Link>
    </div>
  )
}

export default Footer