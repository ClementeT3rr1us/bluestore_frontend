import "./ProductCard.css";

export default function ProductCard(props) {
    return (
        <>
        <div className="card-body">
            <img src="../src/assets/cloth_29.jpg" />
            <h3>Nome do producto</h3><br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Sapiente, ills ducimus 
            </p>
            <h4>R$ 48 </h4>
        </div>
        </>);
}