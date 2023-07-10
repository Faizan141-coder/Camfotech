import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import { fetchSellerProducts } from '../actions/action';

const ProductManage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sellerProducts = useSelector((state) => state.SellerProductReducer.sellerProducts);
  const dispatch = useDispatch();

  localStorage.setItem('sellerPage', true);

  useEffect(() => {
    dispatch(fetchSellerProducts());
  }, [dispatch]);

  const handleClickProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="home">
      <div className='buyer'>
        {sellerProducts.map((product) => (
          <ProductDetailsPage
            key={product._id}
            product={product}
            isSelected={selectedProduct === product}
            onClick={() => handleClickProduct(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductManage;
