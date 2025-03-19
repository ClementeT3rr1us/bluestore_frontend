import "./Stock.css";
export default function Stock(params) {
    return(
    <>
      <div className="stock-body">
        <h2>
            AREA DO STOCK
        </h2>
        <button id="btnNewProduct">
            Add novo produto
        </button>
        <table>
            <tr>
                <td>nome</td><td>descrição</td><td>valor</td><td>quantidade</td>
            </tr>
        </table>
      </div>
    </>
);
}