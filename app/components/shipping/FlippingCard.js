import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./FlippingCard.css";

export default function FlippingCard({ title, description, icon }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const renderIcon = (className) => {
        if (icon) {
            return (
                <span
                    className={`flipping-card__btn ${className}`}
                    onClick={handleFlip}
                >
                    {icon}
                </span>
            );
        }
        return (
            <FaPaperPlane
                className={`flipping-card__btn ${className}`}
                onClick={handleFlip}
            />
        );
    };

    return (
        <div
            className={isFlipped ? "flipping-card is-flipped" : "flipping-card"}
        >
            <div className="flipping-card__face flipping-card__face--front">
                <h2 className="flipping-card__title">{title}</h2>
                {renderIcon("flipping-card__btn--front")}
            </div>
            <div className="flipping-card__face flipping-card__face--back">
                <span className="flipping-card__description">
                    {description}
                </span>
                {renderIcon("flipping-card__btn--back")}
            </div>
        </div>
    );
}
