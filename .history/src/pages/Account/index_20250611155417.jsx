const LoginRegister = () => {
    return ( 
        <>
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-white font-bold">Entre na sua conta</h1>
            <form>
                <label>
                <div>
                    <h3 className="text-white">Login</h3>
                    <input className="border bg-gray-700 rounded-md w-100 h-10" name="login" type="text" />
                </div>
                </label>
                <label>
                    <div>
                        <h3 className="text-white">Senha</h3>
                        <input className="border bg-gray-700 rounded-md w-100 h-10" name="password"type="password" />
                    </div>
                    <div>
                        <h2 className="text-white">
                            ou <span className="">cadastre-se</span>
                        </h2>
                    </div>
                </label>
            </form>

        </div>
        </>
     );
}
 
export default LoginRegister;