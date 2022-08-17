export function Form() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <form>
        <input
          type="text"
          placeholder="cidade"
          className="p-3 rounded-lg outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>
    </div>
  );
}
