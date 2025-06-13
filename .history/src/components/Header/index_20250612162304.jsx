import { useState, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { debounce } from 'lodash'; // *** CORREÇÃO AQUI: Adicione as chaves {} ***

import logo from '/manga-logo.png';
import bag from '/bag-icon.png';
import SearchBar from '../SearchBar';
import AccountLink from "../AccountLink";

// Importe o ícone de hambúrguer (ex: de uma biblioteca de ícones ou SVG customizado)
// import { Bars3Icon } from '@heroicons/react/24/outline'; // Exemplo de Heroicons

const Header = () => {
    const [value, setValue] = useState('');
    const [search, setSearch] = useState('');
    // Estado para controlar a visibilidade do menu em telas pequenas
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Corrigido o nome da variável de 'deboucedSave' para 'debouncedSave' (com b)
    const debouncedSave = useMemo(() => debounce(setSearch, 1000), [setSearch]);

    const handleChange = event => {
        const { value: nextValue } = event.target;
        setValue(nextValue);
        debouncedSave(nextValue); // Chamada corrigida
    };

    return (
        <header className="
            flex px-4 py-3 sm:px-6 md:px-8 lg:px-12                      /* Padding responsivo */
            items-center justify-between
            glassmorphism-border bg-black bg-opacity-90               /* Opacity no bg-opacity-90 */
        ">
            {/* Logo e Navegação Principal */}
            <div className='flex items-center gap-4 md:gap-8 lg:gap-12'>
                <img
                    src={logo}
                    alt="Logo do Nerdoom"
                    className='w-12 sm:w-16 md:w-20' /* *** CORREÇÃO: Largura responsiva para o logo *** */
                />

                {/* Botão do Hambúrguer para telas pequenas */}
                <button
                    className="md:hidden text-[var(--text-color)] text-3xl focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰ {/* Ícone de hambúrguer simples, você pode substituir por um SVG */}
                </button>

                {/* Navegação - Esconde em mobile, mostra em md e acima */}
                <nav className={`
                    absolute md:relative                        /* Posicionamento para mobile/desktop */
                    top-full left-0 right-0 md:top-auto        /* Alinhamento em mobile */
                    bg-black bg-opacity-95 md:bg-transparent   /* Fundo em mobile */
                    flex flex-col md:flex-row                    /* Coluna em mobile, linha em desktop */
                    gap-4 md:gap-8 lg:gap-[30px]                  /* Espaçamento entre links */
                    p-4 md:p-0                                   /* Padding em mobile */
                    w-full md:w-auto                             /* Largura em mobile */
                    transition-all duration-300 ease-in-out     /* Transição para abertura/fechamento */
                    ${isMenuOpen ? 'block' : 'hidden md:flex'}   /* *** VISIBILIDADE DO MENU *** */
                `}>
                    <NavLink
                        className="
                            [&.active]:font-bold [&.active]:text-[var(--primary-color)] /* *** CORREÇÃO: Sintaxe da variável CSS *** */
                            hover:drop-shadow-[0_0_20px_var(--primary-color)]
                            duration-150 text-[var(--text-color)] text-lg md:text-xl lg:text-2xl /* Tamanho de texto responsivo */
                        "
                        to="/"
                        onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar em um link
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className="
                            [&.active]:font-bold [&.active]:text-[var(--primary-color)]
                            hover:drop-shadow-[0_0_20px_var(--primary-color)]
                            duration-150 text-[var(--text-color)] text-lg md:text-xl lg:text-2xl
                        "
                        to="/about"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sobre
                    </NavLink>
                    <NavLink
                        className="
                            [&.active]:font-bold [&.active]:text-[var(--primary-color)]
                            hover:drop-shadow-[0_0_20px_var(--primary-color)]
                            duration-150 text-[var(--text-color)] text-lg md:text-xl lg:text-2xl
                        "
                        to="/mangas"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Mangás
                    </NavLink>
                    <NavLink
                        className="
                            [&.active]:font-bold [&.active]:text-[var(--primary-color)]
                            hover:drop-shadow-[0_0_20px_var(--primary-color)]
                            duration-150 text-[var(--text-color)] text-lg md:text-xl lg:text-2xl
                        "
                        to="/contacts"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contatos
                    </NavLink>
                </nav>
            </div>

            {/* Itens do lado direito (SearchBar, AccountLink, Sacola) */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                <div className="hidden sm:block"> {/* Esconde a SearchBar em mobile extra pequeno, mostra em sm e acima */}
                    <SearchBar
                        placeholder="O que você procura"
                        onChange={handleChange}
                        value={value}
                    />
                </div>

                <AccountLink />

                <Link to="/cart"> {/* Use Link ou NavLink para navegação do ícone da sacola */}
                    <img
                        src={bag}
                        alt="Sacola de compras"
                        className='w-6 md:w-7 rounded-full' /* Largura responsiva para a sacola */
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;