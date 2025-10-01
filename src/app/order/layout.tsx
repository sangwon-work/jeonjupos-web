import {Geist, Geist_Mono} from "next/font/google";
import Header from "@/components/layout/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header/>
            <main className="h-[100dvh] overflow-hidden">
                {children}
            </main>
        </div>
    );
}