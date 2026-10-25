import Input from "../Componentes/Input";
import Button from "../Componentes/Button";
import Dropdaw from "../Componentes/Dropdaw";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-slate-800 p-4">
        <img
          className="mb-2 h-32 w-32 cursor-pointer object-contain"
          src="/Logo.png"
          alt="Logo"
        />
        
      <div className="flex w-full max-w-sm flex-col items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-xl gap-3">

        
        <h1 className="text-2xl">Crie sua conta</h1>
        <h3>Preencha os dados a baixo</h3>
        <Input type="text" placeholder="Nome completo" />
        <Input type="email" placeholder="Email" />
        <Dropdaw/>

        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Repetir senha" />
        <Button title="Cadatrar" />
        <Link className="w-full" to="/Login">
        <Button title="Já tenho conta" variant="outline" />
        </Link>

      </div>
    </div>
  );
};

export default Register;
