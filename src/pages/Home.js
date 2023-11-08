import { useEffect } from "react";
import Product from "../components/Product";
import { fetchProducts } from "../redux/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <main className="main-content noselect">
        <div className="product-container d-flex justify-content-center">
          <div className="product-cards row">
            {products.slice(0, 4).map((product) => (
              <Product item={product} key={product.title} />
            ))}
          </div>
        </div>
        <div className="related-products">
          <div className="related-products-header">
            <h1 className="m-auto">Related Products</h1>
          </div>
          <div className=" d-flex justify-content-center row">
            {products.slice(4, 8).map((product) => (
              <Product item={product} key={product.title} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
