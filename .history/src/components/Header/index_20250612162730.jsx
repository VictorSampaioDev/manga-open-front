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
      flex px-4 py-3 sm:px-6 md:px-8 lg:px-12 
      items-center justify-between 
      max-w-screen-xl mx-auto glassmorphism-border bg-black bg-opacity-90
      relative z-50
    ">
      <div className="flex items-center gap-4 md:gap-8 lg:gap-12">
        <img
          src={logo}
          alt="Logo do Nerdoom"
          className="w-12 sm:w-16 md:w-20"
        />

        <button
          className="md:hidden text-[var(--text-color)] text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <nav className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          md:flex 
          absolute md:relative z-40
          top-full left-0 right-0 md:top-auto
          bg-black bg-opacity-95 md:bg-transparent
          flex-col md:flex-row 
          gap-4 md:gap-8 lg:gap-[30px]
          p-4 md:p-0 
          w-full md:w-auto 
          transition-all duration-300 ease-in-out
          overflow-hidden
        `}>
          {['/', '/about', '/mangas', '/contacts'].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className="
                [&.active]:font-bold [&.active]:text-[var(--primary-color)] 
                hover:drop-shadow-[0_0_20px_var(--primary-color)]
                duration-150 text-[var(--text-color)] text-lg md:text-xl lg:text-2xl
              "
            >
              {['Home', 'Sobre', 'Mangás', 'Contatos'][i]}
            </NavLink>
          ))}

          <div className="block sm:hidden mt-4">
            <SearchBar
              placeholder="O que você procura"
              onChange={handleChange}
              value={value}
            />
          </div>
        </nav>
      </div>

      <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
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
            className="w-6 md:w-7 rounded-full"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
