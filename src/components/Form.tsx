import React, { useState } from 'react';

import { fetchData } from '../services/api';

export function Form() {
  const [city, setCity] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    fetchData(city).then((response) => {});
  }

  function handleChange(event: React.FormEvent) {
    const target = event.target as HTMLInputElement;
    setCity(target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="cidade"
        className="p-3 rounded-lg outline-none"
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
