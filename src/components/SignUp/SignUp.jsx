import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
    return (
        <>
            <div className="signup-body">
                <div className="signup-card">
                    <img src="./src/assets/logo_h.png" id="logo" />
                    <h3 className="title">Crie uma conta</h3>
                    <br />
                    <form action="#">
                        <input type="text" placeholder="Nome completo" /> <br />
                        <input type="text" placeholder="email ou usuário" /> <br />
                        <input type="text" placeholder="Crie uma palavra passe" /> <br />
                        <input type="text" placeholder="Confirme sua senha" /> <br />
                        <input type="text" placeholder="Código da empresa" /> <br />
                        <input type="text" placeholder="Insira sua password" /> <br />
                        <input type="submit" value="Login" id="btn" />
                    </form>
                </div>
                <p className="recover-account">
                    <Link to="/login" className="recover-account-link-2">
                        Já tem uma conta?
                    </Link>
                </p>
            </div>
        </>
    );
}