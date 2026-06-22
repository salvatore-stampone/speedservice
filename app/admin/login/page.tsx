"use client";

import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error("Credenziali non valide");
            }

            router.push("/admin/vehicles");
            router.refresh();
        } catch {
            setError("Username o password non corretti");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-muted/30 flex min-h-screen items-center justify-center px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-card border-border w-full max-w-md space-y-4 rounded-xl border p-6 shadow-sm"
            >
                <div>
                    <h1 className="text-2xl font-bold">Area admin veicoli</h1>
                    <p className="text-muted-foreground text-sm">
                        Accedi per gestire annunci e immagini.
                    </p>
                </div>

                <label className="block space-y-2">
                    <span className="text-sm font-medium">Username</span>
                    <input
                        required
                        className="border-input bg-background w-full rounded-md border px-3 py-2"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>

                <label className="block space-y-2">
                    <span className="text-sm font-medium">Password</span>
                    <div className="relative">
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            className="border-input bg-background w-full rounded-md border py-2 pr-10 pl-3"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((current) => !current)}
                            className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
                            aria-label={
                                showPassword
                                    ? "Nascondi password"
                                    : "Mostra password"
                            }
                        >
                            {showPassword ? (
                                <EyeOff className="size-4" />
                            ) : (
                                <Eye className="size-4" />
                            )}
                        </button>
                    </div>
                </label>

                {error && <p className="text-destructive text-sm">{error}</p>}

                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Accesso..." : "Accedi"}
                </Button>
            </form>
        </div>
    );
}
