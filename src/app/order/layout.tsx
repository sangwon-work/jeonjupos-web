import Header from "@/components/layout/Header";

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