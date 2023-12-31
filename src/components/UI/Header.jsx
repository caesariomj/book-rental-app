import {
  LuSearch as Search,
  LuShoppingBag as Cart,
  LuChevronDown as ChevronDown,
  LuUserCircle2 as Profile,
} from "react-icons/lu";
import { CgMenuRightAlt as Menu } from "react-icons/cg";
import { Button, NavbarDropdown } from "../Common/index";
import Logo from "../../assets/images/logo.svg";
import { useSelector } from "react-redux";

export const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const currentPath = window.location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-light-50 py-2 px-4 lg:px-12">
      <nav className="flex justify-between items-center text-base text-dark font-medium tracking-tight leading-none">
        <a
          href="#"
          className="inline-flex h-16 items-center font-black text-xl lg:text-2xl"
        >
          <img src={Logo} width={40} alt="Book Rent Logo" className="mr-4" />
          BOOKRENT
          <span className="text-primary-800 mb-2 text-3xl lg:text-4xl lg:mb-2.5">
            .
          </span>
        </a>
        <ul className="hidden lg:flex items-center space-x-6">
          <li>
            <a
              href="#"
              className={`inline-flex h-16 px-4 items-center ${
                currentPath === "/" ? "text-primary-800" : ""
              }`}
            >
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
            <a href="#" className="inline-flex h-12 w-12 items-center justify-center rounded-full hover:bg-light-100">
              <Search size={24} />
            </a>
          </li>
          {user !== null ? (
            <>
              <li>
                <a href="#" className="inline-flex h-12 w-12 items-center justify-center rounded-full hover:bg-light-100">
                  <Cart size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex h-12 gap-x-2 px-4 items-center rounded-full hover:bg-light-100">
                  <Profile size={24} />
                  {user.username}
                </a>
              </li>
            </>
          ) : (
            <li>
              <Button href="login" variant="bordered">
                Login
              </Button>
            </li>
          )}
        </ul>
        <button className="inline-flex h-16 px-4 items-center lg:hidden">
          <Menu size={30} />
        </button>
      </nav>
    </header>
  );
};
