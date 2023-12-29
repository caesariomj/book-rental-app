import { Header, Footer } from "../components/UI"

export const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-alabaster-50">
            <Header />
            <main className="container mx-auto mt-4 p-12">
                {children}
            </main>
            <Footer />
        </div>
    )
}