"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import shippingLogo from "public/images/landing/speed-spedizioni.png";
import vehiclesLogo from "public/images/landing/speed-usato-garantito.png";
import {
    type MouseEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

type Side = {
    href: string;
    ariaLabel: string;
    logo: StaticImageData;
    logoAlt: string;
};

const sides: Side[] = [
    {
        href: "/shipping",
        ariaLabel: "Entra nella sezione Spedizioni",
        logo: shippingLogo,
        logoAlt: "Speedservice spedizioni",
    },
    {
        href: "/vehicles",
        ariaLabel: "Entra nella sezione Usato garantito",
        logo: vehiclesLogo,
        logoAlt: "Speedservice usato garantito",
    },
];

const BLUE = { r: 37, g: 99, b: 235, a: 0.38 };
const RED = { r: 220, g: 38, b: 38, a: 0.36 };

function mixChannel(c0: number, c1: number, t: number) {
    return c0 + (c1 - c0) * t;
}

function mixColor(t: number) {
    const r = Math.round(mixChannel(BLUE.r, RED.r, t));
    const g = Math.round(mixChannel(BLUE.g, RED.g, t));
    const b = Math.round(mixChannel(BLUE.b, RED.b, t));
    const a = mixChannel(BLUE.a, RED.a, t);
    return `rgba(${r},${g},${b},${a})`;
}

/** 0 = tutto blu, 1 = tutto rosso, con fascia morbida al centro */
function splitBlend(normalizedAcrossSplit: number) {
    const edge = 0.08;
    const lo = 0.5 - edge;
    const hi = 0.5 + edge;
    if (normalizedAcrossSplit <= lo) return 0;
    if (normalizedAcrossSplit >= hi) return 1;
    return (normalizedAcrossSplit - lo) / (2 * edge);
}

function Panel({
    entry,
    flexGrow,
    equalSplit,
    priority,
    animateExpansion,
    useFlexSizing,
}: Readonly<{
    entry: Side;
    flexGrow: number;
    equalSplit: boolean;
    priority?: boolean;
    animateExpansion: boolean;
    /** false su mobile: il parent grid imposta altezze uguali */
    useFlexSizing: boolean;
}>) {
    return (
        <Link
            href={entry.href}
            aria-label={entry.ariaLabel}
            style={
                useFlexSizing
                    ? {
                        flexGrow,
                        flexShrink: 1,
                        flexBasis: equalSplit ? "50%" : "0%",
                        minWidth: 0,
                        minHeight: 0,
                    }
                    : undefined
            }
            className={`relative z-1 flex h-full min-h-0 max-md:overflow-hidden cursor-pointer flex-col px-6 py-10 outline-offset-4 focus-visible:outline-2 focus-visible:outline-neutral-950/35 md:py-10${animateExpansion ? " transition-[flex-grow,flex-basis] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none" : ""}`}
        >
            <div className="flex min-h-0 w-full flex-1 items-center justify-center [&_img]:mx-auto [&_span]:mx-auto">
                <Image
                    src={entry.logo}
                    alt={entry.logoAlt}
                    priority={priority}
                    sizes="(min-width: 768px) 38vw, 80vw"
                    className="!relative block h-auto max-h-[26dvh] w-auto max-w-[min(320px,88vw)] object-contain drop-shadow-[0_2px_24px_rgba(15,23,42,0.06)] md:max-h-none md:w-[min(420px,36vw)]"
                />
            </div>
        </Link>
    );
}

export default function SplitLanding() {
    const rootRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    const target = useRef({ x: 50, y: 50 });
    const current = useRef({ x: 50, y: 50 });
    const targetTint = useRef(0);
    const currentTint = useRef(0);

    const rafId = useRef<number | null>(null);
    const hovering = useRef(false);
    const reduceMotion = useRef(false);
    const mdUpRef = useRef(false);

    const [desktopEffects, setDesktopEffects] = useState(false);
    const [glowActive, setGlowActive] = useState(false);
    /** null = 50/50; altrimenti il lato in hover occupa 5/8 e l'altro 3/8 */
    const [hoveredSide, setHoveredSide] = useState<0 | 1 | null>(null);

    const resetDesktopState = useCallback(() => {
        hovering.current = false;
        setGlowActive(false);
        setHoveredSide(null);
        target.current = { x: 50, y: 50 };
        current.current = { x: 50, y: 50 };
        targetTint.current = 0;
        currentTint.current = 0;
    }, []);

    const stopLoop = useCallback(() => {
        if (rafId.current != null) {
            cancelAnimationFrame(rafId.current);
            rafId.current = null;
        }
    }, []);

    useEffect(() => {
        const mqMotion = globalThis.matchMedia("(prefers-reduced-motion: reduce)");
        reduceMotion.current = mqMotion.matches;
        const onMotionChange = () => {
            reduceMotion.current = mqMotion.matches;
        };
        mqMotion.addEventListener("change", onMotionChange);

        const mqMd = globalThis.matchMedia("(min-width: 768px)");
        const onViewportChange = () => {
            const mdUp = mqMd.matches;
            mdUpRef.current = mdUp;
            setDesktopEffects(mdUp);
            if (!mdUp) {
                stopLoop();
                resetDesktopState();
            }
        };
        onViewportChange();
        mqMd.addEventListener("change", onViewportChange);

        return () => {
            mqMotion.removeEventListener("change", onMotionChange);
            mqMd.removeEventListener("change", onViewportChange);
        };
    }, [resetDesktopState, stopLoop]);

    const startLoop = useCallback(() => {
        if (rafId.current != null) return;

        function loop() {
            const glow = glowRef.current;
            if (!glow) return;

            const lerp = reduceMotion.current ? 1 : 0.1;
            const tintLerp = reduceMotion.current ? 1 : 0.14;

            current.current.x += (target.current.x - current.current.x) * lerp;
            current.current.y += (target.current.y - current.current.y) * lerp;
            currentTint.current +=
                (targetTint.current - currentTint.current) * tintLerp;

            const { x, y } = current.current;
            const color = mixColor(currentTint.current);
            glow.style.background = `radial-gradient(circle clamp(240px, 36vmin, 520px) at ${x}% ${y}%, ${color} 0%, rgba(255,255,255,0) 58%)`;

            const dx = Math.abs(target.current.x - current.current.x);
            const dy = Math.abs(target.current.y - current.current.y);
            const dt = Math.abs(targetTint.current - currentTint.current);
            const moving =
                hovering.current && (dx > 0.04 || dy > 0.04 || dt > 0.004);

            if (moving) {
                rafId.current = requestAnimationFrame(loop);
            } else {
                rafId.current = null;
            }
        }

        rafId.current = requestAnimationFrame(loop);
    }, []);

    useEffect(() => () => stopLoop(), [stopLoop]);

    const updatePointers = useCallback((clientX: number, clientY: number) => {
        if (!mdUpRef.current) return;
        const el = rootRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const w = Math.max(r.width, 1);
        const h = Math.max(r.height, 1);

        target.current = {
            x: ((clientX - r.left) / w) * 100,
            y: ((clientY - r.top) / h) * 100,
        };

        const nx = (clientX - r.left) / w;
        targetTint.current = splitBlend(nx);
        setHoveredSide(nx < 0.5 ? 0 : 1);

        startLoop();
    }, [startLoop]);

    const equalSplit = !desktopEffects || hoveredSide === null;

    const panelFlex = (side: 0 | 1) =>
        equalSplit ? 1 : hoveredSide === side ? 5 : 3;

    return (
        <div
            ref={rootRef}
            className="relative isolate min-h-dvh bg-[#ececee]"
            style={{
                fontFamily:
                    "var(--font-lexend), ui-sans-serif, system-ui, sans-serif",
            }}
            {...(desktopEffects
                ? {
                    onMouseMove: (e: MouseEvent) =>
                        updatePointers(e.clientX, e.clientY),
                    onMouseEnter: (e: MouseEvent) => {
                        hovering.current = true;
                        setGlowActive(true);
                        updatePointers(e.clientX, e.clientY);
                    },
                    onMouseLeave: () => {
                        stopLoop();
                        resetDesktopState();
                    },
                }
                : {})}
        >
            {desktopEffects && (
                <div
                    ref={glowRef}
                    className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-out ${glowActive ? "opacity-100" : "opacity-0"}`}
                    style={{
                        background:
                            "radial-gradient(circle clamp(240px, 36vmin, 520px) at 50% 50%, transparent 0%, transparent 58%)",
                    }}
                    aria-hidden
                />
            )}

            <div className="relative z-1 max-md:grid max-md:h-dvh max-md:grid-rows-[1fr_1px_1fr] md:flex md:h-dvh md:flex-row md:items-stretch">
                <Panel
                    entry={sides[0]}
                    priority
                    equalSplit={equalSplit}
                    useFlexSizing={desktopEffects}
                    animateExpansion={desktopEffects}
                    flexGrow={panelFlex(0)}
                />

                <div
                    className="pointer-events-none z-10 bg-neutral-900/8 max-md:h-px max-md:w-full md:h-auto md:w-px md:shrink-0 md:self-stretch md:bg-neutral-900/10"
                    aria-hidden
                />

                <Panel
                    entry={sides[1]}
                    equalSplit={equalSplit}
                    useFlexSizing={desktopEffects}
                    animateExpansion={desktopEffects}
                    flexGrow={panelFlex(1)}
                />
            </div>

            <span
                className="pointer-events-none bg-[#ececee] absolute md:bg-transparent md:bottom-5 md:left-0 md:right-0 left-[50%] -translate-x-1/2 md:translate-x-0 md:translate-y-0 bottom-[50%] translate-y-1/2 z-20 text-center text-[13px] font-medium tracking-[0.12em] w-fit mx-auto"
                aria-hidden
            >
                <span className="text-[#0f447d]">Lucera </span>
                <span className="text-red-600">s.r.l.s.</span>
            </span>
        </div>
    );
}
