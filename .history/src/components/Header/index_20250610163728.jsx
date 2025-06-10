import { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import debouce from 'lodash.debouce';

import logo from '/manga-logo.png';

const Header = () => {

    const [value,setValue] = useState('');
    const [search, setSearch] = useState('');

    return (
        <>
        </>
    );
}

export default Header;