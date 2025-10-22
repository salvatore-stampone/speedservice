import Link from "next/link";
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import styles from "./GridCard.module.css";

export default function GridCard({ title, contact }) {
    switch (title) {
        case "Whatsapp":
            return (
                <Link
                    className={styles.card}
                    href={`https://wa.me/${contact}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp className={styles.icon} />
                    <div className={styles.wrapper}>
                        <h1 className={styles.title}>{title}</h1>
                    </div>
                </Link>
            );

        case "Telefono":
            return (
                <Link
                    className={styles.card}
                    href={`tel:+${contact}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaPhoneAlt className={styles.icon} />
                    <div className={styles.wrapper}>
                        <h1 className={styles.title}>{title}</h1>
                    </div>
                </Link>
            );

        case "Instagram":
            return (
                <Link
                    className={styles.card}
                    href={`https://www.instagram.com/${contact}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram className={styles.icon} />
                    <div className={styles.wrapper}>
                        <h1 className={styles.title}>{title}</h1>
                    </div>
                </Link>
            );

        case "Mail":
            return (
                <Link
                    className={styles.card}
                    href={`mailto:${contact}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IoMailOutline className={styles.icon} />
                    <div className={styles.wrapper}>
                        <h1 className={styles.title}>{title}</h1>
                    </div>
                </Link>
            );

        default:
            return <h4>GridCard error: no title prop added.</h4>;
    }
}
