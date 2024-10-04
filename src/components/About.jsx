const About = () => {
  return (
    <div className="py-12 px-4 text-black space-y-8 md:space-y-12 lg:py-24 lg:px-48">
      <div className="text-center md:text-left mb-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-serif">
          Sobre Nós
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl md:text-2xl font-semibold font-serif py-4 text-center md:text-left">
            Nossa Missão
          </h3>
          <p className="font-normal text-gray-500 text-base md:text-lg text-center md:text-left">
            Nossa missão é proporcionar experiências de beleza únicas e
            personalizadas, transformando nossas clientes em mulheres
            empoderadas e confiantes com serviços de alta qualidade e um
            ambiente acolhedor.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl md:text-2xl font-semibold font-serif py-4 text-center md:text-left">
            Visão
          </h3>
          <p className="font-normal text-gray-500 text-base md:text-lg text-center md:text-left">
            Valorizamos o contato humano e buscamos <br />
            construir relacionamentos duradouros com <br />
            nossos clientes e colaboradores. <br />
            Acreditamos que o sucesso financeiro é <br />
            fundamental para garantir a sustentabilidade <br />
            do nosso negócio e oferecer o melhor para nossos clientes.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl md:text-2xl font-semibold font-serif py-4 text-center md:text-left">
            Nossa História
          </h3>
          <p className="font-normal text-gray-500 text-base md:text-lg text-center md:text-left">
            Fundado em 2017, o Studio <br />
            Borges se tornou referência em <br />
            cuidados capilares <br />
            especializados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
