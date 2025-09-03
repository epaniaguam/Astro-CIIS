import React from "react";
import { useEffect, useState } from "react";
import type Speaker from "./adapters/speakers";
import SpeakerCard from "./components/CardSpeakers";
import "./Speakers.css";

function Speakers() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://ciistacna.com/reports/16/speakers.json")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener los ponentes");
        return res.json();
      })
      .then((data) => {
        setSpeakers(data);
        // TODO: ELIMINAR
        console.log(`RESDATA: `, data)
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className='text-center'>Cargando ponentes...</p>;
  if (error) return <p className='text-center text-red-500'>{error}</p>;
  if (speakers.length === 0)
    return <p className='text-center'>No hay ponentes disponibles.</p>;

  return (
    <section
      id='speakers'
      className='pt-10 sm:py-20'
    >
      <div className='m-auto max-w-5xl pb-16'>
        <h2 className='text-4xl font-bold text-center text-secondary sm:text-6xl slide-top'>
          Conoce a nuestros <span className='text-primary'>Ponentes</span>
        </h2>
      </div>
      <div className='m-auto max-w-5xl grid gap-y-8 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2'>
        {speakers?.map((speaker) => (
          <SpeakerCard
            key={speaker.id}
            nameSpeaker={`${speaker.degree} ${speaker.name} ${speaker.lastname}`}
            rolSpeaker={speaker.description}
            link_image={`${import.meta.env.PUBLIC_DOMAIN_BASE}/${speaker.avatar}`}
            alt={`Imagen del ponente ${speaker.degree} ${speaker.name} ${speaker.lastname}`}
            nationality={speaker.nationality}
          />
        ))}
      </div>
    </section>
  );
}

export default Speakers;
