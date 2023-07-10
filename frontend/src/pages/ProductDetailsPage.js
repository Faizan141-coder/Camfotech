import 'material-symbols';
import 'material-symbols'
import '../index.css'
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';


const ProductDetailsPage = ({  product }) => {

  const selector =useSelector((state)=>state.reducer)
  const [setRole] = useState('default');
  const flag=  localStorage.getItem('sellerPage',false)

  console.log(flag)
      
  useEffect(() => {
       
  const user = localStorage.getItem('user');
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setRole(parsedUser.role);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }
  }, [selector, setRole]);

  return (
      <div className="buyer-details cursor">
        <Link to="/product-details">
          <p><strong>Product: </strong>{product.name}</p>
          <p><strong>Price: </strong>{product.price}</p>
          <img className='img-size' src={product.image} alt="img"></img>
        </Link>
    </div>
  )
}

export default ProductDetailsPage
