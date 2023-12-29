import {
    LuSearch as Search,
    LuShoppingBag as Cart,
    LuChevronDown as ChevronDown,
} from "react-icons/lu";
import { NavbarDropdown } from "../Common/NavbarDropdown";

export const Header = () => {
    return (
        <header className="px-12">
            <nav className="flex justify-between items-center text-base text-dark font-medium">
                <a href="#" className="inline-flex h-16 items-center">
                    Logo
                </a>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#" className="inline-flex h-16 px-4 items-center">
                            Home
                        </a>
                    </li>
                    <li className="group">
                        <button className="inline-flex h-16 px-4 items-center">
                            Books
                            <span className="mt-0.5 ms-1">
                                <ChevronDown size={16} />
                            </span>
                        </button>
                        <NavbarDropdown group={"books"} />
                    </li>
                    <li className="group">
                        <button className="inline-flex h-16 px-4 items-center">
                            Categories
                            <span className="mt-0.5 ms-1">
                                <ChevronDown size={16} />
                            </span>
                        </button>
                        <NavbarDropdown group={"categories"} />
                    </li>
                    <li>
                        <a href="#" className="inline-flex h-16 px-4 items-center">
                            <Search size={22} />
                        </a>
                    </li>
                    {/* <li>
                            <a href="#" className="inline-flex h-16 px-4 items-center"><Cart size={22} /></a>
                        </li> */}
                    <li>
                        <a href="#" className="inline-flex h-16 px-4 items-center">
                            Login Link
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
