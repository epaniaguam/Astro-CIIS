const SpeakerSkeleton = () => {
  return (
    <div className="m-auto h-full animation-view">
      <article className="w-72 p-4 rounded-[28px] border border-default h-full animate-pulse">
        <div className="w-full h-full">
          {/* Imagen skeleton - aspecto cuadrado */}
          <div className="w-full mb-2 aspect-square bg-slate-700/50 rounded-xl" />
          
          <div className="relative">
            {/* Nombre skeleton con bandera */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex-1 space-y-2">
                <div className="h-5 bg-slate-700/50 rounded w-full" />
                <div className="h-5 bg-slate-700/50 rounded w-3/4" />
              </div>
              {/* Bandera skeleton */}
              {/* <div className="w-8 h-6 bg-slate-600/50 rounded flex-shrink-0" /> */}
            </div>
            
            {/* Rol/Descripción skeleton */}
            <div className="mt-2 space-y-2">
              <div className="h-4 bg-slate-600/50 rounded w-full" />
              <div className="h-4 bg-slate-600/50 rounded w-5/6" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SpeakerSkeleton;
