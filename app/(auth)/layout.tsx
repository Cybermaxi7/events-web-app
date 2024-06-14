export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex-center min-h-screen bg-primary-50 bg-cover bg-fixed bg-center bg-dotted-pattern ">
            {children}
        </div>
    );
}
