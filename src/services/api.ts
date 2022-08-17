const KEY = 'a157bc3d6c474f31807175939221708';

export async function fetchData(city: string) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchRespnse = await fetch(url);
  const data = await fetchRespnse.json();
  return data;
}
