const Cares = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="flex flex-col md:flex-row-reverse justify-center items-center space-y-12 md:space-y-0 md:space-x-16 text-black w-full h-full">
        <div className="px-4 md:px-0 md:w-1/2 py-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold pb-8 xl:text-center md:text-left">
            Cuidados com Cabelos Afro
          </h2>

          <ol className="space-y-8">
            <li>
              <h3 className="text-xl font-serif font-semibold pb-4">
                Lavagem Suave
              </h3>
              <p className="text-base font-normal text-gray-500">
                Nossos produtos e técnicas de lavagem <br />
                garantem a limpeza delicada dos fios.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-serif font-semibold pb-4">
                Hidratação Profunda
              </h3>
              <p className="text-base font-normal text-gray-500">
                Tratamentos personalizados nutrem e <br />
                rejuvenescem os cabelos afro.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-serif font-semibold pb-4">
                Definição dos Cachos
              </h3>
              <p className="text-base font-normal text-gray-500">
                Potencialize a saúde e a definição natural dos <br />
                seus cachos.
              </p>
            </li>
          </ol>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-full h-auto max-w-md"
            src="https://cdn.gamma.app/kv7xvxmqnyy46dp/generated-images/YIWgkWTnqtoMKSXvRPJ-B.jpg"
            alt="Mulheres com cabelos estilosos e cuidados"
          />
        </div>
      </div>
    </section>
  );
};

export default Cares;
