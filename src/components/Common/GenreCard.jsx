import { Link } from "react-router-dom";
import { FaBook, FaBookOpen, FaBusinessTime, FaCompass, FaFlask, FaGhost, FaGlobe, FaHeart, FaMagnifyingGlass, FaRocket, FaWandMagic } from "react-icons/fa6";

export const GenreCard = ({ genre }) => {
    const { name } = genre;

    let icon = "";

    if (name === "Fiction") {
        icon = <FaBook size={24} />;
    } else if (name === "Mystery") {
        icon = <FaMagnifyingGlass size={24} />
    } else if (name === "Science Fiction") {
        icon = <FaRocket size={24} />
    } else if (name === "Fantasy") {
        icon = <FaWandMagic size={24} />
    } else if (name === "Romance") {
        icon = <FaHeart size={24} />
    } else if (name === "Horror") {
        icon = <FaGhost size={24} />
    } else if (name === "Adventure") {
        icon = <FaCompass size={24} />
    } else if (name === "Historical Fiction") {
        icon = <FaBook size={24} />
    } else if (name === "Non-fiction") {
        icon = <FaBookOpen size={24} />
    } else if (name === "Business") {
        icon = <FaBusinessTime size={24} />
    } else if (name === "Science") {
        icon = <FaFlask size={24} />
    } else if (name === "Travel") {
        icon = <FaGlobe size={24} />
    } else {
        icon = <FaBook size={24} />;
    }

    return (
        <Link to={`genres/${name}`} className="flex flex-col flex-nowrap text-pretty items-center justify-start px-10 pt-7 text-dark text-center space-y-2 h-28 w-28 bg-light-50 border rounded-lg animate-hover shadow hover:shadow-lg">
            {icon}
            <span className="text-sm font-semibold">{name}</span>
        </Link>
    );
}