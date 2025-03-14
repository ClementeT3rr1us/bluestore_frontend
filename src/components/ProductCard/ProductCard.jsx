import "./ProductCard.css";

export default function ProductCard(props) {
    return (
        <>
        <div className="card-body">
            <img src={props.img} />
            <h3>{props.name}</h3><br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Sapiente, ills ducimus 
            </p>
            <h4>R$ {props.price}</h4>
        </div>
        </>);
}