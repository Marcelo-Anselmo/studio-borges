const About = () => {
  return (
    <div className="flex flex-col py-24 text-black space-x-8 w-full h-full overflow-x-hidden">
      <div className="text-center md:w-2/5 2xl:w-3/5 h-full mb-4">
        <h2 className="text-4xl pl-24 font-semibold font-serif">Sobre Nós</h2>
      </div>
      <div className="flex flex-row justify-center space-x-28 w-full h-full">
        <div>
          <h3 className="text-xl font-semibold font-serif py-4">
            Nossa Missão
          </h3>
          <p className="font-normal text-gray-500 text-base">
            Empoderar mulheres afro com <br />
            cuidados capilares <br />
            personalizados e <br />
            técnicas de vanguarda.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold font-serif py-4">
            Nossa Equipe
          </h3>
          <p className="font-normal text-gray-500 text-base">
            Profissionais altamente <br />
            qualificados, com anos de <br />
            experiência no tratamento de <br />
            cabelos afro.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold font-serif py-4">
            Nossa História
          </h3>
          <p className="font-normal text-gray-500 text-base">
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
