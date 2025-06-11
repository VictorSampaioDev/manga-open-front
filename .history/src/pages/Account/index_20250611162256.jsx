const LoginRegister = () => {
    return ( 
        <>
        <div>
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-white font-bold">Entre na sua conta</h1>
                <form>
                    <label>
                    <div>
                        <h3 className="text-white mb-3">Login</h3>
                        <input className="border bg-(--secondary-color) rounded-md w-100 h-10" name="login" type="text" />
                    </div>
                    </label>
                    <label>
                        <div>
                            <h3 className="text-white mb-3 mt-3">Senha</h3>
                            <input className="border bg-(--secondary-color) rounded-md w-100 h-10" name="password"type="password" />
                        </div>
                        <div>
                            <h2 className="text-white mt-5">
                                ou <span className="font-bold">cadastre-se</span>
                            </h2>
                        </div>
                    </label>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default LoginRegister;