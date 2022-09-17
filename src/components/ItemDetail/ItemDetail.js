import ItemCountDetail from '../ItemCountDetail/ItemCountDetail';
import './ItemDetail.styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({product}) => {

  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart')
  }

  return (
    <div className="itemDetailContainer">
        <h2>{product.name}</h2>
        <img src={product.img.primeraImg} />
        <p className="itemDetailDes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="itemDetailPrice">{product.price}$</p>
        <ItemCountDetail
        stock={product.stock}
        count={count}
        setCount={setCount}/>
        <button onClick={handleClick} className='cartLinkDetail'>Agregar al carrito</button>
    </div>
  )
};

export default ItemDetail;