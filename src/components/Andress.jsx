const Andress = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-16 text-black w-full px-4 md:px-8 xl:px-48">
        <div className="md:w-1/2 py-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold pb-8 text-left">
            Nosso endereço, clique e veja mais de perto!
          </h2>

          {/* <ol className="space-y-8">
            <li className="flex items-start space-x-4">
              <div>
                <h3 className="text-xl font-serif font-semibold pb-2">
                  Endereço:
                </h3>
                <p className="text-base font-normal text-gray-500">
                  Av. Dr. Júlio Maranhão, 128b - Prazeres, Jaboatão dos <br />
                  Guararapes - PE, 54315-380 <br />1 Andar, Sala 03
                </p>
              </div>
            </li>
          </ol> */}
        </div>
        <div className="w-full flex md:flex flex-col justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.428290659647!2d-34.930884424220295!3d-8.159531281751196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1202d54c6e5%3A0x4f6d4860b081bd04!2sStudio%20Bruna%20Borges%20hs!5e0!3m2!1spt-BR!2sbr!4v1725649484756!5m2!1spt-BR!2sbr"
            width="100%" // O iframe agora ocupa 100% da largura disponível
            height="300" // Altura reduzida em dispositivos móveis
            className="md:w-[800px] md:h-[600px] rounded-lg shadow-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className="mt-4">
            <h3 className="text-xl font-serif font-semibold pb-2">Endereço:</h3>
            <p className="text-base font-normal text-gray-500">
              Av. Dr. Júlio Maranhão, 128b - Prazeres, Jaboatão dos <br />
              Guararapes - PE, 54315-380 <br />1 Andar, Sala 03 <br />
              Contato: (81) 9 98179-7019 <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Andress;
