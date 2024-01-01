import { MainLayout } from "../layouts/MainLayout";
import Hero from "../assets/images/hero.webp";
import { Button, BookList } from "../components/Common/index";

export const Home = () => {
    return (
        <MainLayout>
            <section className="flex items-center mb-14 lg:gap-8 lg:mb-28">
                <div className="flex-1 text-center lg:text-start">
                    <div className="max-w-full lg:max-w-lg lg:py-0">
                        <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-none text-dark lg:text-6xl">
                            Your Gateway to
                            <br />
                            <span className="underline-highlight">Endless Reading</span>
                            <br />
                            Adventures
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
                            <Button type="submit" variant="primary">
                                Search
                                <svg
                                    className="w-5 h-5 ml-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Button>
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
            <section>
                <h2 className="max-w-fit mb-6 text-3xl font-extrabold tracking-tight leading-none text-dark underline-highlight lg:text-4xl">Most Popular</h2>
                <div className="flex items-center justify-between w-full">
                    <BookList />
                </div>
            </section>
        </MainLayout>
    )
}