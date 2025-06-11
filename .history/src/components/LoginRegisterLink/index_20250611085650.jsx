import { Link } from "react-router-dom"

const LoginRegisterLink = () => {
    return ( 
        <Link to="/account">
        <button className="px-4 py-2 font-semibold rounded-b-md cursor-pointer active:scale-95 duration-150">
            Login|Cadastro
        </button>
        </Link>
     );
}
 
export default LoginRegisterLink;