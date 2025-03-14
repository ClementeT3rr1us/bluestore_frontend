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
                        <input type="submit" value="Login" id="btn"/>
                    </form>
                </div>
            </div>
        </>
    );
}