import React from "react";
import PriceCard from "./PriceCard";

const Prices: React.FC = () => {
  const formUrl = "https://forms.gle/C9EpUkNN1YHT3reT6";

  const priceData = [
    {
      title: "Profesionales",
      discountPrice: 120,
      normalPrice: 140,
      beneficios: [
        "Kit de Bienvenida",
        "Certificado de asistente por 60 h académicas",
      ],
    },
    {
      title: "Estudiantes",
      discountPrice: 110,
      normalPrice: 130,
      beneficios: [
        "Kit de Bienvenida",
        "Certificado de asistente por 60 h académicas",
      ],
    },
    {
      title: "Delegaciones (5+)",
      discountPrice: 100,
      normalPrice: 120,
      additionalNote:
        "* Precio válido únicamente para delegaciones conformadas por 5 o más integrantes",
      beneficios: [
        "Kit de Bienvenida",
        "Certificado de asistente por 60 h académicas",
      ],
    },
  ];

  return (
    <section className='min-h-screen bg-[#000415] py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-secondary sm:text-6xl slide-top leading-relaxed sm:leading-loose'>
          Inscripciones
        </h2>
        <p className='text-center text-cyan-400 mb-8'>
          Aprovecha el descuento especial válido hasta el 31 de Octubre de 2025
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {priceData.map((price, index) => (
            <PriceCard
              key={index}
              title={price.title}
              discountPrice={price.discountPrice}
              normalPrice={price.normalPrice}
              formUrl={formUrl}
              additionalNote={price.additionalNote}
              beneficios={price.beneficios}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
