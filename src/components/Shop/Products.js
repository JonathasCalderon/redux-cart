import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          product={{ id: 1, title: "Test", price: 6, description: 'This is a first product - amazing!' }}
        />
        <ProductItem
          product={{ id: 2, title: "Guitar", price: 200, description: 'Fender Stratocaster American Standard' }}
        />
      </ul>
    </section>
  );
};

export default Products;
