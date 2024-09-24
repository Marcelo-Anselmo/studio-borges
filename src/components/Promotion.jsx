import { BsCalendar, BsBox2Heart, BsPercent, BsHeart } from "react-icons/bs";

const Promotion = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-16 text-black w-full px-4 md:px-8 xl:px-48">
        <div className="md:w-1/2 py-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold pb-8 text-left">
            Promoções e Pacotes
          </h2>

          <ol className="space-y-8">
            <li className="flex items-start space-x-4">
              <BsPercent className="text-purple-500" size="40px" />
              <div>
                <h3 className="text-xl font-serif font-semibold pb-2">
                  Descontos Exclusivos
                </h3>
                <p className="text-base font-normal text-gray-500">
                  Aproveite nossas promoções especiais e economize.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <BsBox2Heart className="text-purple-500" size="40px" />
              <div>
                <h3 className="text-xl font-serif font-semibold pb-2">
                  Pacotes Completos
                </h3>
                <p className="text-base font-normal text-gray-500">
                  Presenteie-se ou a alguém especial com nossos pacotes
                  personalizados.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <BsCalendar className="text-purple-500" size="40px" />
              <div>
                <h3 className="text-xl font-serif font-semibold pb-2">
                  Agende seu Horário
                </h3>
                <p className="text-base font-normal text-gray-500">
                  Reserve com antecedência para garantir o melhor atendimento.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <BsHeart className="text-purple-500" size="40px" />
              <div>
                <h3 className="text-xl font-serif font-semibold pb-2">
                  Cuidados Exclusivos
                </h3>
                <p className="text-base font-normal text-gray-500">
                  Nossos tratamentos são desenvolvidos com carinho e atenção.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-full h-auto max-w-lg lg:max-w-md"
            src="https://cdn.gamma.app/kv7xvxmqnyy46dp/generated-images/RvcDq_kRu2SI25YplZDf8.jpg"
            alt="Mostrando vários e diversos estilos de cabelo"
          />
        </div>
      </div>
    </section>
  );
};

export default Promotion;
