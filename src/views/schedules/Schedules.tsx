import { useEffect, useRef, useState } from "react";
import { DaySchedules } from "./components/DayShedules";
import { DayScheduleSkeleton, DayButtonsSkeleton } from "./components/ScheduleSkeleton";
import dataPonents from "./services/data";
import type DayPonent from "./adapters/dayPonent";

const Schedules = () => {
  const [data, setData] = useState<DayPonent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(0); // Índice del día seleccionado

  const fetchData = async () => {
    try {
      setLoading(true);
      const fetchedData = await dataPonents();
      if (fetchedData) {
        setData(fetchedData);
      } else {
        console.error("No data returned from the API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section
      id="schedules"
      className="w-full flex flex-col items-center mb-24 max-w-screen-md mx-auto pt-40 sm:pt-48"
    >
      <h2 className="text-4xl font-bold text-center text-secondary sm:text-6xl slide-top leading-relaxed sm:leading-loose">
        Agenda
      </h2>
      <p className="text-center text-base mb-8 mt-8">
        Todas las charlas estan en directo por{" "}
        <a
          href="https://www.facebook.com/61556532988025/live_videos/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xl text-blue-300"
        >
          Facebook
        </a>
      </p>
      
      {/* Botones de días */}
      {loading ? (
        <DayButtonsSkeleton />
      ) : (
        <div className="w-full flex gap-5 justify-center flex-wrap mb-5">
          {data?.map((element, index) => (
            <button
              className={`px-6 py-2 rounded-lg cursor-pointer font-semibold transition-colors ${
                selectedDay === index
                  ? 'bg-blue-600 text-slate-200'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
              key={element.day}
              onClick={() => setSelectedDay(index)}
            >
              {element.day.charAt(0).toUpperCase() + element.day.slice(1)}
            </button>
          ))}
        </div>
      )}
      
      {/* Contenedor de cronograma del día seleccionado */}
      <div className="w-full">
        {loading ? (
          <DayScheduleSkeleton />
        ) : (
          data[selectedDay] && (
            <DaySchedules
              day={data[selectedDay].day || ""}
              ponentes={data[selectedDay]}
              date={data[selectedDay].date}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Schedules;
