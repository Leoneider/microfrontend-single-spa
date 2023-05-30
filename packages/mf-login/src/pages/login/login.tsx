import { LoginForm } from "./components";

export default function Login() {
  return (
    <>
      <h2>Inicio de sesión</h2>
      <p>
        ¿Aún no tienes una cuenta?{" "}
        <a
          className="text-decoration-none"
          href="https://www.siigo.com/precios-siigo/"
        >
          Créala aquí
        </a>
      </p>

      <LoginForm />
    </>
  );
}
