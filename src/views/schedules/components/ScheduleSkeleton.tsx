// Skeleton para una card de ponente/evento
const CardSkeleton = () => {
  return (
    <div className="grid grid-cols-7 sm:grid-cols-9 rounded-lg sm:rounded-2xl px-2 sm:px-5 py-2 sm:py-4 gap-1 sm:gap-5 mx-2 border-2 border-slate-800 animate-pulse">
      {/* Hora skeleton */}
      <span className="font-bold text-sm sm:text-lg col-span-7 sm:col-span-2 text-center flex items-center justify-center">
        <div className="h-4 sm:h-5 bg-slate-700/50 rounded w-20 sm:w-28" />
      </span>
      
      {/* Texto/Nombre skeleton */}
      <div className="flex justify-center sm:justify-start sm:items-start col-span-7">
        <div className="h-4 sm:h-5 bg-slate-700/50 rounded w-48 sm:w-full" />
      </div>
    </div>
  );
};

// Skeleton para día completo de cronograma
export const DayScheduleSkeleton = () => {
  return (
    <div className="w-full flex flex-col rounded-xl sm:rounded-2xl gap-3 sm:gap-5">
      {/* Título del día skeleton */}
      {/* <div className="h-8 sm:h-14 bg-slate-700/50 rounded w-64 mx-auto mb-2 sm:mb-4 animate-pulse" /> */}
      
      {/* Cards skeleton */}
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};

// Skeleton para los botones de días
export const DayButtonsSkeleton = () => {
  return (
    <div className="w-full flex gap-5 justify-center flex-wrap mb-5">
      {[1, 2, 3, 4, 5].map((i) => (
        <div 
          key={i}
          className="h-10 w-24 bg-slate-700/50 rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
};
