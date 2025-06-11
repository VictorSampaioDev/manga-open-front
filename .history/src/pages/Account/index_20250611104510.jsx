const LoginRegister = () => {
    return ( 
        <>
        <div className="flex flex-col justify-center items-center border border-amber-50">
            <h1 className="text-white font-bold">Entre na sua conta</h1>
            <form>
                <label>
                <div>
                    <h3 className="text-white">Login</h3>
                    <input className="border bg-gray-700 rounded-md y-" name="login" type="text" />
                </div>
                </label>
                <label>
                    <div>
                        <h3 className="text-white">Senha</h3>
                        <input className="border border-white" name="password"type="password" />
                    </div>
                    <div>
                        <h2 className="text-white">
                            ou cadastre-se
                        </h2>
                    </div>
                </label>
            </form>

        </div>
        </>
     );
}
 
export default LoginRegister;