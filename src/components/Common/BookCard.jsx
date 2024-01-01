import { Link } from "react-router-dom";
import { FaStar as Star, FaStarHalfStroke as HalfStar, FaHeart as Heart, FaCheck as Available, FaXmark as NotAvailable } from "react-icons/fa6";

export const BookCard = ({ slug, coverUrl, title, author, availability, rating  }) => {

    const redirectToAuthor = (authorName) => {
        window.location.href = `author/${authorName}`;
    }

    return (
        <Link to={`book/${slug}`} className="flex flex-col items-start text-dark text-base group">
            <div className="relative mb-3">
                <img
                    src={coverUrl}
                    alt={`${title} Book Cover`}
                    className="w-auto h-[32rem] object-cover rounded-lg group-hover:brightness-90 animate-hover"
                />
                <div className="absolute top-0 left-0 m-2.5 py-1.5 px-3 z-10 bg-white rounded-md text-sm font-semibold">Popular</div>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 animate-hover absolute top-0 right-0 m-2.5 p-1.5 z-10 bg-white rounded-full hover:text-red-600 animate-hover">
                    <Heart size={20} />
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                        <h3 className="font-bold group-hover:text-primary-800 animate-hover">{title}</h3>
                        <Link
                            to={`author/${author}`} 
                            className="mb-1 text-dark/80 cursor-pointer hover:text-dark hover:underline"
                        >
                            {author}
                        </Link>
                        {availability ? (
                            <span className="inline-flex items-center gap-2 text-green-600 text-base font-semibold">
                                <Available size={16} />
                                Available for rent
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-2 text-red-600 text-base font-semibold">
                                <NotAvailable size={16} />
                                Not available for rent
                            </span>
                        )}
                        
                    </div>
                    <div className="flex items-center">
                        {rating >= 5 ? (
                            <Star size={16}/>
                        ) : (
                            <HalfStar size={16} />
                        )}
                        <span className="ml-1">{rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}