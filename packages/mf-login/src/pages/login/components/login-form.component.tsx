import { SiigoButtonAtom } from "@siigo/siigo-button-atom-react";
import { SiigoInputAtom } from "@lab/styleguide";
import { navigateToUrl } from "single-spa";
import { Link, useNavigate } from "react-router-dom";
import { getMorty } from "../../../services";
import { useDispatch } from "react-redux";
import { createUser, resetUser, UserKey } from "@lab/state";
import { useEffect } from "react";
import { clearLocalStorage } from "../../../utilities";

export default function LoginForm() {
  const dispatch = useDispatch();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigateToUrl("/auth");
  }, []);

  const login = async () => {
    try {
      console.log("PROBANDO EVENTO");
      
      const result = await getMorty();
      dispatch(createUser({ ...result, rol: 'user'}));
      navigateToUrl("/home");
      // navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {}
  };
  
  return (
    <form>
      <div className="mb-3">
        <SiigoInputAtom
          label="Nombre"
          name="Nombre"
          requiredMessage="Este campo es requerido."
          type="text"
          required
        />
        <div className="text-end">
          <Link to="/auth/remember-user" className="text-decoration-none">
            ¿Olvidaste tu usuario?
          </Link>
        </div>
      </div>
      <div className="mb-3">
        <SiigoInputAtom
          label="Contaseña"
          name="Contaseña"
          requiredMessage="Este campo es requerido."
          type="text"
          required
        />
        <div className="text-end">
          <Link to="/auth/forgot-password" className="text-decoration-none">
            ¿Has olvidado tu contraseña?
          </Link>
        </div>
      </div>
      <div className="mb-3">
        <SiigoButtonAtom
          style={{ width: "100%" }}
          onClick={login}
          size="m"
          color="primary-green"
          text="Ingresar"
          type="submit"
        ></SiigoButtonAtom>
      </div>
      <hr />
      <div className="mb-3">
        <p className="text-start small">
          Al hacer clic en ingresar, estas aceptando nuestros
          <a className="text-decoration-none" href="">
            Términos y condiciones de servicio
          </a>
          y estas aceptando nuestra.
          <a className="text-decoration-none" href="">
            Política de privacidad de datos
          </a>
        </p>
      </div>
    </form>
  );
}
