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
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Cargando ponentes...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (speakers.length === 0)
    return <p className="text-center">No hay ponentes disponibles.</p>;

  return (
    <section id="speakers" className="pt-10 sm:py-20">
      <div className="m-auto max-w-5xl pb-16">
        <h2 className="text-4xl font-bold text-center text-secondary sm:text-6xl slide-top">
          Conoce a nuestros <span className="text-primary">Ponentes</span>
        </h2>
      </div>
      <div className="m-auto max-w-5xl grid gap-y-8 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
        {speakers?.map((speaker) => (
          <SpeakerCard
            key={speaker.id}
            nameSpeaker={`${speaker.degree} ${speaker.name} ${speaker.lastname}`}
            rolSpeaker={speaker.description}
            link_image={`${import.meta.env.PUBLIC_DOMAIN_BASE}/${speaker.avatar}`}
            alt={`Imagen del ponente ${speaker.degree} ${speaker.name} ${speaker.lastname}`}
            nationality={speaker.nationality}
            socialNetwork={speaker.socialNetwork}
          />
        ))}
      </div>
      {/* TODO: ELIMINAR CUANDO ESTEN LISTOS LOS PONENTES */}
      <div className="mt-14 text-center">
        <p className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight notice-pulse">
          <span className="block">¡MUY PRONTO</span>
          <span className="block">REVELAREMOS MÁS PONENTES!</span>
        </p>
        <div className="mt-4 h-1 w-48 mx-auto rounded-full underline-pan" />
      </div>
      <style>{`
            @media (prefers-reduced-motion: reduce) {
              .notice-pulse, .underline-pan { animation: none !important; }
            }
            @keyframes noticePulse {
              0%, 100% { transform: translateY(0); opacity: 0.96; }
              50% { transform: translateY(-1px); opacity: 1; }
            }
            @keyframes underlinePan {
              0% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .notice-pulse { animation: noticePulse 3s ease-in-out infinite; }
            .underline-pan {
              background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(99,102,241,0.7) 50%, rgba(0,0,0,0) 100%);
              background-size: 200% 100%;
              background-position: 100% 50%;
              animation: underlinePan 6s linear infinite alternate;
            }
          `}</style>
      {/* TODO: ELIMINAR CUANDO ESTEN LISTOS LOS PONENTES */}
    </section>
  );
}

export default Speakers;
