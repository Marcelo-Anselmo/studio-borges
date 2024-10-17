const Services = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:space-x-16 text-black w-full h-full">
        <div className="md:w-1/2 py-8 px-4 xl:px-48">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold pb-8 md:text-left">
            Nossos Serviços
          </h2>

          <ol className="space-y-8">
            <li>
              <h3 className="text-xl md:text-2xl font-serif font-semibold pb-4">
                Mega Hair
              </h3>
              <p className="text-base md:text-lg font-normal text-gray-500">
                Transforme seu visual com Mega Hair, obtendo fios longos e
                <br />
                volumosos com técnicas avançadas para um resultado natural e
                duradouro.
              </p>
            </li>
            <li>
              <h3 className="text-xl md:text-2xl font-serif font-semibold pb-4">
                Cortes e Penteados
              </h3>
              <p className="text-base md:text-lg font-normal text-gray-500">
                Transforme seu visual com nossos cortes <br />e penteados
                elegantes.
              </p>
            </li>
            <li>
              <h3 className="text-xl md:text-2xl font-serif font-semibold pb-4">
                Tratamentos Capilares
              </h3>
              <p className="text-base md:text-lg font-normal text-gray-500">
                Nutra, fortaleça e revitalize seus fios com nossos <br />
                tratamentos exclusivos.
              </p>
            </li>
            <li>
              <h3 className="text-xl md:text-2xl font-serif font-semibold pb-4">
                Coloração e Química
              </h3>
              <p className="text-base md:text-lg font-normal text-gray-500">
                Experimente novas tendências de cor e tratamentos <br />
                químicos seguros.
              </p>
            </li>
            <li>
              <h3 className="text-xl md:text-2xl font-serif font-semibold pb-4">
                Manicure e Pedicure
              </h3>
              <p className="text-base md:text-lg font-normal text-gray-500">
                Cuide de suas mãos e pés com nossos serviços <br />
                completos de manicure e pedicure.
              </p>
            </li>
          </ol>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-full h-auto max-w-md"
            src="./src/imgs/img_4.jpg"
            alt="Mulheres com cabelos estilosos e cuidados"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
