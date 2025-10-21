import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale/es";
import IconDate from "../../../../../assets/workshops/IconDate";
import IconLocation from "../../../../../assets/workshops/IconLocation";
import IconPrice from "../../../../../assets/workshops/IconPrice";
import IconTime from "../../../../../assets/workshops/IconTime";
import { status } from "../../../services/status";
import IconRequirements from "../../../../../assets/workshops/IconRequirements";

interface Props {
  id: number;
  src_speaker: string;
  degree_speaker: string;
  name_speaker: string;
  lastname_speaker: string;
  src_workshop: string;
  title: string;
  date: string;
  start: string;
  end: string;
  start_2: string;
  end_2: string;
  location: string;
  price: string;
  requirements: string;
  avaible: number;
  registered: Boolean;
  state: number;
}

const BtnWorkshop = ({
  className,
  label,
  handleClick,
  disabled = false,
}: {
  className: string;
  label: string;
  handleClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`px-6 py-1 sm:px-6 sm:py-2 w-full lg:w-60 text-sm sm:text-base ${className} font-semibold hover:font-bold transition-colors rounded-full uppercase tracking-wider text-[#333333]`}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

const CardWorkshop = ({
  id,
  title,
  date,
  start,
  end,
  start_2,
  end_2,
  location,
  requirements,
  price,
  src_speaker,
  degree_speaker,
  name_speaker,
  lastname_speaker,
  src_workshop,
  avaible,
  registered,
  state,
}: Props) => {
  const endDate = new Date() > new Date(end);

  // Función original de inscripción interna
  // const handleClick = () => {
  //   window.location.href = `/workshops/pago/${encodeURIComponent(id)}`;
  // };

  // Google forms que se uso para el CIIS XXVI
  const handleClick = () => {
    window.open("https://forms.gle/g3PxJ3B4u5wdStnh7", "_blank");
  };

  return (
    <div className='flex min-h-48 lg:h-[320px] overflow-hidden border border-white/30 rounded-sm max-w-4xl hover:scale-105 group flex-col lg:flex-row px-2 py-4 sm:pl-6 sm:py-2 sm:px-1 lg:px-0 lg:py-0 lg:pl-8'>
      <div className='flex w-full items-center gap-x-8'>
        <div className='flex flex-col items-center gap-y-4'>
          <div className='w-24 h-24 rounded-full overflow-hidden flex-shrink-0'>
            <img
              className='w-full h-full object-cover'
              src={src_speaker}
              alt='Imagen del expositor'
              loading='lazy'
              decoding='async'
              width={1600}
              height={900}
              draggable='false'
            />
          </div>
          <span className='text-white/80 text-xs md:text-sm lg:text-base text-center w-24 line-clamp-3'>
            {degree_speaker} {name_speaker} {lastname_speaker}
          </span>
        </div>
        <div className='flex flex-col sm:flex-row lg:flex-col gap-y-4 items-center lg:items-start gap-x-4'>
          <div className='flex flex-col gap-y-1'>
            <h4 className='uppercase font-bold text-sm sm:text-base md:text-lg lg:text-xl text-white/95 group-hover:underline'>
              {title}
            </h4>
            <div className='flex items-start gap-x-2 text-white/80 text-xs md:text-sm lg:text-base'>
              <div className='flex-shrink-0 w-6 flex items-center justify-center'>
                <IconDate
                  size={20}
                  color='#7AAEF1'
                />
              </div>
              <span>
                {`${format(parseISO(date), "dd-MMMM/yyyy", { locale: es })}`
                  .replace("-", " de ")
                  .replace("/", " del ")}
              </span>
            </div>
            <div className='flex items-start gap-x-2 text-white/80 text-xs md:text-sm lg:text-base'>
              <div className='flex-shrink-0 w-6 flex items-center justify-center'>
                <IconTime
                  size={20}
                  color='#7AAEF1'
                />
              </div>
              <span>
                {format(new Date(start), "HH:mm")} -{" "}
                {format(new Date(end), "HH:mm")}
              </span>
              {Boolean(start_2) && Boolean(end_2) && (
                <span>
                  & {format(new Date(start_2), "HH:mm")} -{" "}
                  {format(new Date(end_2), "HH:mm")}
                </span>
              )}
            </div>
            <div className='flex items-start gap-x-2 text-white/80 text-xs md:text-sm lg:text-base'>
              <div className='flex-shrink-0 w-6 flex items-center justify-center'>
                <IconLocation
                  size={20}
                  color='#7AAEF1'
                />
              </div>
              <span>{location}</span>
            </div>
            <div className='flex items-start gap-x-2 text-white/80 text-xs md:text-sm lg:text-base'>
              <div className='flex-shrink-0 w-6 flex items-center justify-center'>
                <IconPrice
                  size={20}
                  color='#7AAEF1'
                />
              </div>
              <span>S/.{price}</span>
            </div>
            {Boolean(requirements) && (
              <div className='flex items-start gap-x-2 text-white/80 text-xs md:text-sm lg:text-base'>
                <div className='flex-shrink-0 w-6 flex items-center justify-center'>
                  <IconRequirements
                    size={20}
                    color='#7AAEF1'
                  />
                </div>
                <span>Requerimientos: {requirements}</span>
              </div>
            )}
          </div>
          <div className='w-full sm:w-min'>
            {!registered ? (
              <>
                {endDate ? (
                  <BtnWorkshop
                    className='bg-gray-400'
                    label='Inscripciones cerradas'
                    disabled={true}
                  />
                ) : avaible > 0 ? (
                  <BtnWorkshop
                    className='bg-[#FAAEF1] hover:bg-[#AAAEF1]'
                    label='Inscribirse'
                    handleClick={handleClick}
                  />
                ) : (
                  <BtnWorkshop
                    className='bg-gray-400'
                    label='Inscripciones cerradas'
                    disabled={true}
                  />
                )}
              </>
            ) : (
              <BtnWorkshop
                className={status[state]?.color}
                label={status[state]?.label}
                disabled={true}
              />
            )}
          </div>
        </div>
      </div>
      <div className='h-full relative hidden lg:block'>
        <img
          className='h-full object-cover'
          src={src_workshop}
          alt='Imagen de algo relacionado al taller'
          loading='lazy'
          decoding='async'
          width={500}
          height={500}
          draggable='false'
        />
        <div className='absolute inset-0 bg-gradient-to-l from-transparent to-black/70'></div>
      </div>
    </div>
  );
};

export default CardWorkshop;
