type ComponentProps = {
  time: string;
  lastTime: string;
  name: string;
  profession: string;
  theme: string;
  img: string;
};

const CardPonent = ({
  time,
  lastTime,
  name,
  profession,
  theme,
  img,
}: ComponentProps) => {
  const convertTo12HourFormat = (dateString: string) => {
    const date = new Date(dateString);

    // Obtiene las horas y minutos
    let hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="card-custom grid grid-cols-4 sm:grid-cols-5 rounded-lg sm:rounded-2xl px-2 sm:px-5 py-2 sm:py-5 gap-1 sm:gap-5 text-slate-400 mx-2 border-2 border-slate-800" style={{backgroundColor: '#1a2332'}}>
      <span className="text-center sm:text-center font-bold text-sm sm:text-5xl col-span-4 sm:col-span-1 sm:leading-6 my-auto">
        {convertTo12HourFormat(time)} <span className="text-xs sm:text-3xl">-</span>{" "}
        {convertTo12HourFormat(lastTime)}
      </span>
      <div className="col-span-4 sm:col-span-3 sm:pr-2 sm:pl-2">
        <p className="text-sm sm:text-md text-center sm:text-left">
          {name}
          {/* <span className="text-gray-300"> - {profession}</span> */}
        </p>
        <h4 className="font-bold text-sm sm:text-xl text-slate-100/90 text-center sm:text-left">{theme}</h4>
      </div>
      <div className="hidden sm:flex justify-end col-span-4 sm:col-span-1">
        <img
          className="w-[100px] h-[120px] object-cover rounded-xl"
          src={`https://ciistacna.com/${img}`}
          alt="Foto perfil"
          loading="lazy"
          decoding="async"
          width={1600}
          height={900}
          draggable="false"
        />
      </div>
    </div>
  );
};

// Exportando ambos componentes
export { CardPonent };
