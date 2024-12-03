import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../store/cart';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const numberOfCartItems = useSelector(state => state.cart.cartItems.length);

  function handleCartButtonClick() {
    dispatch(cartActions.toggleShowCart());
  }

  return (
    <button className={classes.button} onClick={handleCartButtonClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
