import React from 'react'; // Adicionado React import, caso não esteja implicito em seu setup

const CreateUser = () => {
  return (
    <>
      <div className="animated-gradient h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="flex flex-col items-center glassmorphism-border rounded-4xl bg-black opacity-70 max-w-lg md:max-w-xl w-full mx-auto p-8 md:p-12 lg:p-16">
          <h1 className="text-white font-bold mb-8 text-2xl md:text-3xl lg:text-4xl">
            Crie sua conta
          </h1>

          <form className="w-full">
            <label className="block mb-4">
              <h3 className="text-white mb-2 text-lg">Nome</h3>
              <input
                className="text-white border border-gray-400 bg-[var(--secondary-color)] rounded-md w-full h-10 p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                name="nome"
                type="text"
              />
            </label>

            <label className="block mb-4">
              <h3 className="text-white mb-2 text-lg">E-mail</h3>
              <input
                className="text-white border border-gray-400 bg-[var(--secondary-color)] rounded-md w-full h-10 p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                name="email"
                type="email"
              />
            </label>

            <label className="block mb-4">
              <h3 className="text-white mb-2 text-lg">Senha</h3>
              <input
                className="text-white border border-gray-400 bg-[var(--secondary-color)] rounded-md w-full h-10 p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                name="password"
                type="password"
              />
            </label>

            <label className="block mb-8">
              <h3 className="text-white mb-2 text-lg">Confirmar Senha</h3>
              <input
                className="text-white border border-gray-400 bg-[var(--secondary-color)] rounded-md w-full h-10 p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                name="confirm_password" // Nome do campo 'confirm_password' para ser diferente da senha
                type="password"
              />
            </label>

            <div className="flex justify-center mt-8 md:mt-12">
              <button
                type="submit" // Usar type="submit" para botões de formulário
                className="text-white font-bold bg-[var(--secondary-color)] rounded-full p-3 md:p-4 w-full sm:w-2/3 md:w-full max-w-xs cursor-pointer hover:bg-white hover:text-black duration-200 text-lg"
              >
                Criar conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;