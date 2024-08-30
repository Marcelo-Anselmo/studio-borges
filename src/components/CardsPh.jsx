const CardsPh = (props) => {
  return (
    <div className="">
      <div>
        <img
          className="w-64 h-40 bg-cover bg-center bg-no-repeat rounded-lg"
          //width="200px"
          src={props.src}
          alt={props.alt}
        />
      </div>
      <div>
        <h3 className="text-xl font-serif font-semibold pb-4 pt-4">{props.title}</h3>
        <p className="text-base font-normal text-gray-500">{props.p}</p>
      </div>
    </div>
  );
};

export default CardsPh;
