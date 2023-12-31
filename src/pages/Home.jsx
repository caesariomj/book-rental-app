import { MainLayout } from "../layouts/MainLayout"
import Hero from "../assets/images/hero.webp"

export const Home = () => {
    return (
        <MainLayout>
            <section className="flex items-center lg:gap-8">
                <div className="flex-1 text-center lg:text-start">
                    <div className="max-w-full lg:max-w-lg lg:py-0">
                        <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-none text-dark lg:text-6xl">
                            Your Gateway to
                            <br />
                            <span className="underline-highlight">Endless Reading</span>
                            <br />Adventures
                        </h1>
                        <p className="mb-12 font-regular text-dark/80 md:text-lg lg:text-xl">
                            Dive into an unparalleled reading experience with our revolutionary Book Rental App. Explore a diverse library instantly and embark on your literary adventure today!
                        </p>
                        <form action="#" method="post" className="flex justify-between lg:justify-start">
                            <input
                                className="w-full lg:w-80 px-5 py-3 mr-3 text-base text-dark font-medium rounded-lg border border-dark/30 hover:border-dark hover-animation"
                                type="text"
                                name=""
                                id=""
                                placeholder="Bookname"
                            />
                            <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-800 hover:bg-primary-900 focus:ring-4 focus:ring-primary-300 hover-animation">
                                Search
                                <svg
                                    className="w-5 h-5 ml-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="hidden lg:block flex-1">
                    <img
                        src={Hero}
                        alt="mockup"
                        className="object-cover w-full h-full"
                    />
                </div>
            </section>
        </MainLayout>
    )
}