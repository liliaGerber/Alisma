import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

// Easing used across the system
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1] as const;

// ---- Types ------------------------------------------------------------------
type Direction = "left" | "right" | "up" | "down";

/** Hands-free presets with opinionated timings/distances */
export type InViewPreset =
// Common “fly up” stack: image (shallow), title (medium), body (deep)
    | "flyUpImage"   // from below, shorter distance, quick
    | "flyUpTitle"   // from below, medium distance
    | "flyUpBody"    // from below, deepest distance, a touch slower

    // Horizontal entrances
    | "flyLeft"      // from left, medium punch
    | "flyRight"     // from right, medium punch

    // Subtler intros
    | "fadeIn"       // no movement, just fade
    | "fadeUp"       // small lift from below
    | "fadeDown";    // small drop from above

interface InViewSectionProps {
    children: React.ReactNode;
    className?: string;

    /** Pick a ready-made animation */
    preset?: InViewPreset;

    /** Optional fine-tuning overrides */
    delay?: number;      // seconds, added on top of preset delay
    duration?: number;   // seconds, overrides preset duration
    distance?: number;   // px, overrides preset distance

    /** Stagger helpers (adds order*stagger to delay) */
    order?: number;      // 0,1,2...
    stagger?: number;    // seconds per order step

    /** Viewport behavior */
    once?: boolean;
    amount?: number;     // 0..1
}

// ---- Helpers ----------------------------------------------------------------
function delta(dir: Direction, d: number) {
    switch (dir) {
        case "left":  return { x: -d, y: 0 };
        case "right": return { x:  d, y: 0 };
        case "up":    return { x:  0, y: -d }; // starts above
        case "down":
        default:      return { x:  0, y:  d }; // starts below (for “fly up”)
    }
}

function makeVariants(
    dir: Direction,
    { distance, duration, delay }: { distance: number; duration: number; delay: number }
): Variants {
    return {
        hidden: { opacity: 0, ...delta(dir, distance) },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration, delay, ease: EASE },
        },
    };
}

/** Our opinionated preset table */
function resolvePreset(preset: InViewPreset) {
    switch (preset) {
        // “Fly up” stack: progressively deeper & slightly slower
        case "flyUpImage": return { dir: "down" as Direction, distance: 50,  duration: 0.60, delay: 0.00 };
        case "flyUpTitle": return { dir: "down" as Direction, distance: 90,  duration: 0.75, delay: 0.12 };
        case "flyUpBody":  return { dir: "down" as Direction, distance: 130, duration: 0.90, delay: 0.24 };

        // L/R entrances
        case "flyLeft":    return { dir: "left"  as Direction, distance: 80,  duration: 0.70, delay: 0.00 };
        case "flyRight":   return { dir: "right" as Direction, distance: 80,  duration: 0.70, delay: 0.00 };

        // Subtle fades
        case "fadeUp":     return { dir: "down"  as Direction, distance: 24,  duration: 0.80, delay: 0.00 };
        case "fadeDown":   return { dir: "up"    as Direction, distance: 24,  duration: 0.80, delay: 0.00 };
        case "fadeIn":
        default:           return { dir: "down"  as Direction, distance: 0,   duration: 0.50, delay: 0.00 };
    }
}

// ---- Component --------------------------------------------------------------
export default function InViewSection({
                                          children,
                                          className = "",
                                          preset = "fadeUp",
                                          delay,
                                          duration,
                                          distance,
                                          order = 0,
                                          stagger = 0.18,
                                          once = true,
                                          amount = 0.1,
                                      }: InViewSectionProps) {
    const reduced = useReducedMotion();

    const base = resolvePreset(preset);

    const effectiveDistance = Math.max(0, distance ?? base.distance);
    const effectiveDuration = reduced ? 0.01 : (duration ?? base.duration);
    const effectiveDelay =
        (reduced ? 0 : (delay ?? 0) + base.delay + order * (stagger ?? 0));

    const variants = makeVariants(base.dir, {
        distance: effectiveDistance,
        duration: effectiveDuration,
        delay: effectiveDelay,
    });

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-10% 0px -10% 0px", amount }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
