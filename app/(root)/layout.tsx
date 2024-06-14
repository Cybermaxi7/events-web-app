import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className="flex h-screen flex-col"
            // style={{
            //     background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/hero-image.jpeg')`,
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            // }}
        >
            <Header />
            <main className=" ">{children}</main>
            <Footer />
        </div>
    );
}
