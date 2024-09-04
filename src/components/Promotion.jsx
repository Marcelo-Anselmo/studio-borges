import { BsCalendar, BsBox2Heart, BsPercent, BsHeart } from "react-icons/bs";

const Promotion = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16 text-black w-full h-full px-4 md:px-8">
        <div className="md:w-1/2 py-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold pb-8 xl:text-center md:text-left">
            Promoções e Pacotes
          </h2>

          <ol className="space-y-8">
            <li>
              <BsPercent className="mb-2 text-purple-500" size="40px" />
              <h3 className="text-xl font-serif font-semibold pb-4">
                Descontos Exclusivos
              </h3>
              <p className="text-base font-normal text-gray-500">
                Aproveite nossas promoções especiais e economize.
              </p>
            </li>
            <li>
              <BsBox2Heart className="mb-2 text-purple-500" size="40px" />
              <h3 className="text-xl font-serif font-semibold pb-4">
                Pacotes Completos
              </h3>
              <p className="text-base font-normal text-gray-500">
                Presenteie-se ou a alguém especial com nossos pacotes <br />
                personalizados.
              </p>
            </li>
            <li>
              <BsCalendar className="mb-2 text-purple-500" size="40px" />
              <h3 className="text-xl font-serif font-semibold pb-4">
                Agende seu Horário
              </h3>
              <p className="text-base font-normal text-gray-500">
                Reserve com antecedência para garantir o melhor atendimento.
              </p>
            </li>
            <li>
              <BsHeart className="mb-2 text-purple-500" size="40px" />
              <h3 className="text-xl font-serif font-semibold pb-4">
                Cuidados Exclusivos
              </h3>
              <p className="text-base font-normal text-gray-500">
                Nossos tratamentos são desenvolvidos com carinho e atenção.
              </p>
            </li>
          </ol>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-full h-auto max-w-md"
            src="https://cdn.gamma.app/kv7xvxmqnyy46dp/generated-images/RvcDq_kRu2SI25YplZDf8.jpg"
            alt="Mostrando vários e diversos estilos de cabelo"
          />
        </div>
      </div>
    </section>
  );
};

export default Promotion;
