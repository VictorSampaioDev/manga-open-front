import { Link } from "react-router-dom"

const AccountLink = () => {
    return ( 
        <div>
        <Link to="/account">
        <button className="text-white px-4 py-2 font-semibold rounded-b-md cursor-pointer active:scale-95 duration-150">
            Login|Cadastro
        </button>
        </Link>
        </div>
     );
}
 
export default AccountLink;