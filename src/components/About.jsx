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
            Empoderar mulheres afro com <br />
            cuidados capilares <br />
            personalizados e <br />
            técnicas de vanguarda.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl md:text-2xl font-semibold font-serif py-4 text-center md:text-left">
            Nossa Equipe
          </h3>
          <p className="font-normal text-gray-500 text-base md:text-lg text-center md:text-left">
            Profissionais altamente <br />
            qualificados, com anos de <br />
            experiência no tratamento de <br />
            cabelos afro.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl md:text-2xl font-semibold font-serif py-4 text-center md:text-left">
            Nossa História
          </h3>
          <p className="font-normal text-gray-500 text-base md:text-lg text-center md:text-left">
            Fundado em 2010, o Studio <br />
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
