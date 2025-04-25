import { BsWhatsapp, BsInstagram, BsYoutube } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="py-12 md:py-24  text-black">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold">
          Entre em Contato
        </h2>
        <p className="text-gray-500 mt-2 text-base">
          Fale com a gente pelas redes sociais
        </p>
      </div>

      <div className="flex justify-center space-x-12">
        <a
          href="https://wa.me/message/LWWG6P344QKDG1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 duration-300">
          <BsWhatsapp className="text-green-500" size={50} />
        </a>

        <a
          href="https://www.instagram.com/studiobrunaborgeshs?igsh=MTRjNWJtbHQyMHQ0cw=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 duration-300">
          <BsInstagram className="text-pink-600" size={50} />
        </a>

        <a
          href="https://youtube.com/@studiobrunaborgeshs2170?si=DbZYVO_xfsEP3sk6"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 duration-300">
          <BsYoutube className="text-red-600" size={50} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
