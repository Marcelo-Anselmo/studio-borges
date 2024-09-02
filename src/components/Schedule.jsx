const Schedule = () => {
  return (
    <section className="py-24">
      <div className="flex flex-row justify-center space-x-16 text-black w-full h-full">
        <div className="py-8">
          <h2 className="text-4xl font-serif font-semibold pb-8">
            Agende seu Horário
          </h2>

          <ol>
            <li className="pb-8">
              <h3 className="text-xl font-serif font-semibold pb-4">
                Escolha seu Serviço
              </h3>
              <p className="text-base font-normal text-gray-500">
                Navegue pelos nossos serviços e encontre o <br />
                ideal para você.
              </p>
            </li>
            <li className="pb-8">
              <h3 className="text-xl font-serif font-semibold pb-4">
                Selecione a Data
              </h3>
              <p className="text-base font-normal text-gray-500">
                Reserve com antecedência o horário que <br />
                melhor se encaixa na sua agenda.
              </p>
            </li>
            <li className="pb-8">
              <h3 className="text-xl font-serif font-semibold pb-4">
                Confirme seu Agendamento
              </h3>
              <p className="text-base font-normal text-gray-500">
                Finalize seu agendamento e aguarde nosso <br />
                contato para confirmar.
              </p>
            </li>
          </ol>
          <a
            className="bg-[#BE49DF] text-white px-8 py-4 rounded-lg font-sans font-bold text-lg"
            href="https://www.google.com.br">
            Agendar Agora
          </a>
        </div>
        <div>
          <img
            width="500px"
            height="100%"
            src="https://cdn.gamma.app/kv7xvxmqnyy46dp/generated-images/hHPYn7KQyRiEAzFR3GHWx.jpg"
            alt="Um ambiente agradavél com um calendario referente ao agendamento"
          />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Schedule;
