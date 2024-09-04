const Header = () => {
  return (
    <header className="bg-[url('https://cdn.gamma.app/kv7xvxmqnyy46dp/generated-images/Nz11JVm_GQKxQcoW2cJXt.jpg')] bg-center bg-cover w-screen h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-x-hidden">
      <div className="bg-black bg-opacity-80 flex flex-col items-center justify-center w-full h-full py-8 px-4">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold font-serif">
            Bem-vindo ao Studio Borges
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white font-sans">
            Descubra o poder transformador dos nossos cuidados com cabelos afro.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <a
              className="bg-[#BE49DF] px-6 py-3 rounded-lg font-sans font-bold text-base sm:text-lg text-white"
              href="#">
              Agende seu horário
            </a>
            <a
              className="bg-black px-6 py-3 border-2 border-purple-500 rounded-lg font-sans font-semibold text-base sm:text-lg text-purple-500"
              href="#">
              Conheça nossos serviços
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
