import Link from "next/link";

function NotFound() {
    return (
        <div
            style={{
                display: "grid",
                minHeight: "70vh",
                placeItems: "center",
                textAlign: "center",
                fontSize: "1.125rem",
            }}
        >
            <span>
                Pagina non trovata
                <br />
                <br />
                <Link
                    href="/"
                    style={{ color: "#989898", textDecoration: "none" }}
                >
                    Torna alla home
                </Link>
            </span>
        </div>
    );
}

export default NotFound;
