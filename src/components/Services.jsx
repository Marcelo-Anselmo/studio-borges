const Services = () => {
  return (
    <section className="py-24">
      <div className="flex flex-row justify-center space-x-16 text-black w-full h-full">
        <div className="py-8">
          <h2 className="text-4xl font-serif font-semibold pb-8">
            Nossos Serviços
          </h2>

          <ol>
            <li className="pb-8">
              <h3 className="text-xl font-serif font-semibold pb-4">
                Cortes e Penteados
              </h3>
              <p className="text-base font-normal text-gray-500">
                Transforme seu visual com nossos cortes de vanguarda <br />e
                penteados elegantes.
              </p>
            </li>
            <li className="pb-8">
              <h3 className="text-xl font-serif font-semibold pb-4">
                Tratamentos Capilares
              </h3>
              <p className="text-base font-normal text-gray-500">
                Nutra, fortaleça e revitalize seus fios com nossos <br />
                tratamentos exclusivos.
              </p>
            </li>
            <li className="pb-8">
              <h3 className="text-xl font-serif font-semibold pb-4">
                Coloração e Química
              </h3>
              <p className="text-base font-normal text-gray-500">
                Experimente novas tendências de cor e tratamentos <br />
                químicos seguros.
              </p>
            </li>
            <li className="pb-8">
              <h3 className="text-xl font-serif font-semibold pb-4">
                Manicure e Pedicure
              </h3>
              <p className="text-base font-normal text-gray-500">
                Cuide de suas mãos e pés com nossos serviços <br />
                completos de manicure e pedicure.
              </p>
            </li>
          </ol>
        </div>
        <div>
          <img
            width="500px"
            height="100%"
            src="https://cdn.gamma.app/kv7xvxmqnyy46dp/generated-images/GZXTH5S5bXId_1sXG5aE2.jpg"
            alt="Mulheres com cabelos estilosos e cuidados"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
