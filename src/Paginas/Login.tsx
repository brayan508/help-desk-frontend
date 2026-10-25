import Input from "../Componentes/Input";
import Button from "../Componentes/Button";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-800 p-4">
      <img
        className="mb-6 h-32 w-32 cursor-pointer object-contain"
        src="/Logo.png"
        alt="Logo"
      />
      <div className="flex w-full max-w-sm flex-col items-center justify-center gap-4 rounded-2xl border border-blue-800 bg-slate-900 p-8 shadow-xl">
        <h1 className="text-2xl">Entar no sistema</h1>
        <h3>Faça login para acessar o Help Desk</h3>
        <Input type="email" placeholder="✉️ Email" />
        <Input type="password" placeholder="🔒 Senha" />
        <Button title="Login" />

        <Link className="w-full" to="/Register">
        <Button title="Não tenho conta" variant="outline" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
