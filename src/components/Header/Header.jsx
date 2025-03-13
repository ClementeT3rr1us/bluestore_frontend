import "./Header.css";

export default function Header() {
    return(
        <>
         <div className="header-body">
            <img src="./src/assets/logo_sp2.png" id="logo" />
            <div className="form-content">
                <form action="#">
                    <input type="text" placeholder="Pesquise algum produto" id="txtField"/>
                    <input type="submit" value="Pesquisar" id="btnSearch"/>
                </form>
            </div>
         </div>
        </>
    );
}