import type Workshop from "../adapters/workshopAdapter";
import { useEffect, useState } from "react";
import { URI } from "../../../helpers/endpoints";
import { useAuth } from "../../../hooks/use-auth";
import CardWorkshop from "../../panel/components/workshops/components/card-workshop";
import { AuthProvider } from "../../panel/context/AuthContext";

const ListWorkshop = () => {
  const { user } = useAuth();
  const [workshops, setWorkshops] = useState<Workshop[] | undefined>();
  const getWorkshopImage = (workshopName: string): string => {
    const name = workshopName.toLowerCase();

    if (
      name.includes("sensor") ||
      name.includes("robótica") ||
      name.includes("robot")
    ) {
      return "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?w=800"; // Robótica
    } else if (
      name.includes("programación") ||
      name.includes("programación competitiva")
    ) {
      return "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800"; // Programación
    } else if (name.includes("videojuego") || name.includes("juego")) {
      return "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800"; // Videojuegos
    } else if (
      name.includes("series temporales") ||
      name.includes("análisis")
    ) {
      return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"; // Análisis de datos
    }

    // Imagen por defecto
    return "https://i.imgur.com/89Wsfpc.jpeg";
  };

  useEffect(() => {
    const useWorkshops = async () => {
      try {
        const response = await fetch(URI.workshop.src);
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        const result = await response.json();
        setWorkshops(result);
      } catch (error) {
        console.error("Error al obtener los datos de los talleres:", error);
      }
    };
    useWorkshops();
  }, []);

  return (
    <>
      {workshops &&
        workshops.map((workshop, index) => {
          let cwk = user?.talleres.find((t: any) => t.id == workshop.id);
          return (
            <CardWorkshop
              key={index}
              id={workshop.id}
              title={workshop.name}
              date={workshop.date}
              start={workshop.start}
              end={workshop.end}
              start_2={workshop.start_2}
              end_2={workshop.end_2}
              location={workshop.place}
              requirements={workshop.requirements}
              price={workshop.price}
              degree_speaker={workshop.speaker.degree_speaker}
              name_speaker={workshop.speaker.name_speaker}
              lastname_speaker={workshop.speaker.lastname_speaker}
              src_speaker={`https://ciistacna.com/${workshop.speaker.dir_img_speaker}`}
              /* src_workshop="https://i.imgur.com/89Wsfpc.jpeg" //imagen anterior*/
              src_workshop={getWorkshopImage(workshop.name)}
              avaible={workshop.avaible}
              registered={Boolean(cwk)}
              state={cwk?.state}
            />
          );
        })}
    </>
  );
};
export default () => {
  return (
    <AuthProvider>
      <ListWorkshop />
    </AuthProvider>
  );
};
