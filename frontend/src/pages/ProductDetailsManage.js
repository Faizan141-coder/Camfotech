import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import {fetchSellerProducts} from '../actions/action'
import ProductDescriptionForm from '../components/ProductDescriptionForm'

const ProductManage = () => {
    
    const selector =useSelector((state)=>state.reducer)
    const sellerProducts = useSelector((state) => state.SellerProductReducer.sellerProducts);
    const dispatch = useDispatch()
    localStorage.setItem('sellerPage',true)
    useEffect(() => { 
        dispatch(fetchSellerProducts())
        console.log("products seller",sellerProducts)
        
    }, [selector, dispatch, sellerProducts])

    return (
        <div className="home">
            <div className='buyer'>
                {sellerProducts && sellerProducts.map((product) => (
                    <ProductDetailsPage key={product._id} product={product} />
                ))}
            </div>
            <ProductDescriptionForm />
        </div>
    )
}

export default ProductManage