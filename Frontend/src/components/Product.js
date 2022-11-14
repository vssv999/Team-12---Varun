import "./Product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishList } from "../redux/actions/wishlistActions";
import { withRouter } from "react-router-dom";

const Product = ({ imageUrl, brand, price, name, productId, history }) => {
  const dispatch = useDispatch();

  const addToWishListHandler = () => {
    dispatch(addToWishList(productId));
    history.push(`/wishItems`);
  };

  return (
    <div className="product m-1 border border-grey">
      <div className="text-end row">
        <Link onClick={addToWishListHandler}>
          <i className="bi bi-heart bg-white wishlisticon border border-grey"></i>
        </Link>
        <Link to={`/product/${productId}`}>
          <img src={imageUrl} alt={name} width={100} />
        </Link>
      </div>
      <div className="product_info text-center row">
        <p className="fw-bold info_brand">{brand}</p>
        <Link
          to={`/product/${productId}`}
          className="info_name text-decoration-none text-dark"
        >
          {name.substring(0, 32)}...
        </Link>
        <p className="info__price fw-bold m-2">{price} Points</p>
      </div>
    </div>
  );
};

export default withRouter(Product);
