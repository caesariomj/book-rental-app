import { BookCard } from "./BookCard";

export const BookList = () => {
    return (
        <div className="flex flex-wrap items-center justify-between w-full">
            <BookCard 
                slug="the-book-of-art"
                coverUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198"
                title="The Book Of Art"
                author="Regina Phalange"
                availability={true}
                rating={5.00}
            />
            <BookCard 
                slug="the-book-of-art"
                coverUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198"
                title="The Book Of Art Part 2"
                author="Regina Phalange"
                availability={false}
                rating={4.50}
            />
            <BookCard 
                slug="the-book-of-art"
                coverUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198"
                title="The Book Of Art Part 3"
                author="Regina Phalange"
                availability={false}
                rating={4.75}
            />
            <BookCard 
                slug="the-book-of-art"
                coverUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198"
                title="The Book Of Art Part 4"
                author="Regina Phalange"
                availability={true}
                rating={5.00}
            />
        </div>
    );
}