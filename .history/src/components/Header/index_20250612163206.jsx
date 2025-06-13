import { useState, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { debounce } from "lodash";

import logo from "/manga-logo.png";
import bag from "/bag-icon.png";
import SearchBar from "../SearchBar";
import AccountLink from "../AccountLink";

const Header = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const debouncedSave = useMemo(() => debounce(setSearch, 1000), [setSearch]);

  const handleChange = (event) => {
    const { value: nextValue } = event.target;
    setValue(nextValue);
    debouncedSave(nextValue);
  };

  return (
    <header className="
      w-full px-4 py-4 sm:px-6 md:px-10 lg:px-16 
      bg-black bg-opacity-90 text-white
      flex items-center justify-between 
      max-w-screen-xl mx-auto relative z-50
    ">
      <div className="flex items-center gap-6 md:gap-10 lg:gap-14">
        <img
          src={logo}
          alt="Logo do Nerdoom"
          className="w-12 sm:w-16 md:w-20 lg:w-24"
        />

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <NavLink
            to="/"
            className="
              text-lg lg:text-xl [&.active]:font-bold [&.active]:text-[var(--primary-color)]
              hover:drop-shadow-[0_0_20px_var(--primary-color)]
              text-[var(--text-color)] transition duration-150
            "
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="
              text-lg lg:text-xl [&.active]:font-bold [&.active]:text-[var(--primary-color)]
              hover:drop-shadow-[0_0_20px_var(--primary-color)]
              text-[var(--text-color)] transition duration-150
            "
          >
            Sobre
          </NavLink>
          <NavLink
            to="/mangas"
            className="
              text-lg lg:text-xl [&.active]:font-bold [&.active]:text-[var(--primary-color)]
              hover:drop-shadow-[0_0_20px_var(--primary-color)]
              text-[var(--text-color)] transition duration-150
            "
          >
            Mangás
          </NavLink>
          <NavLink
            to="/contacts"
            className="
              text-lg lg:text-xl [&.active]:font-bold [&.active]:text-[var(--primary-color)]
              hover:drop-shadow-[0_0_20px_var(--primary-color)]
              text-[var(--text-color)] transition duration-150
            "
          >
            Contatos
          </NavLink>
        </nav>
      </div>

      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <div className="hidden sm:block">
          <SearchBar
            placeholder="O que você procura"
            onChange={handleChange}
            value={value}
          />
        </div>

        <AccountLink />

        <Link to="/cart">
          <img
            src={bag}
            alt="Sacola de compras"
            className="w-6 md:w-7 lg:w-8 rounded-full"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
