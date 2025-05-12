import {
  FlagArgentina,
  FlagBolivia,
  FlagBrazil,
  FlagChile,
  FlagCuba,
  FlagPeru,
  FlagSouthKorea,
} from "../../../components/icons/index.tsx";
import "./CardSpeakers.css";

function getFlagComponent(nationality: string) {
  switch (nationality) {
    case "Chile":
      return <FlagChile />;
    case "Peru":
      return <FlagPeru />;
    case "Corea del Sur":
      return <FlagSouthKorea />;
    case "Bolivia":
      return <FlagBolivia />;
    case "Argentina":
      return <FlagArgentina />;
    case "Brasil":
      return <FlagBrazil />;
    case "Cuba":
      return <FlagCuba />;
    default:
      return null;
  }
}

function truncateString(str: string, maxLength = 56) {
  return str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;
}

function SpeakerCard({
  nameSpeaker = "Ponente por confirmar",
  rolSpeaker = "Sin descripción",
  link_image = "https://i.imgur.com/ORANbku.jpeg",
  alt = "Ponente Anónimo",
  nationality = "Peru",
}) {
  const shouldBlur = nameSpeaker.toLowerCase().includes("ponente");

  return (
    <div
      className={`m-auto animation-view h-full ${shouldBlur ? "blur-sm" : ""}`}
    >
      <article className='text-color w-72 p-4 rounded-[28px] active:bg-[#0e0e20] hover:scale-105 transition-transform border border-default relative h-full'>
        <div className='w-full h-full'>
          <figure className='w-full mb-2 overflow'>
            <img
              className='object-cover w-full aspect-square rounded-xl'
              width={300}
              height={300}
              src={link_image}
              alt={alt}
              draggable='false'
              loading='lazy'
            />
            <img
              className='absolute blur-lg -z-10 block object-cover w-full aspect-square transition-all opacityImage bg-white rounded-[10px] top-0 left-0 right-0'
              width={300}
              height={300}
              src={link_image}
              alt={alt}
              draggable='false'
            />
          </figure>
          <div className='relative'>
            <h4 className='font-bold tracking-wider text-lg max-w-52 text-balance'>
              {truncateString(nameSpeaker)}
            </h4>
            <div className='flex-wrap max-w-52 mt-2'>
              <p className='break-words text-sm text-color-secondary text-pretty'>
                {truncateString(rolSpeaker, 100)}
              </p>
            </div>
            <div className='absolute right-0 bottom-0 top-2'>
              {getFlagComponent(nationality)}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default SpeakerCard;
