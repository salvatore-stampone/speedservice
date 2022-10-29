import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa';
import './FlippingCard.css'

export default function FlippingCard({ title, description }) {
    const [isFlipped, setIsFlipped] = useState(false);


    return (
        <div className={isFlipped ? 'flipping-card is-flipped' : 'flipping-card'}>
            <div className='flipping-card__face flipping-card__face--front'>
                <h2 className='flipping-card__title'>{title}</h2>
                <FaPaperPlane
                    className='flipping-card__btn flipping-card__btn--front'
                    onClick={() => {
                        setIsFlipped(!isFlipped)
                    }} />
            </div>
            <div className='flipping-card__face flipping-card__face--back'>
                <span className='flipping-card__description'>{description}</span>
                <FaPaperPlane
                    className='flipping-card__btn flipping-card__btn--back'
                    onClick={() => {
                        setIsFlipped(!isFlipped)
                    }} />
            </div>
        </div>
    )
}
