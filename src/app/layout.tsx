'use client'

import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from 'react';
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

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

    useEffect(() => {
        const audio = new Audio('/sounds/mouse-click-153941.mp3');
        audio.volume = 0.5;

        const handleClick = (e: MouseEvent) => {
            let el = e.target as HTMLElement | null;

            // 🔍 부모를 계속 탐색해서 BUTTON을 찾음
            while (el) {
                if (el.tagName === 'BUTTON' || el.getAttribute('data-sound')) {
                    audio.currentTime = 0;
                    audio.play().catch(() => {});
                    break;
                }
                el = el.parentElement;
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
        <html lang="ko">
        <head>
            <link rel="manifest" href="/manifest.json" />
            <title>전주 손칼국수 POS</title>
        </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased select-none`}>
                <main className="h-[100dvh] overflow-hidden bg-gray-300">
                    {children}
                </main>
            </body>
        </html>
  );
}
