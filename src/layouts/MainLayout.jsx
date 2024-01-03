import { Header, Footer } from "../components/UI"

export const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="container mx-auto space-y-8 px-4 lg:px-12 my-16 lg:my-0">
                {children}
            </main>
            <Footer />
        </>
    )
}