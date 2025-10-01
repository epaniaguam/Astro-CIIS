import type Ponent from "../adapters/ponent";
import { CardPonent } from "./CardPonent";
import { format } from "date-fns";

interface props {
  ponentes: any,
  day: string,
  date: string
}

export const DaySchedules = ({ponentes, day, date}: props) => {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  // const ponentsEarly = ponentes.early
  // const ponentsLate = ponentes['late']
  return (
    <div className="w-full flex flex-col rounded-xl sm:rounded-2xl gap-3 sm:gap-5">
      <h3 className="text-center text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-blue-500">{capitalizeFirstLetter(day)} {format(new Date(date), "dd/MM/yyyy")}</h3>
      {
        capitalizeFirstLetter(day) != "Lunes" ? 
        <CardAlmuerzo
          classname="bg-yellow-600"
          time="8:30 - 9:00"
          text="CONTROL Y REGISTRO DE ASISTENCIA"
        />
        : ""
      }
      {
        capitalizeFirstLetter(day) == "Lunes" ? 
        <CardAlmuerzo
          classname="bg-yellow-600"
          time="8:30 - 13:00"
          text="INFORMES, INSCRIPCIONES"
        />
        : ""
      }
      {ponentes.early.map((ponente:Ponent) => {
        return (
          <CardPonent
            key={ponente.id}
            time={ponente.start}
            lastTime={ponente.end}
            name={ponente.speaker}
            profession={ponente.description /** Cambiar */}
            theme={ponente.topic}
            img={ponente.avatar}
          />
        );
      })}
      {
        capitalizeFirstLetter(day) == "Miércoles" ? 
        <CardAlmuerzo 
          classname="bg-lime-600"
          time="09:00 - 13:00"
          text="CALL FOR POSTERS"
        />
        : ""
      }
      <CardAlmuerzo
        classname="bg-blue-600"
        time="13:00 - 14:00"
        text="RECESO / ALMUERZO"
      />
      {
        capitalizeFirstLetter(day) == "Lunes" ? 
        <CardAlmuerzo 
          classname="bg-yellow-600"
          time="14:00 - 16:00"
          text="INFORMES, INSCRIPCIONES"
        />
        : ""
      }
      {
        capitalizeFirstLetter(day) == "Martes" ? 
        <CardAlmuerzo 
          classname="bg-violet-600"
          time="14:00 - 16:00"
          text="CONCURSO 1"
        />
        : ""
      }
      {
        capitalizeFirstLetter(day) == "Miércoles" ? 
        <CardAlmuerzo 
          classname="bg-violet-600"
          time="14:00 - 16:00"
          text="CONCURSO 2"
        />
        : ""
      }
      {
        capitalizeFirstLetter(day) == "Jueves" ? 
        <CardAlmuerzo 
          classname="bg-violet-600"
          time="14:00 - 16:00"
          text="CONCURSO 3"
        />
        : ""
      }
      {ponentes.late.map((ponente:Ponent) => {
        return (
          <CardPonent
            key={ponente.id}
            time={ponente.start}
            lastTime={ponente.end}
            name={ponente.speaker}
            profession={ponente.description}
            theme={ponente.topic}
            img={ponente.avatar}
          />
        );
      })}
      {
        capitalizeFirstLetter(day) == "Lunes" ? 
        <CardAlmuerzo
          classname="bg-blue-600"
          time="18:00 - 19:00"
          text="INAUGURACIÓN"
        />
        : ""
      }
      {
        capitalizeFirstLetter(day) == "Viernes" ? 
        <CardAlmuerzo
          classname="bg-blue-600"
          time="18:00 - 19:00"
          text="CLAUSURA"
        />
        : ""
      }
      
    </div>
  );
};

interface propsCard {
  time?:string, text:string, classname:string
}

const CardAlmuerzo = ({time, text, classname}:propsCard) => {
  return (
    <div className={`${time ? "grid grid-cols-7 sm:grid-cols-9" : "flex items-center justify-center"} rounded-lg sm:rounded-2xl px-2 sm:px-5 py-2 sm:py-4 gap-1 sm:gap-5 mx-2 border-2 border-slate-800 ${classname}`}>
        {
          time ? 
          <span className="font-bold text-sm sm:text-lg col-span-7 sm:col-span-2 text-center">
            {time}
          </span>
          : ""
        }
        <div className={`${time ? "flex justify-center sm:justify-start sm:items-start col-span-7":  ""}`}>
          <h2 className="text-sm sm:text-lg text-white font-semibold tracking-wide sm:tracking-widest text-center">
            {text}
          </h2>
        </div>
    </div>
  )
}