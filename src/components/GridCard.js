import React from 'react'
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'
import styles from './GridCard.module.css'

export default function GridCard({ title, contact }) {

  switch (title) {
    case 'Whatsapp':
      return (
        <div className={styles.card}>
          <FaWhatsapp className={styles.icon} />
          <div className={styles.wrapper}>
            <h1 className={styles.title}>{title}</h1>
            <a
              className={styles.link}
              href={`https://wa.me/${contact}`}
              target="_blank"
              rel="noopener noreferrer">+{contact}</a>
          </div>
        </div>
      )

    case 'Telefono':
      return (
        <div className={styles.card}>
          <FaPhoneAlt className={styles.icon} />
          <div className={styles.wrapper}>
            <h1 className={styles.title}>{title}</h1>
            <a
              className={styles.link}
              href={`tel:+${contact}`}
              target="_blank"
              rel="noopener noreferrer">+{contact}</a>
          </div>
        </div>
      )

    case 'Instagram':
      return (
        <div className={styles.card}>
          <FaInstagram className={styles.icon} />
          <div className={styles.wrapper}>
            <h1 className={styles.title}>{title}</h1>
            <a
              className={styles.link}
              href={`https://www.instagram.com/${contact}/`}
              target="_blank"
              rel="noopener noreferrer">@{contact}</a>
          </div>
        </div>
      )

    case 'Mail':
      return (
        <div className={styles.card}>
          <IoMailOutline className={styles.icon} />
          <div className={styles.wrapper}>
            <h1 className={styles.title}>{title}</h1>
            <a
              className={styles.link}
              href={`mailto:${contact}`}
              target="_blank"
              rel="noopener noreferrer">{contact}</a>
          </div>
        </div>
      )

    default:
      return (
        <h4>GridCard error: no title prop added.</h4>
      )
  }
}
