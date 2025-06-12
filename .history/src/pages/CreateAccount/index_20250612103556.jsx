const CreateUser = () => {
    return ( 
        <>
        <div className="animated-gradient h-screen flex justify-center">
            <div className="flex flex-col items-center glassmorphism-border rounded-4xl bg-black opacity-70 ml-[300px] mr-[300px] mt-[100px] mb-[90px] p-[60px] ">
                <h1 className="text-white font-bold">Crie sua conta</h1>
                <form>
                    <label>
                    <div>
                        <h3 className="text-white mb-3">Nome</h3>
                        <input className="text-white border bg-(--secondary-color) rounded-md w-100 h-13" name="login" type="text" />
                    </div>
                    </label>
                    <label>
                    <div>
                        <h3 className="text-white mb-3">E-mail</h3>
                        <input className="text-white border bg-(--secondary-color) rounded-md w-100 h-13" name="email" type="e-mail" />
                    </div>
                    </label>
                    <label>
                    <div>
                        <h3 className="text-white mb-3">Senha</h3>
                        <input className="text-white border bg-(--secondary-color) rounded-md w-100 h-13" name="password" type="password" />
                    </div>
                    </label>
                    <label>
                        <div>
                            <h3 className="text-white mb-3 mt-3">Confirmar Senha </h3>
                            <input className=" text-white border bg-(--secondary-color) rounded-md w-100 h-13" name="password"type="password" />
                        </div>
                        <div className="flex justify-center mt-[50px]">
                            <button className="text-white font-bold bg-(--secondary-color) rounded-4xl p-6 w-[300px] cursor-pointer hover:bg-white hover:text-black duration-200 ">
                                Criar conta
                            </button>
                        </div>
                    </label>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default CreateUser;