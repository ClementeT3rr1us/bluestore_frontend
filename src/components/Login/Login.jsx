import { Link } from "react-router-dom";
import "./Login.css"

export default function Login() {
    return (
        <>
            <div className="login-body">
                <div className="card">
                    <img src="./src/assets/logo_h.png" id="logo" />
                    <h3 className="title">Insira seu dados</h3>
                    <br />
                    <form action="#">
                        <input type="text" placeholder="Insira o seu usuário"/> <br />
                        <input type="password" placeholder="Insira sua password"/> <br />
                        <p className="recover-account">
                        <Link to="recover-account" className="recover-account-link">
                               Esquece a senha?
                        </Link></p>
                        <input type="submit" value="Login" id="btn"/>
                    </form>
                </div>
                <br />
                <p className="recover-account">
                        <Link to="recover-account" className="recover-account-link-2">
                               Esquece a senha?
                        </Link></p>
            </div>
        </>
    );
}