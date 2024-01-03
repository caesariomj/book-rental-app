import { Button, FormInput } from "../components/Common/index";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { FaArrowLeftLong as Back } from "react-icons/fa6";

export const Register = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="max-w-2xl mx-auto text-center py-6 px-8 text-dark">
        <Link
          to="/"
          className="absolute top-0 left-0 mx-12 my-6 inline-flex items-center gap-x-4 font-semibold animate-hover hover:text-primary-800"
        >
          <Back />
          Back to homepage
        </Link>
        <Link
          to="/"
          className="inline-flex h-16 mb-4 items-center font-black text-xl lg:text-2xl"
        >
          <img src={Logo} width={40} alt="Book Rent Logo" className="mr-4" />
          BOOKRENT
          <span className="text-primary-800 mb-2 text-3xl lg:text-4xl lg:mb-2.5">
            .
          </span>
        </Link>
        <h1 className="mb-8 text-5xl font-extrabold tracking-tight leading-none text-dark underline-highlight lg:text-6xl">
          Create Account
        </h1>
        <form action="#" className="flex flex-col mb-8">
          <div className="flex flex-col mb-4">
            <FormInput type="email" label="email" name="email" placeholder="johndoe@email.com" />
          </div>
          <div className="flex flex-col mb-2">
            <FormInput type="password" label="password" name="password" placeholder="********" />
          </div>
          <div className="flex flex-col mb-8">
            <FormInput type="password" label="re-type password" name="retypePassword" placeholder="********" />
          </div>
          <Button type="submit" variant="primary">
            Register
          </Button>
        </form>
        <span>
          Already have an account?
          <Link
            to="/login"
            className="font-semibold underline animate-hover hover:text-primary-800"
          >
            Login
          </Link>
        </span>
      </section>
    </main>
  );
};
