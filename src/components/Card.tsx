interface CardPropsData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

interface CardProps {
  data: CardPropsData;
}

export function Card({ data }: CardProps) {
  const { location, current } = data;

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[220px]">
      <header className="text-center">
        <span className="block text-xl font-bold text-slate-700">
          {location.name}
        </span>
        <span className="text-slate-400 text-sm font-medium">
          {location.region}, {location.country}
        </span>
      </header>

      <main className="font-bold text-slate-700 flex mt-4 mb-2 justify-center">
        <span className="text-7xl ">{current.temp_c}</span>
        <span className="text-2xl mt-1">ºC</span>
      </main>

      <footer className="flex justify-center flex-col items-center">
        <img src={current.condition.icon} className="block" />
        <span className="text-slate-700 font-medium">
          {current.condition.text}
        </span>
      </footer>
    </div>
  );
}
