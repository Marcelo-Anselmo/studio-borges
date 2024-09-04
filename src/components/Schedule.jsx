const Schedule = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16 text-black w-full h-full">
        <div className="py-8 px-4 md:px-0 md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold pb-8 xl:text-center md:text-left">
            Agende seu Horário
          </h2>

          <ol className="space-y-8">
            <li>
              <h3 className="text-xl font-serif font-semibold pb-4">
                Escolha seu Serviço
              </h3>
              <p className="text-base font-normal text-gray-500">
                Navegue pelos nossos serviços e encontre o <br />
                ideal para você.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-serif font-semibold pb-4">
                Selecione a Data
              </h3>
              <p className="text-base font-normal text-gray-500">
                Reserve com antecedência o horário que <br />
                melhor se encaixa na sua agenda.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-serif font-semibold pb-4">
                Confirme seu Agendamento
              </h3>
              <p className="text-base font-normal text-gray-500">
                Finalize seu agendamento e aguarde nosso <br />
                contato para confirmar.
              </p>
            </li>
          </ol>
          <div className="flex justify-center md:justify-start">
            <a
              className="bg-purple-500 hover:bg-purple-600 duration-200 text-white mt-4 px-28 py-2 rounded-lg font-sans font-bold text-lg"
              href="https://www.google.com.br">
              Agendar Agora
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-full h-auto max-w-md"
            src="https://cdn.gamma.app/kv7xvxmqnyy46dp/generated-images/hHPYn7KQyRiEAzFR3GHWx.jpg"
            alt="Um ambiente agradável com um calendário referente ao agendamento"
          />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
