import { BsCalendar } from "react-icons/bs";
import { BsBox2Heart } from "react-icons/bs";
import { BsPercent } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

const Promotion = () => {
  return (
    <section className="py-24">
      <div className="flex flex-row justify-center space-x-16 text-black w-full h-full">
        <div className="py-8">
          <h2 className="text-4xl font-serif font-semibold pb-8">
            Promoções e Pacotes
          </h2>

          <ol>
            <li className="pb-8">
              <BsPercent className="mb-2 text-purple-500" size="40px" />
              <h3 className="text-xl font-serif font-semibold pb-4">
                Descontos Exclusivos
              </h3>
              <p className="text-base font-normal text-gray-500">
                Aproveite nossas promoções especiais e economize.
              </p>
            </li>
            <li className="pb-8">
              <BsBox2Heart className="mb-2 text-purple-500" size="40px" />
              <h3 className="text-xl font-serif font-semibold pb-4">
                Pacotes Completos
              </h3>
              <p className="text-base font-normal text-gray-500">
                Presenteie-se ou a alguém especial com nossos pacotes <br />
                personalizados.
              </p>
            </li>
            <li className="pb-8">
              <BsCalendar className="mb-2 text-purple-500" size="40px" />
              <h3 className="text-xl font-serif font-semibold pb-4">
                Agende seu Horário
              </h3>
              <p className="text-base font-normal text-gray-500">
                Reserve com antecedência para garantir o melhor atendimento.
              </p>
            </li>
            <li className="pb-8">
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
        <div>
          <img
            width="500px"
            height="100%"
            src="https://cdn.gamma.app/kv7xvxmqnyy46dp/generated-images/RvcDq_kRu2SI25YplZDf8.jpg"
            alt="Mostrando vários e diversos estilos de cabelo"
          />
        </div>
      </div>
    </section>
  );
};

export default Promotion;
