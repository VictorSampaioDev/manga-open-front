import { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import  debounce  from 'lodash';

import logo from '/manga-logo.png';
import b
import SearchBar from '../SearchBar';

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

         <header className="flex px-12 py-5 items-center justify-between bg-(--background-color)">
            <div className='flex gap-12 items-center'>
                <img
                    src={logo}
                    alt="Logo do Nerdoom"
                    className='w-20 rounded-full'
                />
                <div className="flex gap-8 text-2xl">
                    <NavLink className="[&.active]:font-bold [&.active]:text-(--primary-color) hover:drop-shadow-[0_0_20px_var(--primary-color)] duration-150 text-(--text-color) text-2xl" to="/">
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
                placeholder="Digite o que você procura"
                onChange={handleChange}
                value={value}
            />
            </header>
    );
}

export default Header;