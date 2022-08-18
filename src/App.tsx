import { useState } from 'react';

import { Card } from './components/Card';
import { Form } from './components/Form';
import { InvalidCityModal } from './components/InvalidCityModal';

import { initialData } from './helpers/initialData';

function App() {
  const [data, setData] = useState(initialData);
  const [isValidCity, setIsValidCity] = useState<boolean>(true);

  return (
    <div className="flex flex-col w-full h-screen items-center sm:justify-center p-4">
      <Form data={data} setData={setData} setIsValidCity={setIsValidCity} />
      <Card data={data} />
      {!isValidCity && <InvalidCityModal setIsValidCity={setIsValidCity} />}
    </div>
  );
}

export default App;
