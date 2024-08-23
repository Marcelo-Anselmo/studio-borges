const Header = () => {
  return (
    <header className="bg-[url('https://cdn.gamma.app/kv7xvxmqnyy46dp/generated-images/Nz11JVm_GQKxQcoW2cJXt.jpg')] bg-center bg-cover w-screen h-96">
      <div className="bg-black opacity-85 flex justify-center w-screen h-full py-32">
        <div className="space-y-6">
          <div>
            <h1 className="text-6xl text-white font-semibold font-serif pb-6">
              Bem-vindo ao Studio Borges
            </h1>
          </div>
          <div>
            <p className="text-2xl font-sans text-lg font-normal">
              Descubra o poder transformador dos nossos cuidados com cabelos
              afro.
            </p>
          </div>
          <div className="flex flex-row py-4 space-x-4">
            <div>
              <a
                className="bg-[#BE49DF] px-8 py-4 rounded-lg font-sans font-bold text-lg"
                href="#">
                Agende seu horário
              </a>
            </div>
            <div>
              <a
                className="bg-black px-8 py-4 border-2 border-purple-500 rounded-lg font-sans font-semibold text-lg text-purple-500"
                href="#">
                Conheça nossos serviços
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
