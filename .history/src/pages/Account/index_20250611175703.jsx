import { NavLink } from "react-router-dom";

const LoginRegister = () => {
    return ( 
        <>
        <div className="animated-gradient h-screen flex justify-center">
            <div className="flex flex-col items-center glassmorphism-border rounded-4xl bg-black opacity-70 ml-[300px] mr-[300px] mt-[100px] mb-[90px] p-30 ">
                <h1 className="text-white font-bold">Entre na sua conta</h1>
                <form>
                    <label>
                    <div>
                        <h3 className="text-white mb-3">Login</h3>
                        <input className="text-white border bg-(--secondary-color) rounded-md w-100 h-10" name="login" type="text" />
                    </div>
                    </label>
                    <label>
                        <div>
                            <h3 className="text-white mb-3 mt-3">Senha</h3>
                            <input className=" text-white border bg-(--secondary-color) rounded-md w-100 h-10" name="password"type="password" />
                        </div>
                        <div>
                            <button className="text-white bg-(--secondary-color) rounded-4xl p- ">
                                Login
                            </button>
                        </div>
                      
                        <div className="flex justify-center mt-[90px]">
                            <NavLink className="text-white">
                                ou <span className="font-bold">cadastre-se</span>
                            </NavLink>
                        </div>
                    </label>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default LoginRegister;