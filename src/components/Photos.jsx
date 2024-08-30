import CardsPh from "./CardsPh";

const Photos = () => {
  return (
    <section className="px-32 overflox-x-hidden w-full h-full text-black">
      <div className="text-4xl font-serif font-semibold pb-8">
        <h2>Galeria de Fotos</h2>
      </div>
      <div className="flex text-pretty flex-row space-x-4">
        <CardsPh
          title="Elegância Atemporal"
          src="https://cdn.gamma.app/kv7xvxmqnyy46dp/generated-images/xwnaZZcrfBbHhB8kDy_TL.jpg"
          p="Penteados sofisticados que valorizam sua beleza natural."
        />
        <CardsPh
          title="Estilo Arrojado"
          src="https://cdn.gamma.app/kv7xvxmqnyy46dp/generated-images/6NCF2hbOW5ASYWGhG88HD.jpg"
          p="Transformações ousadas que elevam sua autoestima."
        />
        <CardsPh
          title="Cuidado Dedicado"
          src="https://cdn.gamma.app/kv7xvxmqnyy46dp/generated-images/8jgoFuOmDl6bZIzJZtLMi.jpg"
          p="Tratamentos exclusivos que nutrem e revitalizam seus cabelos."
        />
        <CardsPh
          title="Versatilidade Única"
          src="https://cdn.gamma.app/kv7xvxmqnyy46dp/generated-images/1pb_LJh4kc_wPmI1A-ELj.jpg"
          p="Diversas opções de cortes e estilos para realçar sua beleza."
        />
      </div>
    </section>
  );
};

export default Photos;
