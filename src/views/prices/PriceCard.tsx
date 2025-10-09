import React from "react";

interface PriceCardProps {
  title: string;
  discountPrice: number;
  normalPrice: number;
  formUrl: string;
  beneficios: string[];
  additionalNote?: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  discountPrice,
  normalPrice,
  formUrl,
  beneficios,
  additionalNote,
}) => {
  return (
    <div className='bg-[#000415] rounded-3xl p-8 transform transition-all hover:scale-105 border border-cyan-500 hover:border-cyan-400 hover:bg-[#020c3a] shadow-lg'>
      <h3 className='text-2xl font-bold text-white text-center mb-4'>
        {title}
      </h3>
      <div className='text-center mb-6'>
        <span className='text-5xl font-bold text-cyan-400'>
          s/{discountPrice}
        </span>
        <span className='text-gray-400 text-sm'>.00</span>
        <p className='text-sm text-gray-400 mt-2 italic'>
          Válido hasta el 31 de Octubre
        </p>
      </div>

      <p className='text-gray-400 text-center mb-4'>
        Luego:{" "}
        <span className='text-white font-semibold'>s/{normalPrice}.00</span>
        <br />
        <span className='text-sm'>(precio normal)</span>
      </p>
      <div className='border-t border-gray-700 my-4'></div>
      <p className='text-white font-semibold mb-2'>Beneficios: </p>
      <ul className='text-gray-400 text-sm space-y-2 mb-4'>
        {beneficios.map((beneficio, index) => (
          <li
            key={index}
            className='flex items-start'
          >
            <span className='mr-2'>-</span> {beneficio}
          </li>
        ))}
      </ul>
      {additionalNote && (
        <p className='text-xs text-gray-300 italic text-left mb-4'>
          {additionalNote}
        </p>
      )}
      <a
        href={formUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200'
      >
        Inscribirse ahora
      </a>
    </div>
  );
};

export default PriceCard;
