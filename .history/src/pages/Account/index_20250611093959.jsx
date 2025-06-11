const LoginRegister = () => {
    return ( 
        <>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-white font-bold">Entre na sua conta</h1>
            <form>
                <label>
                <div>
                    <h3 className="text">Login</h3>
                    <input name="login" type="text" />
                </div>
                </label>
                <label>
                    <div>
                        <h3 className="text-white">Senha</h3>
                        <input name="password"type="password" />
                    </div>
                </label>
            </form>

        </div>
        </>
     );
}
 
export default LoginRegister;