import Header from "@/components/layout/Header";
import SideNavigation from "@/components/layout/SideNavigation";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header/>
            <main className="h-[100dvh] overflow-hidden">
                <div className='flex'>
                    <div className='flex-8'>
                        {children}
                    </div>
                    <div className='flex-1'>
                        <SideNavigation/>
                    </div>
                </div>
            </main>
        </div>
    );
}