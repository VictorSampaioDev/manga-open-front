import { NavLink } from "react-router-dom";

const LoginRegister = () => {
  return (
    <>
      {/* Container principal para o gradiente e centralização */}
      <div className="animated-gradient h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/*
          Caixa principal (glassmorphism-border)
          - max-w-lg: Largura máxima para telas grandes
          - w-full: Ocupa toda a largura disponível até o max-w
          - mx-auto: Centraliza horizontalmente
          - p-8 md:p-12: Padding responsivo
          - mt-4 md:mt-8 mb-4 md:mb-8: Margens verticais responsivas para centralizar melhor
        */}
        <div className="flex flex-col items-center glassmorphism-border rounded-4xl bg-black bg-opacity-70 max-w-lg w-full mx-auto p-8 md:p-12 lg:p-16">

          <h1 className="text-white font-bold mb-8 text-2xl md:text-3xl lg:text-4xl">
            Entre na sua conta
          </h1>

          <form className="w-full"> {/* Formulário ocupa 100% da largura do pai */}
            <label className="block mb-4"> {/* label como bloco para organização */}
              <h3 className="text-white mb-2 text-lg">Login</h3>
              <input
                className="text-white border border-gray-400 bg-[var(--secondary-color)] rounded-md w-full h-10 p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                name="login"
                type="text"
              />
            </label>

            <label className="block mb-6"> {/* label como bloco para organização */}
              <h3 className="text-white mb-2 text-lg">Senha</h3>
              <input
                className="text-white border border-gray-400 bg-[var(--secondary-color)] rounded-md w-full h-10 p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                name="password"
                type="password"
              />
            </label>

            <div className="flex justify-center mt-8 md:mt-12">
              <button
                type="submit" // Use type="submit" para botões de formulário
                className="text-white font-bold bg-[var(--secondary-color)] rounded-full p-3 md:p-4 w-full sm:w-2/3 md:w-full max-w-xs cursor-pointer hover:bg-white hover:text-black duration-200 text-lg"
              >
                Login
              </button>
            </div>

            <div className="flex justify-center mt-8 md:mt-12">
              <NavLink to="/create-account" className="text-white text-lg">
                ou <span className="font-bold">cadastre-se</span>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;