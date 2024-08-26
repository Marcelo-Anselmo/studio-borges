const Cares = () => {
  return (
    <section className="py-24">
      <div className="flex flex-row-reverse justify-center space-x-16 text-black w-full h-full">
        <div className="py-12">
          <h2 className="text-4xl font-serif font-semibold pb-8">
            Cuidados com Cabelos Afro
          </h2>

          <ol>
            <li className="pb-8">
              <h3 className="text-xl font-serif font-semibold pb-4">
                Lavagem Suave
              </h3>
              <p className="text-base font-normal text-gray-500">
                Nossos produtos e técnicas de lavagem <br />
                garantem a limpeza delicada dos fios.
              </p>
            </li>
            <li className="pb-8">
              <h3 className="text-xl font-serif font-semibold pb-4">
                Hidratação Profunda
              </h3>
              <p className="text-base font-normal text-gray-500">
                Tratamentos personalizados nutrem e <br />
                rejuvenescem os cabelos afro.
              </p>
            </li>
            <li className="pb-8">
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
        <div className="px-16">
          <img
            width="500px"
            height="100%"
            src="https://cdn.gamma.app/kv7xvxmqnyy46dp/generated-images/YIWgkWTnqtoMKSXvRPJ-B.jpg"
            alt="Mulheres com cabelos estilosos e cuidados"
          />
        </div>
      </div>
    </section>
  );
};

export default Cares;
