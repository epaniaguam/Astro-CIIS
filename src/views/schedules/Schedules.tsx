import { useEffect, useRef, useState } from "react";
import { DaySchedules } from "./components/DayShedules";
import { DayScheduleSkeleton, DayButtonsSkeleton } from "./components/ScheduleSkeleton";
import dataPonents from "./services/data";
import type DayPonent from "./adapters/dayPonent";

const Schedules = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<DayPonent[]>([]);
  const [loading, setLoading] = useState(true);

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

  const handleScrollToDay = (day: string) => {
    if (carouselRef.current) {
      const target = document.getElementById(`day-${day}`);
      if (target) {
        carouselRef.current.scrollTo({
          left: target.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  };


  const [height, setHeight] = useState('720px')

  return (
    <section
      id="schedules"
      className="w-full flex flex-col items-center mb-24 max-w-screen-md mx-auto pt-40 sm:pt-48"
    >
      <h2 className="text-4xl font-bold text-center text-secondary sm:text-6xl slide-top leading-relaxed sm:leading-loose">
        Cronograma
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
          {data?.map((element) => (
            <button
              className="px-6 py-2 rounded-lg cursor-pointer text-slate-200 bg-blue-600 font-semibold hover:bg-slate-900 active:bg-slate-900"
              key={element.day}
              onClick={() => {
                handleScrollToDay(element.day);
                setHeight(() => {
                  switch (element.day) {
                    case 'lunes':
                      return '720px';
                    case 'martes':
                      return '1520px';
                    case 'miércoles':
                      return '1200px';
                    case 'jueves':
                      return '1200px';
                    case 'viernes':
                      return '1520px';
                    default:
                      return 'auto';
                  }
                });
              }}
            >
              {element.day.charAt(0).toUpperCase() + element.day.slice(1)}
            </button>
          ))}
        </div>
      )}
      
      {/* Contenedor de cronogramas */}
      <div
        ref={carouselRef}
        className="w-full relative overflow-hidden scroll-smooth scroll-mx-12 flex justify-start gap-10 rounded-2xl"
      >
        {loading ? (
          <div className="w-full flex-shrink-0">
            <DayScheduleSkeleton />
          </div>
        ) : (
          data?.map((element, index) => {
            return (
              <div
                id={`day-${element.day}`}
                key={element.day}
                className={`w-full flex-shrink-0 h-[${height}]`}
              >
                <DaySchedules
                  day={element.day || ""}
                  ponentes={element}
                  date={element.date}
                />
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Schedules;
