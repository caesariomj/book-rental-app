import { Header, Footer } from "../components/UI"

export const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="container mx-auto mt-12 px-4 lg:px-12 lg:mt-4">
                {children}
            </main>
            <Footer />
        </>
    )
}