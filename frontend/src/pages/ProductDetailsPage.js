import 'material-symbols';
import 'material-symbols'
import '../index.css'
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductDetailsPage = ({  product, isSelected, onClick }) => {

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
    <>
      <div className={`cursor ${isSelected ? 'selected' : ''}`} onClick={onClick}>
        <Link to={'/product-details'}>
          <h2 className='white no-link margin-bottom'><strong>Product: </strong>{product.name}</h2>
          <img className='img-size-detail' src={product.image} alt="img" />
        </Link>
        <div className='right'>
        <h2 className='white margin-bottom'>Description</h2>
        <p className='white margin-bottom'>
          Introducing our luxurious white pillow, a perfect addition to your bedroom or living space. This pillow is 
          designed to provide you with exceptional comfort and support, ensuring a restful and rejuvenating sleep 
          experience. <br/> <br/> Crafted with care, this white pillow features a soft and plush exterior made from high-quality 
          materials. The premium fabric cover is gentle against your skin, allowing you to sink into a cloud-like embrace 
          as you lay your head upon it. <br/> <br/> The pillow is generously filled with hypoallergenic and breathable fibers, creating 
          the ideal balance of softness and support. It cradles your head and neck, relieving pressure points and promoting 
          proper alignment, ultimately reducing the likelihood of waking up with a stiff neck or discomfort.
        </p>
        <h2 className='white no-link'><strong> <br/>Price: </strong>{product.price}</h2>
      </div>
      </div>
      
    </>
  )
}

export default ProductDetailsPage