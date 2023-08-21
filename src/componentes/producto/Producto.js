import './Producto.css';

const producto = ({ title, image, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title.substring(0, 20)} />
      <p>{title.substring(0, 20)}</p>
      <p>$ {price}</p>
    </div>
  );
};

export default producto;
