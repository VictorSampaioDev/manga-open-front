const LoginRegister = () => {
    return ( 
        <>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-white font-bold">Entre na sua conta</h1>
            <forms>
                <label>
                <div>
                    <h3>Login</h3>
                    <input name="login" type="text" />
                </div>
                </label>
                <label>
                    <div>
                        <h3>Senha</h3>
                        <input name=""type="password" />
                    </div>
                </label>
            </forms>

        </div>
        </>
     );
}
 
export default LoginRegister;