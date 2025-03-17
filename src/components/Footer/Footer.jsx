import "./Footer.css";

export default function Footer() {
    return (
        <>
            <div className='footer-body'>
                <div className="footer-column">
                    <p>
                        <h3>
                            Siga-nos em
                        </h3><br />
                        <a href="#">
                            <img src="./src/assets/ic_instagram.png" height={42} width={42} />
                        </a>
                        <a href="#">
                            <img src="./src/assets/ic_facebook.png" height={42} width={42} />
                        </a>
                        <a href="#">
                            <img src="./src/assets/ic_youtube.png" height={42} width={42} />
                        </a>
                    </p>
                </div>
                <div className="footer-column">
                    <p>
                        <h3>
                            Endereços
                        </h3><br />
                        <a href="#">Endereço Físico</a> <br /> <br />
                        <a href="mailto:">Email: clementedino681@gmai.com</a> <br /> <br />
                        <a href="tell:">Telefone: +244 921 100 664</a>
                    </p>
                </div>
                <div className="footer-column">
                    <p>
                        <p>Sobre o desenvolvedor</p>
                        <a href="#">
                            <img src="./src/assets/qr_code.jpg" width={120} height={120} id="qr-link"/>
                        </a>
                    </p>
                </div>

            </div>
        </>
    );
}