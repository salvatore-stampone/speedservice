import React from 'react'
import styles from './GridCards.module.css'
import GridCard from './GridCard'

export default function GridCards() {
    return (
        <div className={styles.wrapper}>
            <GridCard title='Telefono' contact='390881042353' />
            <GridCard title='Instagram' contact='speedservice.lucera' />
            <GridCard title='Whatsapp' contact='390881042353' />
            <GridCard title='Mail' contact='speedservicelucera@libero.it' />
        </div>
    )
}
