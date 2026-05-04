import "@/app/globals.css";
import { Inter, JetBrains_Mono, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });


// import { Navbar } from "@/components/layout/Navbar";


const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" className={cn("dark", "font-sans", geist.variable)}>
            <body
                className={cn(
                    inter.variable,
                    jetbrainsMono.variable,
                    "min-h-dvh bg-background font-sans text-foreground antialiased",
                )}
            >
                {/* <Navbar /> */}
                <main>{children}</main>
            </body>
        </html>
    );
}