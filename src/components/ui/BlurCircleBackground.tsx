import { cn } from "@/lib/utils";

type BlurCircleBackgroundProps = {
    className?: string;
    sizePercent?: number;
    xPercent?: number;
    yPercent?: number;
    visibility?: number;
    sizeClassName?: string;
    blurClassName?: string;
};

export function BlurCircleBackground({
    className,
    sizePercent = 42,
    xPercent = 50,
    yPercent = 50,
    visibility = 0.3,
    sizeClassName = "h-[360px] w-[360px] md:h-[520px] md:w-[520px]",
    blurClassName = "blur-3xl",
}: BlurCircleBackgroundProps) {
    const clampedVisibility = Math.min(Math.max(visibility, 0), 1);

    return (
        <div
            aria-hidden="true"
            style={{
                width: `${sizePercent}%`,
                height: `${sizePercent}%`,
                left: `${xPercent}%`,
                top: `${yPercent}%`,
                opacity: clampedVisibility,
            }}
            className={cn(
                "pointer-events-none absolute -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-primary to-secondary",
                sizeClassName,
                blurClassName,
                className,
            )}
        />
    );
}
