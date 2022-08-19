import { initialData } from '../helpers/initialData';

const KEY = 'a157bc3d6c474f31807175939221708';

interface FetchDataProps {
  city: string;
  setIsValidCity: (argument: boolean) => void;
}

export async function fetchData({ city, setIsValidCity }: FetchDataProps) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no&lang=pt`;

  const fetchResponse = await fetch(url);
  if (fetchResponse.status !== 200) {
    setIsValidCity(false);
    return initialData;
  }
  setIsValidCity(true);
  const data = await fetchResponse.json();
  return data;
}
