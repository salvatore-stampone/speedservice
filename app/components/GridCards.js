import GridCard from "./GridCard";
import styles from "./GridCards.module.css";

export default function GridCards() {
    return (
        <div className={styles.wrapper}>
            <GridCard title="Telefono" contact="390881042353" />
            <GridCard title="Instagram" contact="speedservice.lucera" />
            <GridCard title="Whatsapp" contact="390881042353" />
            <GridCard title="Mail" contact="speedservicelucerasrls@gmail.com" />
        </div>
    );
}
