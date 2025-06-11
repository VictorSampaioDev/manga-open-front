import { useState, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import  debounce  from 'lodash';

import logo from '/manga-logo.png';
import bag from '/bag-icon.png'
import SearchBar from '../SearchBar';
import AccountLink from "../AccountLink";


const Header = () => {

    const [value,setValue] = useState('');
    const [search, setSearch] = useState('');

    const deboucedSave = useMemo(() => debounce (setSearch, 1000),[setSearch]);

    const handleChange = event => {
        const { value: nextValue } = event.target;
        setValue(nextValue);
        debouncedSave(nextValue);
    };

    return (

         <header className="flex px-12 py-5 items-center justify-between glassmorphism-border bg-black opacity-10">
            <div className='flex gap-12 items-center'>
                <img
                    src={logo}
                    alt="Logo do Nerdoom"
                    className='w-50'
                />
                <div className="flex gap-8 text-2xl">
                    <NavLink className="[&.active]:font-bold [&.active]:text-(--button-color) hover:drop-shadow-[0_0_20px_var(--primary-color)] duration-150 text-(--text-color) text-2xl" to="/">
                        Home
                    </NavLink>
                    <NavLink className="[&.active]:font-bold [&.active]:text-(--primary-color) hover:drop-shadow-[0_0_20px_var(--primary-color)] duration-150 text-(--text-color)" to="/about">
                        Sobre
                    </NavLink>
                    <NavLink className="[&.active]:font-bold [&.active]:text-(--primary-color) hover:drop-shadow-[0_0_20px_var(--primary-color)] duration-150 text-(--text-color)" to="/mangas">
                        Mangás
                    </NavLink>
                    <NavLink className="[&.active]:font-bold [&.active]:text-(--primary-color) hover:drop-shadow-[0_0_20px_var(--primary-color)] duration-150 text-(--text-color)" to="/contacts">
                        Contatos
                    </NavLink>
                </div>
            </div>
             <SearchBar
                placeholder="O que você procura"
                onChange={handleChange}
                value={value}
            />

          <AccountLink/>

             <img
                    src={bag}
                    alt="Sacola de compras"
                    className='w-7 rounded-full'
                />
            </header>
    );
}

export default Header;