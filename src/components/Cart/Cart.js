import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const isCartVisible = useSelector(state => state.cart.isVisible);
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <>
      {
        isCartVisible &&
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {
              cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))
            }
          </ul>
        </Card>
      }
    </>
  );
};

export default Cart;
