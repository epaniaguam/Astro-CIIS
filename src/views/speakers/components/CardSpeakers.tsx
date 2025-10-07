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
  socialNetwork = "",
}) {
  const shouldBlur = nameSpeaker.toLowerCase().includes("ponente");
  // const shouldBlur = false;
  const url =
    socialNetwork &&
    socialNetwork.trim() !== "" &&
    socialNetwork.trim() !== "https://www.linkedin.com"
      ? socialNetwork
      : null;
  return (
    <div
      className={`m-auto animation-view h-full ${shouldBlur ? "blur-[2px]" : ""}`}
    >
      <a
        href={url || "#"}
        target={url ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="block"
      >
        <article className="text-color w-72 p-4 rounded-[28px] active:bg-[#0e0e20] hover:scale-105 transition-transform border border-default relative h-full">
          <div className="w-full h-full">
            <figure className="w-full mb-2 overflow">
              <img
                className="object-cover w-full aspect-square rounded-xl"
                width={300}
                height={300}
                src={link_image}
                alt={alt}
                draggable="false"
                loading="lazy"
              />
              <img
                className="absolute blur-lg -z-10 block object-cover w-full aspect-square transition-all opacityImage bg-white rounded-[10px] top-0 left-0 right-0"
                width={300}
                height={300}
                src={link_image}
                alt={alt}
                draggable="false"
              />
            </figure>
            <div className="relative">
              {/* TODO: ACTIVAR cuando se tenga datos completos de los ponentes */}
              <h4 className="font-bold tracking-wider text-lg max-w-auto text-balance flex items-center gap-2">
                <span className="line-clamp-2">
                  {truncateString(nameSpeaker)}
                </span>
                <span className="p-1">{getFlagComponent(nationality)}</span>
              </h4>

              <div className="mt-2 max-w-full">
                <p className="w-full break-words text-sm text-color-secondary text-pretty">
                  {truncateString(rolSpeaker, 100)}
                </p>
              </div>

              {/* Bandera según la nacionalidad */}
              <div className="absolute right-0 bottom-0 top-2"></div>

              {/* TODO: BORRAR cuando se tenga datos completos de los ponentes */}
              {/* 
              <div className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-lg py-2 shadow-sm max-w-52 mx-auto">
                <h4 className="font-semibold text-base text-balance truncate text-white">
                  {truncateString(nameSpeaker)}
                </h4>
                <span className="ml-3 flex items-center">
                  {getFlagComponent(nationality)}
                </span>
              </div>
              */}
            </div>
          </div>
        </article>
      </a>
    </div>
  );
}

export default SpeakerCard;