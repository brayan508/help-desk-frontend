



const Dropdaw = () => {
  return (
    <div className="flex w-full flex-col gap-2">
      <select
        name="cargo"
        defaultValue=""
        className="w-full cursor-pointer rounded-lg border border-slate-700 bg-slate-800 p-2 text-white transition outline-none focus:border-blue-500"
      >
        <option value="" disabled>
          Selecione seu cargo
        </option>
        <option value="tecnico">Técnico</option>
        <option value="usuario">Usuário</option>
      </select>
    </div>
  );
};

export default Dropdaw;
