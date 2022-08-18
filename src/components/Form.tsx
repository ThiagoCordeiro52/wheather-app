import React, { useState } from 'react';

import { fetchData } from '../services/api';
import { initialData } from '../helpers/initialData';

interface FormPropsData {
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

interface FormProps {
  data: FormPropsData;
  setData: ({}: FormPropsData) => void;
  setIsValidCity: (argument: boolean) => void;
}

export function Form({ data, setData, setIsValidCity }: FormProps) {
  const [city, setCity] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!city) {
      setIsValidCity(false);
    }

    fetchData({ city, setIsValidCity }).then((response) => {
      setData(response);
    });
  }

  function handleChange(event: React.FormEvent) {
    const target = event.target as HTMLInputElement;
    setCity(target.value || '');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 w-full flex p-4 sm:relative justify-center"
    >
      <input
        type="text"
        placeholder="cidade"
        className="p-3 rounded-lg outline-none w-full sm:max-w-[300px] flex-1"
        value={city}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
      >
        Pesquisar
      </button>
    </form>
  );
}
