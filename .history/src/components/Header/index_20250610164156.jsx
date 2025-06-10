import { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import debounce from 'lodash.debounce';

import logo from '/manga-logo.png';

const Header = () => {

    const [value,setValue] = useState('');
    const [search, setSearch] = useState('');

    const deboucedSave = useMemo(() => debounce (setSearch, 1000),[])

    return (
        <>
        </>
    );
}

export default Header;