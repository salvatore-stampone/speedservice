import Link from "next/link";
import "./styles/globals.css";

function NotFound() {
    return (
        <div className="grid min-h-[70vh] place-items-center text-center text-lg">
            <span>
                Pagina non trovata
                <br />
                <br />
                <Link
                    href="/"
                    className="text-[#989898] no-underline hover:underline"
                >
                    Torna alla home
                </Link>
            </span>
        </div>
    );
}

export default NotFound;
