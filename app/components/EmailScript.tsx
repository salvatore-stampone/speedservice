import emailjs from "@emailjs/browser";
import Script from "next/script";

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

function EmailScript() {
    return (
        <Script
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
            strategy="afterInteractive"
            onLoad={() => {
                if (!publicKey) {
                    console.error("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is not set");
                    return;
                }
                emailjs.init({
                    publicKey,
                });
            }}
        />
    );
}

export default EmailScript;
