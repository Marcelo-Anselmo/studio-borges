import CardsPh from "./CardsPh";

const Photos = () => {
  return (
    <section className="px-4 md:px-8 lg:px-48 overflow-x-hidden w-full text-black">
      <div className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold pb-8 text-left">
        <h2>Galeria de Fotos</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <CardsPh
          title="Elegância Atemporal"
          src="../src/imgs/pago_2.jpg"
          p="Penteados sofisticados que valorizam sua beleza natural."
        />
        <CardsPh
          title="Estilo Arrojado"
          src="../src/imgs/pago_1.jpg"
          p="Transformações ousadas que elevam sua autoestima."
        />
        <CardsPh
          title="Cuidado Dedicado"
          src="../src/imgs/pago_3.jpg"
          p="Tratamentos exclusivos que nutrem e revitalizam seus cabelos."
        />
        <CardsPh
          title="Versatilidade Única"
          src="../src/imgs/img_1.jpg"
          p="Diversas opções de cortes e estilos para realçar sua beleza."
        />
      </div>
    </section>
  );
};

export default Photos;
